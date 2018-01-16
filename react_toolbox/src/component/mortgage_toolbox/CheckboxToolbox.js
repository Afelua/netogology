import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';

class CheckboxToolbox extends React.Component {

    constructor (...args) {
        super(...args);
        this.state = {
            check: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        this.setState({['check']: !this.state.check});
    };

    render () {
        return (
            <div>
                <Checkbox
                    checked={this.state.check}
                    label="Могу подтвердить доход документально"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default CheckboxToolbox;

