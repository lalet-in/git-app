import React from 'react'
import s from './Profile.module.css'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toFetchToggle} from "../../../redux/profile-reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toFetchToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.photos)
            });
        this.props.toFetchToggle(false)
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        isFetching : state.profilePage.isFetching
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile, toFetchToggle}) (WithUrlDataContainerComponent);