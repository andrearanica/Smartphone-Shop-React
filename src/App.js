import React, {Component} from 'react'; 

import logo from './images/logo.png'
import Product from './components/product';
//import Description from './components/description';
import Cart from './components/cart';

var data = require("./json/smartphones.json");

class App extends Component {
  state = {
    /*smartphones: [
      { id:0, name: "Xiaomi 12", price: 874 },
      { id:1, name: "Samsung Galaxy S22", price: 745 },
      { id:2, name: "Oppo Find X5", price: 894 },
      { id:3, name: "OnePlus Nord", price: 845 }
    ],*/
    smartphones: data,
    cart: [],
    total: 0
  }

  handleDescription = s => {
    document.getElementById("description").smartphone = s;
  }

  handleAdd = (s) => {
    if (s.available === "Sì") {
      if (!this.state.cart.includes(s)) {
        const cart = this.state.cart;
        cart.push(s);
        this.setState({ cart });
        
        let total = this.state.total + s.price;
        this.setState({ total });
        console.log(total);
        <div className="alert alert-success" role="alert">Prodotto aggiunto correttamente!</div>
      } else {
        alert("Hai già inserito nel carrello questo prodotto!");
      }
    } else {
      alert("Prodotto non disponibile!");
    }
  }

  handleRemove = (smartphone) => {
    const cart = this.state.cart.filter(s => s.name !== smartphone.name);
    console.log(cart);
    this.setState({ cart });

    const total = this.state.total - smartphone.price;
    this.setState({ total });
  }

  handleSortByName = () => {
    console.log("Ordina");

    const smartphones = this.state.smartphones;
    smartphones.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ smartphones });
  }

  handleSortByNameReverse = () => {
    console.log("Ordina");

    const smartphones = this.state.smartphones;
    smartphones.sort((a, b) => b.name.localeCompare(a.name));
    this.setState({ smartphones });
  }

  searchManufacturer = () => {
    //let m = document.getElementById("manufacturer").value;
    console.log("Cerco il costruttore");
  }

  render () {
    return (
      <>
        <nav className="navbar navbar-dark" style={{backgroundColor: 'red', height: '5rem'}}>
          <a className="navbar-brand mx-5">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <strong style={{padding: '14px'}}>SmartPhoneWorld</strong>
          </a>
        </nav>
        <br />
        <div className="container">
          <h1>Benvenuto! 😄</h1><br></br>
          <center>
            <button className="btn btn-danger" style={{ margin: "10px" }} onClick={() => this.handleSortByName()}>Ordina A-Z</button>
            <button className="btn btn-danger" style={{ margin: "10px" }} onClick={() => this.handleSortByNameReverse()}>Ordina Z-A</button>
  
            <br />
            {/*<input id="manufacturer" className="form-control" />
            <button className="btn btn-danger" onClick={ this.searchManufacturer() }>Cerca Costruttore</button>*/}

            {/*<button className="btn btn-danger" style={{ margin: "10px" }} onClick={() => this.handleSortByPrice()}>Ordina per prezzo crescente</button>*/}
            
            {/*<form className="form-inline">
              <input type="text" className="form-control" style={{ width: "80%" }} />
              <button className="btn btn-danger" href="">Cerca</button>
            </form>*/
            }

            <div className="row">
              {
                this.state.smartphones.map(smartphone => (
                  <Product 
                  smartphone={smartphone}
                  onDescription={this.handleDescription}
                  onAdd={this.handleAdd}
                  cart={this.state.cart}/>
                ))
              }
            </div>
          </center>
          <br /><hr /><br />
          <Cart id="cart" cart={this.state.cart} total={this.state.total} onRemove={this.handleRemove} />
          <br /><br />
        </div>
        <div style={{ backgroundColor: "red", color: "white", height: "5rem", textAlign: "center"}}>
          <p style={{padding: "30px"}}>Andrea Ranica, 2022</p>
        </div>
      </>
    );
  }
}

export default App;
