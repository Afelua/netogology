import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog';

class Modal extends React.Component {

    constructor (...args) {
        super(...args);
        this.state = {
            active: true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleToggle = () => {
        this.setState({active: false});
    };

    actions = [
        {label: 'Отменить', onClick: this.handleToggle},
        {label: 'Сохранить', onClick: this.handleToggle}
    ];

    render () {
        return (
            <div>
                <Button label='Подтвердить заказ' onClick={this.handleToggle}/>
                <Dialog
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    title='Подтвердждение заказа'
                >
                    <p>Вы уверены, что хотите подтвердить заказ?</p>
                </Dialog>
            </div>
        );
    }
}

export default Modal;
