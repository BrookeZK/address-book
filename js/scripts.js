// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// newContactName = function() {
//   var contact = contact + +="1"
//
// }

// user interface
$(document).ready(function() {
  var addressBook = new AddressBook();
  $("#addressBook").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("input#firstName").val();
    var inputLastName = $("input#lastName").val();
    var inputPhoneNumber = $("input#phoneNumber").val();
    var contact = new Contact(inputFirstName, inputLastName, inputPhoneNumber)
    addressBook.addContact(contact)
    console.log(addressBook);
    $("#id").append("<p>" + addressBook.contacts[].id + "</p>");
    $("#first-Name").append("<p>" + addressBook.contacts[].firstName + "</p>");
    $("#last-Name").append("<p>" + addressBook.contacts[].lastName + "</p>");
    $("#phone-Number").append("<p>" + addressBook.contacts[0].phoneNumber + "</p>");
  });
});
