interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

class ContactManager {
  private contacts: Contact[] = [];

  // Add new contact
  addContact(contact: Contact): void {
    this.contacts.push(contact);
    console.log(`✅ Contact added successfully: ${contact.name}`);
  }

  // View all contacts
  viewContacts(): Contact[] {
    if (this.contacts.length === 0) {
      console.log("📭 No contacts available.");
    }
    return this.contacts;
  }

  // Modify existing contact
  modifyContact(id: number, updatedContact: Partial<Contact>): void {
    const contact = this.contacts.find(c => c.id === id);

    if (!contact) {
      console.error(`❌ Error: Contact with ID ${id} not found.`);
      return;
    }

    Object.assign(contact, updatedContact);
    console.log(`✅ Contact with ID ${id} updated successfully.`);
  }

  // Delete contact
  deleteContact(id: number): void {
    const index = this.contacts.findIndex(c => c.id === id);

    if (index === -1) {
      console.error(`❌ Error: Contact with ID ${id} not found.`);
      return;
    }

    this.contacts.splice(index, 1);
    console.log(`✅ Contact with ID ${id} deleted successfully.`);
  }
}

const manager = new ContactManager();

// Add contacts
manager.addContact({
  id: 1,
  name: "Nandini",
  email: "nandini@gmail.com",
  phone: "9876543210"
});

manager.addContact({
  id: 2,
  name: "Nandu",
  email: "nandu@gmail.com",
  phone: "9123456780"
});

// View contacts
console.log("📋 Contact List:", manager.viewContacts());

// Modify contact
manager.modifyContact(1, { phone: "9999999999" });

// Delete contact
manager.deleteContact(2);

// Try deleting non-existing contact (Error case)
manager.deleteContact(5);

// Final contact list
console.log("📋 Final Contact List:", manager.viewContacts());
