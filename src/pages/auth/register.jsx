import { Button, Box, Typography, TextField } from '@mui/material';
import { NavLink as RouterLink, useNavigate} from 'react-router-dom';
import styles from './auth.module.scss';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {auth} from '../../firebase/config.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../loader/loader';

const Register = () => {
     let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [cpassword, setcPassword] = useState('');
    let [isloading, setLoading] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, cpassword);
        if(password!==cpassword){
        toast.error("Password Not match")
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setLoading(false);
                toast.success("Registration Successful");
                navigate('/login')
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    }

  

    return (
        <>
        <ToastContainer/>
            {isloading && <Loader/>}
            <form onSubmit={handleSubmit}>
                <div style={{ height: "81vh", display: 'flex', alignItems: 'center' }}>
                    <Box boxShadow={'5px 5px 10px #ccc'}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '35ch' }, width: "60%", height: "90%", borderRadius: "10px", display: 'flex', alignItems: 'center', justifyContent: "center", margin: 'auto', flexDirection: 'column', padding: "20px 20px",
                            ":hover": {
                                boxShadow:
                                    '10px 10px 20px #ccc'
                            }
                        }}
                    >
                        <Typography sx={{ textAlign: 'center', fontWeight: "bold", color: "#333", marginBottom: "20px" }} variant="h3">Signup</Typography>
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            name="Email"
                            placeholder='Enter your Email Id'
                            type="email"
                            margin="normal"
                        />
                        <TextField margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            name="Password"
                            placeholder='Enter your Password'
                            type="password"

                        />
                        <TextField margin="normal"
                            value={cpassword}
                            name="Confirm_Password"
                            onChange={(e) => setcPassword(e.target.value)}
                            label="Confirm Password"
                            placeholder='Enter your Confirm Password'
                            type="password"
                        />
                        <Button type="submit" variant='contained' color='primary' sx={{ margin: "10px 0px", padding: "6px 150px", fontWeight: 'bold'}}>Signup</Button>
                        <Typography sx={{
                            marginTop: "10px", cursor: "pointer", color: "#333"
                        }}>Have an Account? &nbsp;
                            <RouterLink component={RouterLink}
                                to="/login" className={styles.signupRouterLink}>Login</RouterLink>
                        </Typography>
                    </Box>
                </div>
           </form>
        </>
    );
}
export default Register;