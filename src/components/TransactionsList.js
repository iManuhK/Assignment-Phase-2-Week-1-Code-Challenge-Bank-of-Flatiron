import React from "react";
import Transaction from "./Transaction";

//pass in the array of transactions (existing and new) and the search keyword(s) in state
function TransactionsList({transactions, searchText}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {/* use the typed in searchword here as this is the Component that renders the transactions
        and we have both new and old transactions from the server */}

        {/* We also have a .map() method that allows us to conditionally render
        our DOM elements inside of JSX */}
        {transactions.map(transaction => {
          if (
            transaction.description.toLowerCase().indexOf(
              searchText.toLowerCase()
            ) === -1
          ){return}
          else {
          return (<Transaction 
                  key = {transaction.id} 
                  date = {transaction.date} 
                  description = {transaction.description} 
                  category = {transaction.category}
                  amount = {transaction.amount}
                  />)
            }
                })
        } 
      </tbody>
    </table>
  );
}

export default TransactionsList;
