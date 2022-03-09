import React from 'react';
import {observer} from 'mobx-react';
import UserStore from './store/userStore.js';
import LoginForm from './store/loginForm.js';
import InputField from './store/inputField.js';
import SubmitButton from './store/submitButton.js';
import App from './Nav.js';
import './login.css'

class Login extends React.Component {

    async componentDidMount() {
        try{
            let res = await fetch('/isLoggedIn',{
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let result = await res.json();

            if(result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }else{
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
        }
        catch(e){
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }
    
    async doLogout() {
        try{
            let res = await fetch('/logout',{
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })

            let result = await res.json();

            if(result && result.success){
                UserStore.username = '';
                UserStore.isLoggedIn = false;
            }
        }
        catch(e){
            console.log(e)
        }
    }


    render(){
        if(UserStore.loading){
            return(
                <div className='app'>
                    <div className='container'>
                        loadinggggg
                    </div>
                    
                </div>
            )
        }
        else{
            if(UserStore.isLoggedIn){
                return(
                    <App />
                )
            }
            return(
                <div className='login'>
                    <div className='container'>
                        <LoginForm />
                    </div>
                </div>
            )
        }
        
    }
}

export default observer(Login);