class Validation {
   firstName = '';
   lastName = '';

   validateFirstName(firstName) {
    if (firstName.match(/^[a-zA-Z]*$/)) {
        return true;
    } else {
        return false;
    }
   }

   validateLastName(lastName) {
    if (lastName.match(/^[a-zA-Z]*$/)) {
        return true;
    } else {
        return false;
    }
   }

}

validation = new Validation();

module.exports = Validation;
