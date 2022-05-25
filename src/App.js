import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {id: 'e0', title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 294.31},
        {id: 'e1', title: 'House Payment', date: new Date(2021, 1, 1), amount: 1000.31},
        {id: 'e2', title: 'Electricity', date: new Date(2021, 4, 4), amount: 101.31},
        {id: 'e3', title: 'Water', date: new Date(2021, 6, 7), amount: 70.31},
    ];

    return (
        <div>
            <NewExpense/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
