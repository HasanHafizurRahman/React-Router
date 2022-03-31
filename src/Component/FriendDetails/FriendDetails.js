import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const params = useParams();
    return (
        <div>
            <h2>This details of my friends:{params.friendId}</h2>
        </div>
    );
};

export default FriendDetails;