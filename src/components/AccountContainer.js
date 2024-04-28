import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionArray, setTransaction] = useState([])
  const [searchText, setSearchFilter] = useState("")
  const url = "http://localhost:8001/transactions"

/*fetch transaction array from the server and useState to store for us */
fetch(url)
  .then(resp=>resp.json())
    .then(data=>setTransaction(data))

function handleNewTransaction(newInputs){
  setTransaction(transactions=>[...transactions,newInputs])

//persist new data to server from the form
fetch(url,{
  method: 'POST',
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(newInputs)
  })
}
  return (
    <div>
      
      <Search searchText={searchText} 
        onFilterTextChange={setSearchFilter} />
      <AddTransactionForm 
      onFormSubmit = {handleNewTransaction}
      />
      {/* requires two things as props, transactions and search word(s) in state */}
      <TransactionsList transactions = {transactionArray}
      searchText = {searchText}
      /> 
    </div>
  );
}

export default AccountContainer;
