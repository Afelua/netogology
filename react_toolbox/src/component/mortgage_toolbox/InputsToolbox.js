import React from 'react';
import Input from 'react-toolbox/lib/input';

class InputsToolbox extends React.Component {

    constructor (...args) {
        super(...args);
        this.state = {
            price: '', money: '', duration: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
    };

    render () {
        return (
            <section>
                <Input type="number" label="Стоимость" name="price" value={this.state.price} onChange={this.handleChange} required/>
                <Input type="number" label="На руках" name="money" value={this.state.money} onChange={this.handleChange.bind(this, 'money')} required/>
                <Input type="number" label="Срок кредита" name="duration" value={this.state.duration} onChange={this.handleChange.bind(this, 'duration')} required />
            </section>
        );
    }
}

export default InputsToolbox;

