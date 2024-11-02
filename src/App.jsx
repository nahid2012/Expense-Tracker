import React from 'react'
import './index.css'
import ExpenseList from './ExpenseList'
import AddExpense from './AddExpense'

function App() {
    return (
		<div className='custom flex justify-center align-center'>
			<ExpenseList />
			{/* <AddExpense /> */}
		</div>
    )
}

export default App

// import React, { useState } from 'react';

// function App() {
//   // State to manage visibility of the element
//   const [isVisible, setIsVisible] = useState(true);

//   // Function to toggle visibility
//   const toggleVisibility = () => {
//     setIsVisible((prev) => !prev);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide Element' : 'Show Element'}
//       </button>

//       {/* Conditionally render the element */}
//       {isVisible && (
//         <div
//           style={{
//             marginTop: '20px',
//             padding: '10px',
//             border: '1px solid black',
//             backgroundColor: '#f0f0f0',
//           }}
//         >
//           This is the element that can be hidden.
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
