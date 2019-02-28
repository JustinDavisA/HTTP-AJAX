import React from 'react';

import Friend from './Friend';
import NewFriend from './NewFriend';

const Friends = ({ friends }) => {
    return(
        <div className='App'>
            {friends.map(friend => (
                <Friend
                    friend = {friend}
                    key = {friend.id}
                />
            ))}
            <NewFriend 
                
            />
        </div>
    )
}

export default Friends;