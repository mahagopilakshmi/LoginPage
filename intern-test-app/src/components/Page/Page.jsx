import React from 'react';
import {Grid, Row, Col, Button, Modal} from 'react-bootstrap';
import Progress from "../Progress";
import Form from "../Forms";

export default class Page extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onButtonClickHandler = this.onButtonClickHandler.bind(this);

        this.state = {
            show: false,
            stepPercentage: 50,
            isStepOne: true
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    onButtonClickHandler() {
        this.setState({ stepPercentage: 100 });
        this.setState({ isStepOne: false });
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={3}>
                    </Col>
                    <Col md={6}>
                        <h1>Its a Dummy Header</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries</p>
                        <Button bsStyle="info" onClick={this.handleShow} bsSize="large" block>Register</Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Body>
                                <Progress step={this.state.stepPercentage}/>
                                <h3>Please Enter the information below to tell us a bit about your business so we can be prepare for our call...</h3>
                                <Form onButtonClick={this.onButtonClickHandler} step={this.state.isStepOne}/>
                            </Modal.Body>
                        </Modal>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>
            </Grid>);
    }
}