import React from "react";

//props received from rendering component
function Search({onFilterTextChange, searchText}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value = {searchText}
        onChange={(event) => onFilterTextChange(event.target.value)} 
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
