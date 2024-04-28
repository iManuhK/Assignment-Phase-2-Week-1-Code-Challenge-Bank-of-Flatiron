import React, {useState} from "react";

function AddTransactionForm({onFormSubmit}) {
  const formDefaults = {
    date: "1970-01-01",
    description: "some text",
    category: "food",
    amount: 0
  }
  const [inputValues, setInput] = useState(formDefaults)
//function that is fired on submit
  function handleNewTransaction(event){
    event.preventDefault()
    onFormSubmit(inputValues)
  }
  //function that is fired when the value of inputs change
  function handleChange(event){
    setInput({...inputValues,[event.target.name]:event.target.value})
  }
  return (
    <div className="ui segment">
      <form name="form"
      onSubmit ={handleNewTransaction}
      onChange = {handleChange} 
      className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value = {inputValues.date} />
          <input type="text" name="description" value= {inputValues.description} placeholder="Description" />
          <input type="text" name="category" value= {inputValues.category} placeholder="Category" />
          <input type="number" name="amount" value= {inputValues.amount}  placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
