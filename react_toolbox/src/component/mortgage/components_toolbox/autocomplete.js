import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';

const source = {
    'new_building,': 'Квартира в новостройке',
    'old_building,': 'Готовая квартира',
    'countryhouse': 'Загородный дом'
};

class MortgateCalculatorType extends React.Component {
    state = {
        apartment: ''
    }

    handleChange = (value) => {
        this.setState({apartment: value});
    };

    render () {
        return (
            <Autocomplete
                direction="down"
                selectedPosition="above"
                label="Тип квартиры"
                onChange={this.handleChange}
                source={source}
                value={this.state.apartment}
                multiple={false}
                required
            />
        );
    }
}

export default MortgateCalculatorType;

