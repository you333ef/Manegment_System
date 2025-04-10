import React, { useContext } from 'react';
import stylesNew from '../Profile/profile.module.css';
import styles from '../Users/users.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePictue from '../../assets/Yousef/profile_picture.svg';
import { ContextYasta } from '../../Context/Test_data';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  iat: number;
  gender: string;
  exp: string;
}

const Profile: React.FC = () => {
  let { data } = useContext<{ data: UserData }>(ContextYasta);
  return (
    <div className={`mt-sm-5 ${styles.coco} ${stylesNew.profileContainer}`}>
      <img src={profilePictue} className={` ${stylesNew.profileImage}`} alt="Profile" />
      <div className={`container ${styles.usersContainer}`}>
        <form>
          <div className="row mt-5">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                value={data.firstName}
                id="firstName"
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your First Name"
              />
              <p className={styles.errormessage}></p>
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={data.lastName}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Last Name"
              />
              <p className={styles.errormessage}></p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                readOnly
                className={`form-control text-center text-lg-start ${styles.input}`}
                placeholder="Enter your Email"
              />
              <p className={styles.errormessage}></p>
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="age" className={styles.label}>
                Age
              </label>
              <input
                type="number"
                id="age"
                value={String(data.iat).slice(0, 2)}
                readOnly
                className={`text-center text-lg-start form-control ${styles.input}`}
                placeholder="Enter your Age"
              />
              <p className={styles.errormessage}></p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="phone" className={styles.label}>
                Gender
              </label>
              <input
                type="text"
                id="phone"
                value={data.gender}
                readOnly
                className={`text-center text-lg-start form-control ${styles.input}`}
                placeholder="Enter your Gender"
              />
              <p className={styles.errormessage}></p>
            </div>
            <div className="col-lg-6 col-12 mb-lg-3">
              <label htmlFor="birthDate" className={styles.label}>
                Birth Date
              </label>
              <input
                type="text"
                id="birthDate"
                value={data.exp}
                readOnly
                className={`text-center text-lg-start form-control ${styles.input}`}
                placeholder="Enter your Birth Date"
              />
              <p className={styles.errormessage}></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;