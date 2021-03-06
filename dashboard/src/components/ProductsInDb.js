import React, { Component } from "react";

const PRODUCTS_URL = "http://localhost:3000/api/products";
// const PRODUCTS_URL = "/api/products";

export default class ProductsInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };

        console.log("Evento: Constructor");
    }

    render() {
        if (!this.state.products) {
            return <div className="row">CARGANDO!!!</div>;
        }

        return (
            <div className="row">
                {this.state.products.map((product) => {
                    return (
                      <div className="col-lg-4 mb-4">
                        <div className="card bg-hampi text-verde-musgo shadow">
                          <div className="card-body">{product.name}</div>
                        </div>
                      </div>
                    );
                })}
            </div>
        );
    }

    componentDidMount() {
        console.log("Evento: componentDidMount");
        this.fetchProducts();
    }

    async fetchProducts() {
        //Fetch de los generos
        const result = await fetch(PRODUCTS_URL);
        const response = await result.json();
        const products = response.data;
        console.log(products);

        //Setear como un estado
        this.setState({ products: products });
    }
}
