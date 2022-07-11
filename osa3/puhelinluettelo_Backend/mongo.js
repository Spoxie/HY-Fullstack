const mongoose = require("mongoose");

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://SpoxieFullStack:${password}@cluster0.p9de9.mongodb.net/PhoneBook?retryWrites=true&w=majority`;

mongoose.connect(url);

const phoneNumberSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", phoneNumberSchema);

const entry = new Person({
  name: name,
  number: number,
});

if (process.argv.length === 3) {
  Person.find({}).then((persons) => {
    persons.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else {
  entry.save().then((result) => {
    console.log(`added ${name} with the number ${number} to Phonebook`);
    mongoose.connection.close();
  });
}
