import { useState, type ChangeEvent } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [fullName, setFullName] = useState("");

  function handleFirstNameChange(evnt: ChangeEvent<HTMLInputElement>) {
    setFirstName(evnt.target.value);
    // setFullName(evnt.target.value + " " + lastName);
  }

  function handleLastNameChange(evnt: ChangeEvent<HTMLInputElement>) {
    setLastName(evnt.target.value);
    // setFullName(firstName + " " + evnt.target.value);
  }

  // derived state or calculated state
  const fullName = firstName + " " + lastName;

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <br />
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
