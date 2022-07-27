import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col">
                <div className="card my-3" style={{width: '18rem', textAlign: 'center', border: '1px solid red'}}>
                    <center><img className="card-img-top" alt='' src={this.props.smartphone.img}/></center>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: 'red'}}>{ this.props.smartphone.name }</h5>
                        <p className="card-text">€{this.props.smartphone.price}</p>
                        <div className="alert" style={{ color: "white", backgroundColor: this.props.smartphone.color }}>Disponibile: { this.props.smartphone.available }</div>
                        <div><center>
                        <button className="btn btn-danger" onClick={() => this.props.onAdd(this.props.smartphone)} href="App.js/#cart">Aggiungi al carrello</button>                            </center></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;