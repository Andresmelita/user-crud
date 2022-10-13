import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    birthday:'',
}

const FormUsers = ({createNewUser, updateInfo, updateUserByID, setUpdateInfo, setFormIsClose}) => {

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])
    
    const {handleSubmit, register, reset} = useForm()

    const submit = data => {
        if (updateInfo) {
            //Update
            updateUserByID(updateInfo.id, data)
            setUpdateInfo()
        } else {
            //Create
            createNewUser(data)
        }
        reset(defaultValues)
        setFormIsClose(true)
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <i onClick={handleCloseForm} className="form_x fa-solid fa-xmark"></i>
            <h2 className='form_title'>{updateInfo ? 'Edit User' : 'New User'}</h2>
            <div className='form_div'>
                <label className='form_label' htmlFor='email'>Email</label>
                <input className='form_input' type='email' placeholder='Enter your email' id='email' {...register('email')}></input>
            </div>
            <div className='form_div'>
                <label className='form_label' htmlFor='password'>Password</label>
                <input className='form_input' type='password' placeholder='Enter your password' id='password' {...register('password')}></input>
            </div>         
            <div className='form_div'>
                <label className='form_label' htmlFor='first_name'>First Name</label>
                <input className='form_input' type='text' placeholder='Enter your first name' id='first_name' {...register('first_name')}></input>
            </div>            
            <div className='form_div'>
                <label className='form_label' htmlFor='last_name'>Last Name</label>
                <input className='form_input' type='text' placeholder='Enter your last name' id='last_name' {...register('last_name')}></input>
            </div>            
            <div className='form_div'>
                <label className='form_label' htmlFor='birthday'>Birthday</label>
                <input className='form_input' type='date' id='birthday' {...register('birthday')}></input>
            </div>
            <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormUsers