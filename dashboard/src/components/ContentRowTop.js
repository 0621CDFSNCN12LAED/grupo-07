import ValueCard from "./valueCard";
import React, { Component } from "react";

const productsURL = "http://localhost:3000/api/products";
const usersURL = "http://localhost:3000/api/users";

const count = []

class ContentRowTop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (!this.state.count) {
            return <div>Cargando... </div>;
        }
        return (
            <div className="row">
                <ValueCard
                    title="Productos en la Base de Datos"
                    icon="fa-shopping-cart"
                    color="primary"
                    value={this.state.count[0]}
                />
                <ValueCard
                    title="Categotias en la Base de Datos"
                    icon="fa-tags"
                    color="success"
                    value={3}
                />
                <ValueCard
                    title="Usuarios en la Base de Datos"
                    icon="fa-user"
                    color="warning"
                    value={this.state.count[1]}
                />
            </div>
        );
    }
    componentDidMount() {
        console.log("el componente se monto");
        this.fetchAll();
    }
    async fetchAll() {
        const result1 = await fetch(productsURL);
        const products = await result1.json();
        const productsCount = products.meta.count
        count.push(productsCount)
        
        
        const result2 = await fetch(usersURL);
        const users = await result2.json();
        const usersCount = users.meta.count
        count.push(usersCount);
   

        this.setState({ count: count });
    }
}

export default ContentRowTop;
