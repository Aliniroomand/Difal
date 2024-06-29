import React, { useState } from 'react';

const CategoryForm = () => {
    const [form,setForm]=useState({
        name:"",
        slug:"",
        icon:"",
    })

    const changeHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(form);
    }
    return (
        <form 
            onChange={changeHandler} 
            onSubmit={submitHandler}
            className='form'
        >
            <label className='formLabel' htmlFor="name">اسم دسته بندی</label>
            <input className='input' type="text" id='name' name='name' />

            <label className='formLabel' htmlFor="slug">اسلاگ</label>
            <input className='input' type="text" name='slug' id='slug' />

            <label className='formLabel' htmlFor="icon">آیکن</label>
            <input className='input' type="text" name='icon' id='icon' />

            <button className='Darkbutton w-2/3' type='submit'>ایجاد</button>
        </form>
    );
};

export default CategoryForm;