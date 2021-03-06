import React from 'react';
import './sign-in-style.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utility'

class SignIn extends React.Component{
    constructor() {
        super();
        
        this.state = {
            email: '',
            password : ''
        }
    }   

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''})
        } catch (e) {
            console.log('error in signIn handleSubmit>>>>>>>>>>>>>>',e)
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }


    render() { 
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange = {this.handleChange}
                        value={this.state.email}
                        label = "email"
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        handleChange = {this.handleChange}
                        value={this.state.password}
                        label="password"        
                        required />
                    <div className='buttons'>
                        <CustomButton type ="submit" value ="Submit Form">Sign In</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >{''}Sign In With Google{''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;