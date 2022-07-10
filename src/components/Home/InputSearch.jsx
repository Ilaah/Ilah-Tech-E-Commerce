import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='input__search'>
        <input className='input' type="text" placeholder='What are  you looking for?' {...register('searchText')}/>
        <button className='input__btn'><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
}

export default InputSearch