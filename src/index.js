import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Plate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {total: 0};
    }

    render() {
        return (
        <table className="table">
            <tbody>
            <tr>
                <th>Colour</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>{this.formatMoney(this.state.total)}</th>
                <th></th>
            </tr>
            {this.props.plates.map(plate => (
                <tr>
                    <td key={plate.id}>{plate.name}</td>
                    <td key={plate.id}>{this.formatMoney(plate.price)}</td>
                    <td key={plate.id}>{plate.qty}</td>
                    <td key={plate.id}>{this.formatMoney(plate.price * plate.qty)}</td>
                    <td><button onClick={() => this.handleIncrement(plate)}>+</button></td>
                    <td><button onClick={() => this.handleDecrement(plate)}>-</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        );
    }

    formatMoney(e){
        e = e/100;
        return e.toLocaleString("en-GB", {style: "currency", currency: "GBP"});
    }

    handleIncrement(e) {
        console.log(e.name);
        e.qty++;
        this.setState({total : +this.state.total + +e.price})
    }

    handleDecrement(e) {
        console.log(e.name);
        if(+e.qty !== 0){
            e.qty--;
            this.setState({total : this.state.total - e.price})
        }
    }
}

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {plates: [
            {name:"Black", price: "220", qty:"0"},
            {name:"Green", price: "210", qty:"0"},
            {name:"Blue", price: "280", qty:"0"},
            {name:"Purple", price: "370", qty:"0"},
            {name:"Orange", price: "420", qty:"0"},
            {name:"Pink", price: "460", qty:"0"},
            {name:"Grey", price: "520", qty:"0"},
            {name:"Yellow", price: "600", qty:"0"}]
        }
    }

    render(){
        return (
            <div>
                <Plate plates={this.state.plates}/>
            </div>
        );
    }
}

ReactDOM.render(<Basket />, document.getElementById('root3'));
