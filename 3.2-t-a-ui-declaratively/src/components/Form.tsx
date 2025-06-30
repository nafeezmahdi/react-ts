import { useState, type ChangeEvent, type SyntheticEvent } from "react";

function submitForm(answer: string): Promise<void> {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function Form() {
  // visual status : empty, typing, submitting, success, error
  const [answer, setAnswer] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"typing" | "submitting" | "success">(
    "typing"
  );

  const handleTextChange = (evnt: ChangeEvent<HTMLTextAreaElement>) => {
    setError(null);
    setAnswer(evnt.target.value);
  };

  const handleSubmit = async (evnt: SyntheticEvent) => {
    evnt.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      if (err instanceof Error) {
        setStatus("typing");
        setError(err.message); // Display the error message
      }
    }
  };

  if (status === "success") return <h1>Thats right!</h1>;

  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={(evnt) => handleSubmit(evnt)}>
        <textarea
          value={answer}
          onChange={(evnt) => handleTextChange(evnt)}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer === "" || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
      <hr />
    </>
  );
}
