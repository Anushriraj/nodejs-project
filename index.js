const connection = require("./connection");
const Validation = require("./validation");
const express = require("express");
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     connection.query("select * from person", (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.end(JSON.stringify(result));
//         }
//     });
// });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.removeHeader('x-powered-by');
  res.setHeader('Access-Control-Allow-Methods','POST');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
});

app.post("/login", (req, res, next) => {
  const data = req.body;
 let isValid = checkValidation(data, res);
  if (isValid) {
   addFullNameColumn(data);
    connection.query("INSERT INTO person SET ? ", data, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.end(JSON.stringify(result));
      }
    });
  }
});

checkValidation = (req, res) => {
  let validForm = true;
  if (validation.validateFirstName(req.firstName) == false) {
    res.end("Enter valid first name");
    validForm = false;
  }
  if (validation.validateLastName(req.lastName) == false) {
    res.end("Enter valid last name");
    validForm = false;
  }
  return validForm;
};

addFullNameColumn = (req) => {
    let fullName = req.firstName.concat(" ",req.lastName);
    req.fullName = fullName;
}
let validation = new Validation();
app.listen(4200);
