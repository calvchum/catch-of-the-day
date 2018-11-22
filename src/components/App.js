import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFish from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {},
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  componentDidMount() {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes` , {
      context: this,
      state: 'fishes'
    });

    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }

  }

  componentWillUnmount() {
    base.removeBinding(this.ref); 
  }

  // every time state or props is updated, this lifecycle hook will run
  componentWillUpdate(nextProps, nextState) { 
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  loadSamples() {
    this.setState({ 
      fishes: sampleFish
    });
  }

  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes};
    //add in our new state
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set the statefish
    this.setState({ fishes: fishes });

  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // add to our state
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order: order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
          <ul className="list-of-fishes">
            {
              Object
              .keys(this.state.fishes)
              .map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order  fishes={this.state.fishes} 
                order={this.state.order}
                params={this.props.params}
        />
        <Inventory 
          loadSamples={this.loadSamples} 
          addFish={this.addFish}
          fishes={this.state.fishes} 
          />
      </div>
    )
  }
}

export default App;