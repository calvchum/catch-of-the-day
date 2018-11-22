import React from 'react';

class AddFishForm extends React.Component {
  createFish(event){
    event.preventDefault();
    const fish ={
      name: this.name.value,
      price: this.price.value,  
      status: this.status.value,
      desc: this.desc.value,      
      image: this.image.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset(0);
  }

  render(){
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input type="text" ref={(input) => this.name = input} placeholder="name"/>
        <input type="text" ref={(input) => this.price = input} placeholder="price"/>
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>        
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea type="text" ref={(input) => this.desc = input} placeholder="description"></textarea>
        <input type="text" ref={(input) => this.image = input} placeholder="image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;