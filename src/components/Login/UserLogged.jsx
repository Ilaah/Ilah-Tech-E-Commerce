import React from 'react'

const UserLogged = ({ logOut }) => {
    return (
        <article className='user-logged__box'>
            <i className="fa-solid fa-user-check"></i>
            <h2>User Logged</h2>
            <button className='user-logged__btn' onClick={logOut}>Log Out</button>
        </article>
    )
}

export default UserLogged