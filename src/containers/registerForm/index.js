import React, { Component } from "react";
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
		this.state = {

  				 	 };
		this.handleSubmit = this.handleSubmit.bind(this);
	 }

	handleSubmit(event) {
		event.preventDefault();

	}

	render() {
		const { doLogin, isAuthenticated, handleLogout, errorMessage } = this.props;
		return (
            <Modal isOpen={this.props.showForm} toggle={this.props.toggleForm}>
                <ModalBody>
                </ModalBody>
            </Modal>
		);
	}
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);