// components
import { useState } from 'react';
import CheckOTPForm from '../components/CheckOTPForm.jsx';
import SendOTPForm from '../components/SendOTPForm.jsx';


const AuthPage= () => {
    const[authStep,setAuthStep]=useState(2);
    const[mobileNumber,setMobileNumber]=useState(null);
    const[verificationCode,setVerificationCode]=useState(null);

    return (
        <main >
        {authStep === 1 
            ? <SendOTPForm 
                    setAuthStep={setAuthStep} 
                    mobileNumber={mobileNumber} 
                    setMobileNumber={setMobileNumber}
                /> 
            : <CheckOTPForm
                    mobileNumber={mobileNumber}
                    setVerificationCode={setVerificationCode}
                    setAuthStep={setAuthStep}
                    verificationCode={verificationCode}
                />  
        }
        </main >
    );
};

export default AuthPage;