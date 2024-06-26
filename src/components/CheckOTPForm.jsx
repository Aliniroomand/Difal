import React from 'react';
// toast notification
import notify from '../utils/ToastNotify';
import { ToastContainer} from 'react-toastify';
// services
import { CheckOTP } from '../services/AuthHandler';
import { setCookie } from '../utils/cookie';

const CheckOTPForm = ({setAuthStep,setVerificationCode,mobileNumber,verificationCode}) => {

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
           setCookie(response.data);
           
        }
        if(error){
            
        }
        
    }

    return (
        <>
    <form onSubmit={submitHandler} className='relative grid place-items-center w-1/5 h-[50svh] top-[10vh] right-[40%] shadow-3xl rounded-3xl text-center bg-lightOrange'   >
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