import React from 'react';

// services
import { SendOTP } from '../services/AuthHandler';
// toast notification
import toast from 'react-hot-toast';

const SendOTPForm= ({setAuthStep,setMobileNumber,mobileNumber}) => {
    const submitHandler=async (e)=>{
        e.preventDefault();
        const regexTest= /^09\d{9}$/;
        if(!regexTest.test(mobileNumber)){
            toast.error("لطفا شماره رو به شکل صحیح وارد نمایید");
        return        
    }


        const{response,error}=await SendOTP(mobileNumber);
        if (response){
            setAuthStep(2)
        }
        if(error){
            toast.error("مشکلی پیش آمده لطفا کمی صبر کنید و دوباره امتحان کنید","error")
        }
        
        
    }
    return (
        <form onSubmit={submitHandler} className='form'  >
            <h1 className=' text-2xl' >ورود از طریق شماره موبایل</h1>
            <p className=' text-sm'>جهت ورود شماره موبایل خودتون رو وارد کنید</p>
            <input 
                id='input'
                value={mobileNumber || ''}
                onChange={(e)=>setMobileNumber(e.target.value)}
                placeholder='09...'
                className='input px-3'

            />
            <button className='button '>
                ارسال کد تأیید 
            </button>
        </form>

    );
};

export default SendOTPForm;