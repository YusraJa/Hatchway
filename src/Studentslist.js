import React from 'react';
import Profile from './Profile';


const Studentslist= ({students})=> {
        return (
    <div>
        {
            students.map((user,i) =>{
                return(
                    <Profile
                    key={i}
                    id={students[i].id}
                    name={students[i].name}
                    email={students[i].email}
                    />
                );
            })
        }
    </div>  
        );
}

export default Studentslist;