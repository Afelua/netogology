import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';

class CheckboxToolbox extends React.Component {

    constructor (...args) {
        super(...args);
        this.state = {
            check: true
        };
    }

    handleChange = (field, value) => {
        this.setState({...this.state, [field]: value});
    };

    render () {
        return (
            <div>
                <Checkbox
                    checked={this.state.check}
                    label="Могу подтвердить доход документально"
                    onChange={this.handleChange.bind(this, 'check')}
                />
            </div>
        );
    }
}

export default CheckboxToolbox;

