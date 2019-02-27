import React from 'react';

import Friend from './Friend';

const Friends = ({ friends }) => {
    return(
        <div className='App'>
            {friends.map(friend => (
                <Friend
                    friend = {friend}
                    key = {friend.id}
                />
            ))}
        </div>
    )
}

export default Friends;