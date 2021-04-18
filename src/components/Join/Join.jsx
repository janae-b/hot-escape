import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return ( 
        <main>
            <div className="joinOuter">
                <h3>Join</h3>
                <div className="joinInner">
                    <div><input placeHolder="Name" className="joinInput" type="text" onChange={(e)=> setName(e.target.value)}></input></div>
                    <div><input placeHolder="Room" className="joinInput" type="text" onChange={(e)=> setRoom(e.target.value)}></input></div>
                    <Link onClick={e => (!name || !name) ? e.preventDefault() : null}to={`/chatroom?name=${name}&room=${room}`}>
                        <button className="button" type="submit">Sign In</button>
                    </Link>
                </div>
            </div>
        </main>
     );
}
 
export default Join;