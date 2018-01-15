import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';

class MortgateCalculatorConfirmation extends React.Component {
    state = { check: true };

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

export default MortgateCalculatorConfirmation;
