import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class Progress extends React.Component {
    render() {
        return (
            <div>
                <p>Step {this.props.step === 50 ? 1 : 2} of 2</p>
                <ProgressBar striped bsStyle="success" now={this.props.step} />
            </div>
        );
    }
}