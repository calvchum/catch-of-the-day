import React from 'react';

class StorePicker extends React.Component { // Components needs to be capitalized
  render(){
    return (
      <form className="store-selector">
        <h2>Please Enter A store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;