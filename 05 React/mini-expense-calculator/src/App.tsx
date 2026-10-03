import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
export  default function App() {
  const[expenses,setExpenses]=useState([
    {
      id:crypto.randomUUID(),
      title:"Chips",
      category:"grocery",
      amount:50
    },
    {
      id:crypto.randomUUID(),
      title:"T-Shirt",
      category:"clothes",
      amount:600
    },
    {
      id:crypto.randomUUID(),
      title:"Mobile Recharge",
      category:"bills",
      amount:349
    }
  ])
return (
  <>
  <main>
<h1>Track All Your Expenses Here</h1>
<div className="expense-tracker">
  <ExpenseForm setExpenses={setExpenses} />
  <ExpenseTable expenses={expenses} />
  
</div>
  </main>
  </>
)
}