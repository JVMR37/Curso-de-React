import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {

    if (props.itens.length === 0) {
        return <h2 className="expenses-list__fallback">
            Sem registros, por enquanto !
        </h2>
    }

    return (
        <ul className="expenses-list">
            {props.itens.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );

}

export default ExpenseList;