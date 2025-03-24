import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleRequest = async () => {
    const res = await axios.post("http://localhost:8000/generate-reply", { prompt: input });
    setResponse(res.data.reply);
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">AION AI SaaS</h1>
      <input 
        className="border p-2 w-full my-4" 
        placeholder="Ask something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleRequest}>Generate Reply</button>
      <p className="mt-4 text-lg">{response}</p>
    </div>
  );
}
