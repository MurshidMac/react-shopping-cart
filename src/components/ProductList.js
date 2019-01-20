import React, { Component } from 'react';
import Product from './Product'
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

const urlForProducts = productslist => {
    return `http://localhost:3002/api/products`
}

class ProductList extends Component {

    state = {
        products: storeProducts,
        //productsList:[]
    }

    // Component Did mount to get the data from the server
    /*
    componentDidMount(){
        fetch(urlForProducts).then(productslist => productslist.json()).then(productslist =>{
            this.setState(this.state.productsList= productslist)
        })
    }*/

    render() {
        //console.log(this.state.products)

        return (
            //     <Product/>
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="Products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    (value) => {
                                        return value.products.map(product =>{
                                            return <Product key={product.id} product={product}/>
                                        })
                                    }
                                }
                            </ProductConsumer>

                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default ProductList;