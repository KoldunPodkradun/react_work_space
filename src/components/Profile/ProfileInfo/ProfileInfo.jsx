import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import avatarDefault from "../../../assets/img/logo.jpg";
import ProfileStatus from "./ProfileStatusOld";

let ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profile_info}>
            <img className={styles.content_photo}
                 src={profile.photos.large !== null ? profile.photos.large : avatarDefault}/>
            <div className={styles.content_info}>
                <div><span>Name:</span> {profile.fullName}</div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                {profile.aboutMe !== null ? <div><span>About Me:</span> {profile.aboutMe}</div> : ''}
                <div><span>Looking for a job:</span> {profile.lookingForAJob == true ? 'Yes' : 'no'}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;