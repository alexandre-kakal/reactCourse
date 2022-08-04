import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 9.5,
      date: new Date(2021, 2, 15),
    },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Microwave",
      amount: 359.55,
      date: new Date(2021, 2, 8),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;