class Contacts {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
  // methods for extended challenge (to string)
  toString() {
    return `${this.name} <${this.email}>`;
  }
}

class MyaddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contacts(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  getAtIndex(index) {
    return this.contacts[index];
  }
  findContactByName(name) {
    return this.contacts.filter(contact => {
      if (contact.name === name) {
        return contact;
      }
    });
  }
  findContactByRelation(relation) {
    for (let contact of this.contacts) {
      if (contact.relation === relation) {
        contactsToReturn.push(contacts);
      }
    }
    return contactsToReturn;
  }
  searchContacts(text) {
    return this.contacts.filter(contact => {
      for (let property in contact) {
        if (contact[property].includes(text)) {
          return contact;
        }
      }
    });
  }
}

//     this.contacts.forEach(contact => {
//       if (contact.name === name) {
//         return contact;
//       }
//     });
//   }
// }

let addressBook = new MyaddressBook();
addressBook.add("joseph u.", "joey_1@msn.com", "2486879898", "friend");
addressBook.add("jose p.", "joe_1231@msn.com", "24864321898", "compadre");
addressBook.add(
  "chris p. bacon",
  "crispy_420@msn.com",
  "248612898",
  "compadre"
);
console.log(addressBook);

console.log(addressBook);

function print(addressBookreference) {
  addressBookreference.contacts.forEach(contacts => {
    console.log(contacts);
  });
}

// extended challenge *****************************************************************

for (let contact of addressBook.contacts) {
  console.log(contact.toString);
}
//console.log(MyaddressBook.getAtIndex(2));

//console.log(MyaddressBook.findContactByName("joseph"));

console.log(MyaddressBook.searchByText(compadre));
