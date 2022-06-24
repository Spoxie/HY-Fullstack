const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];
let length = Object.keys(persons).length;

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
    console.log("Henkilöä ei ole olemassa");
  }
});

app.get("/info", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(
    Buffer.from(
      "<p>Phonebook has info of " +
        length +
        " people</p></br><p>" +
        Date() +
        "</p>"
    )
  );

  console.log(Date.now());
});

app.post("/api/persons", (req, res) => {
  req.body.id = Math.floor(Math.random() * 100);
  const person = req.body;
  if (!req.body.name) {
    return res.status(400).json({
      error: "No name given",
    });
  }
  if (!req.body.number) {
    return res.status(400).json({
      error: "No number given",
    });
  }
  if (persons.some((elemnet) => elemnet.name === req.body.name)) {
    return res.status(400).json({
      error: "Name already in the list",
    });
  }
  persons = persons.concat(person);
  res.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id); //persons array muutetaan siten, että siihen lisätään kaikki muut listan objektit, paitsi se mitä pyydetään.
  response.status(204).end();
  console.log("poistettu ID:llä" + id);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
