const express = require("express");
const app = express();
var morgan = require("morgan");
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static("build"));
require("dotenv").config();
const PersonInfo = require("./models/personInfo");
const personInfo = require("./models/personInfo");

morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method Metodi koskettaa url osoitetta :url :status Response aika - :response-time  :body"
  )
);
const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if ((errorHandler.name = "CastError")) {
    return response.status(400).send({ error: "bad id" });
  }
  next(error);
};
app.use(errorHandler);

app.get("/api/persons", (req, res) => {
  PersonInfo.find({}).then((person) => {
    res.json(person.map((person) => person.toJSON()));
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  personInfo
    .findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.get("/info", (req, res) => {
  res.set("Content-Type", "text/html");
  PersonInfo.countDocuments().then((documents) => {
    res.send(
      `<p>Phonebook has info of 
      ${documents}
      people</p></br><p>
      ${Date()}
      </p>`
    );
  });

  console.log(Date.now());
});

app.post("/api/persons", (req, res) => {
  const person = req.body;

  if (!person.name) {
    return res.status(400).json({
      error: "No name given",
    });
  }
  if (!req.body.number) {
    return res.status(400).json({
      error: "No number given",
    });
  }

  const personObject = new PersonInfo({
    name: person.name,
    number: person.number,
  });
  console.log(personObject); //id tulee backendiin, mutta ei ehdi fronttiin?
  personObject
    .save()
    .then((person) => person.toJSON())
    .then((formatted) => {
      res.json(formatted);
    });
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  const person = {
    name: body.name,
    number: body.number,
  };
  PersonInfo.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => {
      res.json(updatedPerson.toJSON());
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  PersonInfo.findByIdAndRemove(req.params.id)
    .then((result) => {
      console.log("poistettu ID:llä" + req.params.id);
      res.status(204).end();
    })
    .catch((error) => next(error));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
