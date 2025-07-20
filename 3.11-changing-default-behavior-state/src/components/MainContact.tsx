import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

type Contact = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contact[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default function MainContact() {
  const [to, setTo] = useState<Contact>(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        // selectedContact={to}
        onSelect={(contact: Contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
