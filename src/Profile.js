import React from 'react';
import './Profile.css';

const Profile = ({name, id, email}) => {
   
    return(
        <div className='mainDiv'>
            <img alt='myrobot' src={`https://robohash.org/${id}?`} />
            <div className='studentsData'>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Profile;