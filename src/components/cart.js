import React, {Component} from 'react';
//import Product from './product';

class Cart extends Component {
    render() {
        return (
            <div className="col">
                <h2>Carrello ({this.props.cart.length})</h2>
                {
                this.props.cart.map(smartphone => (
                    <> 
                    <p className="my-1" style={{float: "left"}}>{smartphone.name + " (" + smartphone.price + "€)"}</p>
                    <button className="btn btn-danger" onClick={() => this.props.onRemove(smartphone)} style={{float: "left", height: "30px", width: "70px", textAlign: "center", marginLeft: "25px"}}>Togli</button><br /><br /></>
                ))
                } 
              <br /><br />
              <strong>Totale: {this.props.total}€</strong>
            </div>
        );
    }
}

export default Cart;