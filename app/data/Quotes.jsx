"use client"

import { useState } from "react";
import Quotes from "./Quotes.json"; // ملفك المحلي

export default function QuotesPage() {
  const [quote, setQuote] = useState(Quotes[0]);

  function getNewQuote() {
    const random = Quotes[Math.floor(Math.random() * Quotes.length)];
    setQuote(random);
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl mb-10">✨ اقتباسات يومية ✨</h1>
      <p className="text-stone-700 mb-5">{quote.tags}</p>
      <p className="text-xl">“{quote.content}”</p>
      <p className="mt-2 text-stone-700">— {quote.author}</p>

      <button
        onClick={getNewQuote}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded"
      >
        اقتباس جديد
      </button>
    </div>
  );
}

 

