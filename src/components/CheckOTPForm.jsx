import React from 'react';
// toast notification
import toast from 'react-hot-toast';

// services
import { CheckOTP } from '../services/AuthHandler';
import { setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';

const CheckOTPForm = ({setAuthStep,setVerificationCode,mobileNumber,verificationCode}) => {
    const navigate=useNavigate();
    const submitHandler=async (e)=>{
        const RegexTest=/^\d{5}$/;
        e.preventDefault()
        if(!RegexTest.test(verificationCode)){
            toast.error("کد تایید حتما باید پنج رقمی باشد")
            return
        }
        const {response,error}=await CheckOTP(mobileNumber,verificationCode);
        if(response){
           toast.success("ورود با موفقیت انجام شد")
           setCookie(response?.data);
           navigate("/");
           window.location.reload();
           
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

    </>
    );
};

export default CheckOTPForm;