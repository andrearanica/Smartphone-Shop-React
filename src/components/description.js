import React, {Component} from 'react';

class Description extends Component {
    render() {
        return(
            <>
            Nome: { this.props.smartphone.name }<br />
            Prezzo: { this.props.smartphone.price }<br />
            Descrizione: { this.props.smartphone.description }
            </>
        )
    }
}

export default Description;