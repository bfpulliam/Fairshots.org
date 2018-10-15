import React, { Component } from "react";
import { connect } from "react-redux";
import { } from "reactstrap";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../actions/profile";

import OrgProfile from "../../components/orgProfile";
import PhotogProfile from "../../components/photogProfile";
import "./userProfile.scss";

/**
 *
 */
class UserProfile extends Component {
    componentDidMount() {
        const { match, token, getUserProfile } = this.props;
        getUserProfile(match.params.userType, match.params.userId, token);
    }

    render() {
        const { match: { params: { userType } }, userProfile } = this.props;
        return (
            <div>
                { userType === "organization" ? <OrgProfile organization={userProfile} />
                    : <PhotogProfile photographer={userProfile}/> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    getUserProfile: (userType, id, token) => dispatch(getProfile(userType, id, token))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));