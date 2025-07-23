import CalculateApv from "./components/calculateApv";
import CalculateSugar from "./components/calculateSugar";
import NameGenerator from "./components/nameGenerator";

export default function Home() {
  return (
    <div className='flex flex-col gap-6 mx-auto max-w-md min-h-screen p-4'>
      <CalculateSugar />
      <CalculateApv />
      <NameGenerator />
    </div>
  );
}
