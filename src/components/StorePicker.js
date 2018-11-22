import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component { // Components needs to be capitalized
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore() {
    // e.preventDefault();
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A store</h2>
        <input type="text" defaultValue={getFunName()} required placeholder="Store Name" ref={(input) => this.storeInput = input}/>
        <button type="submit">Visit store</button>
      </form>
    )
  }
}


StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;