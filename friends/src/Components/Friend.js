import React from 'react';

const Friend = ({ friend }) => {
    return(
        <div className='App'>
            <h3>{`Name: ${friend.name}`}</h3>
            <h3>{`Age: ${friend.age}`}</h3>
            <h3>{`eMail: ${friend.email}`}</h3>
        </div>
    )
}

export default Friend;