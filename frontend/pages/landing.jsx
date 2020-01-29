import React from 'react';
import SignIn from '../components/sign_in_component';
import SignUp from '../components/sign_up_component';

const LandingPage = ()=>(
    <div className='sign-in-and-sign-up'>
       <h1>Land</h1>
       <SignIn />
       <SignUp />
    </div>
)

export default LandingPage;