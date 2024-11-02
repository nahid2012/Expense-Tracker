import React, { useEffect, useState } from 'react';
import AddExpense from './AddExpense';

function ExpenseList() {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const handleAddExpense = (newExpense) => {
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        setIsVisible(false);
    };

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const handleDeleteExpense = (id) => {
        setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
    };

    return (
        <div className='bg-white m-5 overflow-hidden relative w-1/2' style={{ height: '80vh' }}>
            <h1 className='text-3xl text-bold text-center font-roboto underline m-4'>Add, Remove & Track Your Expenses</h1>
            <div className="overflow-auto" style={{ height: 'calc(100% - 60px)' }}> {/* Adjust height to leave space for the button */}
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Description</th>
                            <th className="py-2 px-4 border-b text-left">Category</th>
                            <th className="py-2 px-4 border-b text-left">Amount</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{expense.description}</td>
                                <td className="py-2 px-4 border-b">{expense.category}</td>
                                <td className="py-2 px-4 border-b">${expense.amount.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b">{expense.date}</td>
                                <td className="py-2 px-4 border-b">
                                    <button 
                                        className="text-red-500 hover:underline ml-4" 
                                        onClick={() => handleDeleteExpense(expense.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button 
                className="absolute bottom-4 right-4 flex items-center bg-green-500 text-white p-2 rounded transition-all duration-500 group" 
                onClick={toggleVisibility}
            >
                <span className="mx-2 text-xl hidden group-hover:block">Add</span>
                <img src='/Plus-Icon.png' className="w-10 h-10 transition-transform duration-300 ease-in-out group-hover:scale-110" />
            </button>

            {isVisible && (
                <AddExpense onAddExpense={handleAddExpense} />
            )}
        </div>
    );
}

export default ExpenseList;