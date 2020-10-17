import React from 'react';

const SearchBox=( {searchField,searchChange})=>{
  // const {searchField,searchChange}=props;
    return(
        <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={searchChange}//jb bi input field ma kuch write ya delete hoga tb ya onChange ka event call hoga khudi
          />
        </div>
    )
}










export default SearchBox;