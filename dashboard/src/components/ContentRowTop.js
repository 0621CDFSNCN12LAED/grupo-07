import ValueCard from "./valueCard";
import React, { Component } from "react";

const productsURL = "http://localhost:3000/api/products";
const userURL = "http://localhost:3000/api/users";

class ContentRowTop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (!this.state.product && !this.state.user) {
            return <div>Cargando...</div>;
        }
        return (
            <div className="row">
                <ValueCard
                    title="Productos en la Base de Datos"
                    icon="fa-shopping-cart"
                    color="primary"
                    value={this.state.product}
                />
                <ValueCard
                    title="Categotias en la Base de Datos"
                    icon="fa-file"
                    color="success"
                    value="3"
                />
                <ValueCard
                    title="Usuarios en la Base de Datos"
                    icon="fa-user"
                    color="warning"
                    value={this.state.user}
                />
            </div>
        );
    }
    componentDidMount() {
        console.log("el componente se monto");
        this.fetchProducts();
        this.fetchUsers();
    }
    async fetchProducts() {
        const result = await fetch(productsURL);
        const response = await result.json();

        const product = response.count;
        console.log(product);

        this.setState({ product: product });
    }
    async fetchUsers() {
        const result = await fetch(userURL);
        const response = await result.json();
        const user = response.count;
        console.log(user);

        this.setState({ user: user });
    }
}

export default ContentRowTop;
