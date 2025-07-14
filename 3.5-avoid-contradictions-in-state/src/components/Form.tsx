import { useState, type FormEvent } from "react";

export default function Form() {
  const [text, setText] = useState("");
  // const [isSending, setIsSending] = useState(false);
  // const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState("typing");

  async function handleSubmit(evnt: FormEvent) {
    evnt.preventDefault();
    // setIsSending(true);
    setStatus("sending");
    await sendMessage(text);
    // setIsSending(false);
    // setIsSent(true);
    setStatus("sent");
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks For Feedback</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(evnt) => setText(evnt.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message
function sendMessage(text: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(text);
    setTimeout(resolve, 3500);
  });
}
