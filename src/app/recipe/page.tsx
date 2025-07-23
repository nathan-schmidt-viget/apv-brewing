import CalculateSugar from "../components/calculateSugar";

export default function Recipe() {
  return (
    <div className='flex flex-col gap-6 mx-auto max-w-md min-h-screen p-4'>
      <CalculateSugar />
    </div>
  );
}
