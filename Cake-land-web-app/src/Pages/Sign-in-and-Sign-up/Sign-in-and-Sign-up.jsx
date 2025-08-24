import React from 'react';
import SignIn from '../../Components/Sign In/sign-in';
import SignUp from '../../Components/Sign-up/sign-up';
import './Sign-in-and-Sign-up.scss';

const SignInAndSignUp = () => {
    return ( 
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInAndSignUp;