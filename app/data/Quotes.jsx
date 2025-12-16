"use client"
import Swal from "sweetalert2";
import { useState } from "react";
import Quotes from "./Quotes.json"; // ملفي المحلي

export default function QuotesPage() {
  const [quote, setQuote] = useState(Quotes[0]);

  function getNewQuote() {
    const random = Quotes[Math.floor(Math.random() * Quotes.length)];
    setQuote(random);
  }
  function clipboard() {
    navigator.clipboard.writeText(`${quote.content} — ${quote.author}`);
    Swal.fire({
      icon: "success",
      title: "تم نسخ الاقتباس",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl mb-10">✨ اقتباسات يومية ✨</h1>
      <p className="text-stone-700 mb-5">{quote.tags}</p>
      <p className="text-xl">“{quote.content}”</p>
      <p className="mt-2 text-stone-700">— {quote.author}</p>
      <div className="mt-10 flex flex-col justify-center items-center">
        <button
          onClick={getNewQuote}
          className="w-auto mt-4 px-4 py-2 bg-indigo-500 text-white rounded"
        >
          اقتباس جديد
        </button>

        <button
          onClick={clipboard}
          className="w-auto mt-4 px-6 py-2 bg-green-600 text-white rounded"
        >
          نسخ
        </button>
      </div>
    </div>
  );
}

 

