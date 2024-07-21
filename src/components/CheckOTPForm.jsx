import React, { useState } from 'react';
// toast notification
import toast from 'react-hot-toast';

// services
import { CheckOTP } from '../services/AuthHandler';
import { setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';

const CheckOTPForm = ({setAuthStep,setVerificationCode,mobileNumber,verificationCode}) => {
    const [isLoading,setIsLoading]=useState(false)

    const navigate=useNavigate();




    const submitHandler=async (e)=>{
        const RegexTest=/^\d{5}$/;
        e.preventDefault()
        if(!RegexTest.test(verificationCode)){
            toast.error("کد تایید حتما باید پنج رقمی باشد")
            return
        }
        setIsLoading(true)
        const {response,error}=await CheckOTP(mobileNumber,verificationCode);
        setIsLoading(false)
        if(response){
           toast.success("ورود با موفقیت انجام شد")
           setCookie(response?.data);
           navigate("/");
           window.location.reload();
        }
        if(error){
            toast.error("خطا در تایید رمز ")
        }
        
    }

    return (
        <>
    <form onSubmit={submitHandler} className='form h-68 sm:w-1/2 sm:right-[25%]'  >
        <h1 className='w-full sm:text-4xl text-xl text-white  '>ورود کد تایید</h1>
        <p className=' sm:text-xl  text-white'>کد تایید پنج رقمی ارسال شده<br/>به شماره {mobileNumber} را وارد نمایید</p>
        <input 
            disabled={isLoading}
            type="text"
            placeholder='کد تایید ...' 
            onChange={(e)=>setVerificationCode(e.target.value)}
            value={verificationCode ? verificationCode : ""}
            className='input'
        />
        {isLoading&&
            <h1 className='text-2xl text-red-900 bg-red-200 rounded-2xl w-full'>درحال بارگذاری</h1>    
        }
        <button type='submit' disabled={isLoading} className='button'> ثبت کد تایید</button>
        <button onClick={()=>setAuthStep(1)} className='button'> تغییر شماره موبایل</button>
    </form>

    </>
    );
};

export default CheckOTPForm;