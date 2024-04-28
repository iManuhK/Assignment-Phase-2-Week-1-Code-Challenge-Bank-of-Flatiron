import React from "react";
//receives the props needed for what is supposed to show on the screen from Transaction
function Transaction({date, description, category,amount}) {
      return (
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
        </tr>
      );
}

export default Transaction;
