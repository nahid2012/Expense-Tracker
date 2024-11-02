import React, { useState } from 'react';

function AddExpense({ onAddExpense }) {
    const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const addExpense = (e) => {
        e.preventDefault();

        if (!description || !amount || !category || !date) {
            alert('Please fill in all fields');
            return;
        }

        const newExpense = {
            id: Date.now(), // Unique ID
            description,
            amount: parseFloat(amount),
            category,
            date,
        };

        onAddExpense(newExpense); // Pass the new expense to the parent component

        // Clear form fields
        setDescription('');
        setAmount('');
        setCategory('');
        setDate('');
    };

    return (
        <div className='bg-white absolute bg-cyan-500 bottom-0'>
            <h1 className='text-2xl text-bold text-center font-roboto underline m-4'>Give data to Save your Expense History</h1>
            <form onSubmit={addExpense} className="mb-4">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="border p-2 mr-2"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Expense
                </button>
            </form>
        </div>
    );
}

export default AddExpense;
