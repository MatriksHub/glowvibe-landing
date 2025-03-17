"use client";
import { useState, useEffect } from "react";

export default function SupportPage() {
  const [question, setQuestion] = useState("");
  // const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/api/support")
      .then((res) => res.json())
      // .then((data) => setTickets(data.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/support", {
      method: "POST",
      body: JSON.stringify({ 
        message: question, 
        user_id: "user_id_placeholder" 
      }),
    });

    const data = await response.json();

    if (data.success) {
      // setTickets([...tickets, data.data[0]]);
      setQuestion("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Support</h1>
      <p>Ask a question or chat with support.</p>

      {/* Chatbot */}
      <iframe
        src="https://www.chatbase.co/chatbot-embed/YOUR_CHATBOT_ID"
        width="100%"
        height="400"
      ></iframe>

      {/* Ask a Question */}
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Describe your issue..."
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>

      {/* List of Tickets */}
      {/* <div className="mt-6">
        <h2 className="text-xl font-semibold">Your Support Tickets</h2>
        {tickets.length === 0 ? (
          <p>No tickets yet.</p>
        ) : (
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.id} className="border p-2 mt-2">
                {ticket.message} - 
                  <span className="text-gray-500">
                    {ticket.status}
                  </span>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
}
