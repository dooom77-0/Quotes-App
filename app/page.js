import Quotes from "./data/Quotes.jsx";

export const metadata = {
  title: "Quotes",
  description: "Quotes",
};
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center w-screen bg-linear-to-r from-cyan-400 via-blue-300 via-0%0 to-green-300" dir="rtl">
      <Quotes />
    </div>
  );
}
