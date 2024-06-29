import React from 'react';
// toast notification
import notify from '../utils/ToastNotify';

// services
import { CheckOTP } from '../services/AuthHandler';
import { setCookie } from '../utils/cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const CheckOTPForm = ({setAuthStep,setVerificationCode,mobileNumber,verificationCode}) => {
    const navigate=useNavigate();
    const submitHandler=async (e)=>{
        const RegexTest=/^\d{5}$/;
        e.preventDefault()
        if(!RegexTest.test(verificationCode)){
            notify("کد تایید حتما باید پنج رقمی باشد","error")
            return
        }
        const {response,error}=await CheckOTP(mobileNumber,verificationCode);
        if(response){
           notify("ورود با موفقیت انجام شد","success")
           setCookie(response?.data);
           navigate("/")
           
        }
        if(error){
            
        }
        
    }

    return (
        <>
    <form onSubmit={submitHandler} className='form'   >
        <h1 className=' text-3xl'>ورود کد تایید</h1>
        <p className=' text-sm'>کد تایید پنج رقمی ارسال شده<br/>به شماره {mobileNumber} را وارد نمایید</p>
        <input 
            type="text"
            placeholder='کد تایید ...' 
            onChange={(e)=>setVerificationCode(e.target.value)}
            value={verificationCode ? verificationCode : ""}
            className='input'
        />
        
        <button type='submit' className='button'> ثبت کد تایید</button>
        <button onClick={()=>setAuthStep(1)} className='button'> تغییر شماره موبایل</button>
    </form>
    <ToastContainer/>

    </>
    );
};

export default CheckOTPForm;