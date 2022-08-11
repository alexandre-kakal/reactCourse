import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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

  const addExpenseHandler = (expense) => {
    console.log("In app js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
