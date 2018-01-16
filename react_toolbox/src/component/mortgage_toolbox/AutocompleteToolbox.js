import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';

const source = {
    'new_building,': 'Квартира в новостройке',
    'old_building,': 'Готовая квартира',
    'countryhouse': 'Загородный дом'
};

class AutocompleteToolbox extends React.Component {

    constructor (...args) {
        super(...args);
        this.state = {
            apartment: ''
        };

        this.handleChange = this.handleChange.bind(this);
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

export default AutocompleteToolbox;


