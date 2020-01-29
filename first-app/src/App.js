import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './ProductGist/ProductGist';
import ProductGist from './ProductGist/ProductGist';
import productInfo from './ProductInfo/ProductInfo';
import ProductInfo from './ProductInfo/ProductInfo';
import Reviews from './Reviews/Reviews';


class App extends Component {

  state = {
    products: [
      {id: 1, name: "Wooden Comb", price: 199, qoh: 300},
      {id: 2, name: "Flame Thrower", price: 3999, qoh: 50}
    ],
    selectedProduct:{}
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/products")
    .then(response => {
      this.setState({products: response.data}) //setstate takes an object
    });
  }
  

  productSelectionHandler = (product) => {
    //console.log(product);
    this.setState({selectedProduct: product});
  }

  render() {
    
    const productGists = this.state.products.map(aProduct => {
      return (
      <ProductGist key = {aProduct.price} product={aProduct} 
        clickHandler= {() => {this.productSelectionHandler(aProduct)}} />);
    });

    return (
      <div className= "container">
      <div className="toppane">
        <h3 >Product App</h3>
        </div>
      <div className="leftpane">
           <h3>List of Products</h3>
                {productGists}
            </div>
        <div className="middlepane">
          <h3>Detail of the product : {this.state.selectedProduct.name}</h3>
            <ProductInfo product={this.state.selectedProduct} />
            </div>
            <div className= "rightpane">
              <h4>Review of your Product </h4>
                 <h4>{this.state.selectedProduct.name}</h4>
            <Reviews productId = {this.state.selectedProduct.id} />
            </div>
      </div>
    );
  }
}

export default App;

<div class="container">
  <div class="toppane">Test Page</div>
  <div class="leftpane">
    <h1>Test Page</h1></div>
  <div class="middlepane">Test Page</div>
  <div class="rightpane">
    <h1>Test Page</h1></div>
</div>