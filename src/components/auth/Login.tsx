import React, { useState } from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function Login() {
    const login = useGoogleLogin({
        onSuccess: async respose => {
            try{
                const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json();
                console.log(data.data)
            } catch (err) {
                console.log(err)
            }
        }
    });

    return (
        <>
            <div className="wrapper">
                <div className="overlay">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                        var decoded = jwt_decode(credentialResponse.credential);
                    }}
                        onError={() => {
                        console.log('Login Failed');
                    }}/>
                </div>
                <video autoPlay muted loop id="myVideo">
                    <source src="https://player.vimeo.com/external/492099718.sd.mp4?s=d6e55adb8f85f7ba1214a467d891e2604cc98a21&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </>
    );
}

export default Login;