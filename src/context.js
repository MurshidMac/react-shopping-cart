import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// React Context Api has both the Provider and the consumer which we could use
//Provider
//Consumer

class ProductProvider extends Component {
    
    state = {
        products:storeProducts,
        detailProduct: detailProduct
    }
    
    handleDetail = () =>{
        console.log('Hi from details')
    }
    
    addToCart = () =>{
        console.log('Hi from cart')
    }

    render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetail: this.handleDetail,
        addToCart:this.addToCart,
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider};
