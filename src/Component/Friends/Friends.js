import React , {useState, useEffect} from 'react';
import Friend from '../Friend/Friend';
const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h3>Hello friends({friends.length}) how are you ?</h3>
            <p>Kal ashbo tor basay dawat dey..</p>
            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;