import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteUserByID, setUpdateInfo, setFormIsClose}) => {

    const handleEdit = () => {
        setUpdateInfo(user)
        setFormIsClose(false)
    }

    return (
        <article className='user'>
            <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='user_list'>
                <li className='user_item'><span className='user_span'><i className="fa-solid fa-envelope"></i>  Email </span>{user.email}</li>
                <li className='user_item'><span className='user_span'><i className="fa-solid fa-cake-candles"></i> Birthday </span>{user.birthday}</li>
            </ul>
            <footer className='user_footer'>
                <button className='user_btn' onClick={()=> deleteUserByID(user.id)}><i  className="fa-solid fa-trash-can"></i></button>
                <button className='user_btn' onClick={handleEdit}><i className="fa-solid fa-pencil"></i></button>
            </footer>
        </article>
    )
}

export default UserCard