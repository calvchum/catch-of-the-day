import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {

  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    
    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is not available!</li>
    }
    return (
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render(){

    // displays changes in the order state in real time
    const orderIds = Object.keys(this.props.order) // this accesses the order state via props 
    // whenever the array (i.e. order state) changes, the total will also change. 
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
         <li className="total">
          <strong>Total:</strong>
          <p>{formatPrice(total)}</p>
         </li> 
        </ul>
      </div>
      // display the order of each fish
      // 1. access the order state

    )
  }
}

export default Order;