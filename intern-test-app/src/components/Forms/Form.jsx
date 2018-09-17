import React from 'react';
import {FormGroup, FormControl, Button} from "react-bootstrap";

export default class Form extends React.Component {

    render() {
        return (
            <div>
                    {this.props.step && <form>
                        <FormGroup
                        controlId="fg1"
                    >
                        <FormControl
                            id="fname"
                            type="text"
                            label="Text"
                            placeholder="Enter Your First Name Here..."
                        />
                    </FormGroup>
                    <FormGroup
                        controlId="fg2"
                    >
                        <FormControl
                            id="lname"
                            type="text"
                            label="Text"
                            placeholder="Enter Your Last Name Here..."
                        />
                    </FormGroup></form>}
                    {!this.props.step && <form><FormGroup
                        controlId="fg3"
                        >
                        <FormControl
                        id="email"
                        type="email"
                        label="Text"
                        placeholder="Enter Your Email Here..."
                        />
                        </FormGroup>
                        <FormGroup
                        controlId="fg4"
                        >
                        <FormControl
                        id="phone"
                        type="text"
                        label="Text"
                        placeholder="Enter Your Phone Here..."
                        />
                        </FormGroup></form>}
                <Button bsStyle="primary" bsSize="large" onClick={this.props.onButtonClick}>
                    {this.props.step ? 'Next' : 'Submit'}
                </Button>

            </div>
        );
    }
}