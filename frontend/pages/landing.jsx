import React from 'react';
import SignIn from '../components/sign_in_component';
import SignUp from '../components/sign_up_component';

class LandingPage extends React.Component{
    constructor(){
        super();
        this.flag = true;
        this.handleButton = this.handleButton.bind(this);
        this.randomBackground = this.randomBackground.bind(this);
    }

    handleButton(){
        let signin = document.getElementsByClassName('sign-in')
        let signup = document.getElementsByClassName('sign-up')
        let btn = document.getElementsByClassName("form-btn")
        if(this.flag){
            signin[0].style.display = "none";
            signup[0].style.display = "flex";
            btn[0].innerHTML = "Have an account already? Sign In"
            this.flag = false;
        }
        else{
            signin[0].style.display = "flex";
            signup[0].style.display = "none";
            btn[0].innerHTML = " New to myshop? Sign Up"
            this.flag = true;

        }
    }

    randomBackground(){
        let idx = Math.floor(Math.random()*5)
        let images = ['https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/banner1.jpg',
        'https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/banner2.jpg',
        'https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/banner3.jpg',
        'https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/banner4.jpg',
        'https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/banner5.jpg'
    ]
    return(images[idx])
    }

    render(){

        let btn;
        
            btn =  <div className="form-btn" onClick={this.handleButton}>
            New to myshop? Sign Up
        </div>
        

        let background = this.randomBackground()
        return(
            <div className='landing-page' style={{backgroundImage: `url(${background})`}}>
                <div className='form-div'>
                    <SignIn />
                    <SignUp />
                    {btn}
                </div>
            </div>
        )
    }



}

export default LandingPage;