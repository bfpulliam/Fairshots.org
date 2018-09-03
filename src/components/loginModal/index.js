
import React from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, FormFeedback, Row } from 'reactstrap'


export default function LoginModal(props) {

return (
    <Modal isOpen={props.showModal} toggle={props.showLoginModal}>
        <ModalBody>
        <Form onSubmit={props.handleSubmit}>
            <Row className="justify-content-center">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                    <Input type="email" name="email" id="Email" placeholder="e-mail" value={props.email} onChange={props.handleChange} invalid={props.errorMessage !== ''? true: false}/>
                </FormGroup>
            </Row>
            <Row className="justify-content-center">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-2">
                    <Input type="password" name="password" id="Password" placeholder="password" value={props.password} onChange={props.handleChange} invalid={props.errorMessage !== ''? true: false} />       
                    <FormFeedback>{props.errorMessage}</FormFeedback>	
                </FormGroup>
            </Row >
            <Row className="justify-content-center">
                <Button>Login</Button>
            </Row>
        </Form>
        </ModalBody>
    </Modal>
);
}