import React, { useState } from 'react';

// services
import { SendOTP } from '../services/AuthHandler';
// toast notification
import toast from 'react-hot-toast';

const SendOTPForm= ({setAuthStep,setMobileNumber,mobileNumber}) => {
    const [isLoading,setIsLoading]=useState(false)


    const submitHandler=async (e)=>{
        e.preventDefault();
        const regexTest= /^09\d{9}$/;
        if(!regexTest.test(mobileNumber)){
            toast.error("لطفا شماره رو به شکل صحیح وارد نمایید");
        return        
    }


        setIsLoading(true)
        const{response,error}=await SendOTP(mobileNumber);
        setIsLoading(false)

        if (response){
            setAuthStep(2)
        }
        if(error){
            toast.error("مشکلی پیش آمده لطفا کمی صبر کنید و دوباره امتحان کنید","error")
        }
        
        
    }
    return (
        <form onSubmit={submitHandler} className='form h-52 sm:w-1/2 sm:right-[25%]'  >
            <p className='w-full sm:text-2xl text-xl text-white  '>لطفا جهت استفاده از خدمات سایت وارد شوید</p>
            <p className=' text-sm  text-white'>جهت ورود شماره موبایل خودتون رو وارد کنید</p>
            <input 
                id='input'
                value={mobileNumber || ''}
                onChange={(e)=>setMobileNumber(e.target.value)}
                placeholder='09...'
                className='input px-3'
            />
            {isLoading&&
                <h1 className='text-2xl text-red-900 bg-red-200 rounded-2xl w-full'>در حال ارسال شماره موبایل </h1>
            }
            <button className='button ' disabled={isLoading}>
                ارسال کد تأیید 
            </button>
        </form>

    );
};

export default SendOTPForm;