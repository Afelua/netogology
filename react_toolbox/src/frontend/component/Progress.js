import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const initialState = {
    progress: 0,
    buffer: 10
};

class ProgressBarTest extends React.Component {
    state = initialState;

    componentWillMount () {
        this.simulateProgress();
    }

    simulateProgress () {
        setTimeout(() => {
            if (this.state.progress < 100) {
                this.increaseProgress();
                if (this.state.progress > this.state.buffer) this.increaseBuffer();
            } else {
                this.setState(initialState);
            }
            this.simulateProgress();
        }, (Math.random() * 1 + 1) * 1000);
    }

    increaseProgress () {
        this.setState({
            progress: Math.random() * 30 + this.state.progress
        });
    }

    increaseBuffer () {
        this.setState({
            buffer: Math.random() * (100 - this.state.progress) + this.state.progress
        });
    }

    render () {
        return (
            <section>
                <ProgressBar mode='determinate' value={this.state.progress} buffer={this.state.buffer}/>
            </section>
        );
    }
}

export default ProgressBarTest;