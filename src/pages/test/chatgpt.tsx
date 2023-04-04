import { Spinner } from "phosphor-react";
import { useState } from "react";

const Page = () => {
  const [question, setQuestion] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState(null);

  const handleSend = async () => {
    setIsLoading(true);
    const { result } = await fetch("/api/services/chatgpt/chatgpt", {
      method: "POST",
      body: JSON.stringify({ question }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .finally(() => setIsLoading(false));

    console.log("===>", result);

    setResult(result);
  };

  return (
    <div
      style={{
        width: 1000,
        margin: "40px auto",
      }}
    >
      <div>
        <textarea
          style={{
            width: "100%",
            minHeight: 200,
          }}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
      </div>

      <button onClick={handleSend}>
        {isLoading ? <Spinner /> : "Envoyer"}
      </button>

      <hr />

      {result && (
        <textarea
          style={{
            width: "100%",
            minHeight: 800,
          }}
          value={JSON.stringify(result, null, 2)}
        />
      )}
    </div>
  );
};
export default Page;
