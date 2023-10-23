/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase.config";
import { updateDoc, doc } from "firebase/firestore";
import {toast} from 'react-toastify';
//import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import KeyboardArrowRightIcon from "../assets/svg/keyboardArrowRightIcon";
import homeIcon from '../assets/svg/homeIcon.svg';
import arrowNextImage from "../assets/next.png";

function Profile() {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { displayName, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if(auth.currentUser.displayName !== displayName) {
        // Update display name in FB
        await updateProfile(auth.currentUser, {
          displayName: displayName
        })

        // Update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
          displayName
        })
      }
    } catch (error) {
      toast.error('Could not update profile details.');
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>

        <div className="profileCard">
          <form>

            <input
              type="text"
              id="displayName"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              value={displayName}
              onChange={onChange}
            />

            <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />

          </form>
        </div>

        <Link to='/create-listing' className='createListing'>
          <img src={homeIcon} alt='home' />
          <p>Sell or rent your home</p>
          <img src={arrowNextImage} alt='arrow right' className="eye-image" />
        </Link>
        
      </main>
    </div>
  );
}

export default Profile;
