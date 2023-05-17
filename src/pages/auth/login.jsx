import GoogleIcon from '@mui/icons-material/Google';
import {signInWithEmailAndPassword } from "firebase/auth";
import { Button, Box, Typography, TextField } from '@mui/material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import styles from './auth.module.scss';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase/config.js';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../loader/loader';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
let navigate=useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [isloading, setLoading] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        if(email==''&&password==''){
            toast.error("Please enter the emailId and password")
        }
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                // setLoading(false);
                toast.success("Login Successfully")
                navigate('/admin')
            })
            .catch((error) => {
                toast.error(error.message)
                setLoading(false);
            });
    }
    let googleAuth = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                toast.success("Login Successfully")
                navigate('/admin')
            }).catch((error) => {
                toast.error(error.message)
            });

    }
return(
        <>
        <ToastContainer />
        {isloading && <Loader />}
          <form onSubmit={handleSubmit}>
                <div style={{ height: "80vh", display: 'flex', alignItems: 'center' }}>
                    <Box boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' }, width: "60%", height: "90%", borderRadius: "10px", display: 'flex', alignItems: 'center', justifyContent: "center", margin: 'auto', flexDirection: 'column', padding: "20px 20px",
                            ":hover": {
                                boxShadow:
                                    '10px 10px 20px #ccc'
                            }
                        }}
                    >
                        <Typography sx={{ textAlign: 'center', fontWeight: "bold", color: "#333", marginBottom: "20px" }} variant="h3">Login</Typography>
                        <TextField
                            value={email}
                            label="Email"
                            placeholder='Enter your Email Id'
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            margin="normal"
                        />
                        <TextField margin="normal"
                            value={password}
                            label="Password"
                            placeholder='Enter your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            autoComplete="current-password"
                        />

                        <Typography sx={{
                            marginTop: "10px", cursor: "pointer", color: "#333", ":hover": {
                                textDecoration: 'underline'
                            }

                        }}><RouterLink to="/reset" component={RouterLink} className={styles.signupRouterLink}>Forgotten Password</RouterLink></Typography>
                        <Button type="submit" variant='contained' color='primary' sx={{ margin: "10px 0px", padding: "6px 150px", fontWeight: 'bold' }}>Login</Button>
                        <Typography>--OR--</Typography>
                    <Button startIcon={<GoogleIcon />} variant='contained' color='warning' sx={{ margin: "10px 0px", padding: "5px 82px", fontWeight: 'bold' }} onClick={googleAuth}>Login with Google</Button>
                        <Typography sx={{
                            marginTop: "10px", cursor: "pointer", color: "#333"
                        }}>Don't have an Account? &nbsp;
                            <RouterLink component={RouterLink}
                                to="/signup" className={styles.signupRouterLink}>Signup</RouterLink>
                        </Typography>
                    </Box>
                </div>
          </form>

        </>
    );
}

export default Login;