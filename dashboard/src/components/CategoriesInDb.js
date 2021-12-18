import React, { Component } from "react";

const PRODUCTS_URL = "http://localhost:3000/api/products";
// const PRODUCTS_URL = "/api/products";

const count = [];

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
            <div className="row col-lg-12 mb-4 m-auto justify-content-evenly">
              <div className="col-lg-3 mr-4 card bg-hampi text-verde-musgo shadow mb-4">
                <div className="card-body">
                  <h4> Belleza</h4>
                  <p>Total de productos: {count[0]}</p>
                </div>
              </div>
              <div className="col-lg-3 mr-4 card bg-hampi text-verde-musgo shadow mb-4">
                <div className="card-body">
                  <h4> Higiene </h4>
                  <p>Total de productos: {count[1]}</p>
                </div>
              </div>
              <div className="col-lg-3 mr-4 card bg-hampi text-verde-musgo shadow mb-4">
                <div className="card-body">
                  <h4>Fitoterapia </h4>
                  <p>Total de productos: {count[2]}</p>
                </div>
              </div>
            </div>
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
        const products = await result.json();

        count.push(products.meta.countByCategory.belleza);
        count.push(products.meta.countByCategory.higiene);
        count.push(products.meta.countByCategory.fitoterapia);

        console.log(count);

        //Setear como un estado
        this.setState({ count: count });
    }
}
