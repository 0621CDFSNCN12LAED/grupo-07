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
            return <div class="row">CARGANDO!!!</div>;
        }

        return (
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                        <div class="card-body">
                            Belleza (total de productos: {count[0]}
                        </div>
                    </div>
                    <div class="card bg-dark text-white shadow">
                        <div class="card-body">
                            Higiene (total de productos: {count[1]}
                        </div>
                    </div>
                    <div class="card bg-dark text-white shadow">
                        <div class="card-body">
                            Salud (total de productos: {count[2]}
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
        count.push(products.meta.countByCategory.salud);

        console.log(count);

        //Setear como un estado
        this.setState({ count: count });
    }
}
