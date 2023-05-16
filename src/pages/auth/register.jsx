import { Button, Box, Typography,TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink as RouterLink } from 'react-router-dom';
import styles from './auth.module.scss';
const Register = () => {

    return (
        <>
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
                        label="Email"
                        placeholder='Enter your Email Id'
                        type="email"
                        margin="normal"
                    />
                    <TextField margin="normal"
                        label="Password"
                        placeholder='Enter your Password'
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField margin="normal"
                        label="Confirm Password"
                        placeholder='Enter your Confirm Password'
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button variant='contained' color='primary' sx={{ margin: "10px 0px", padding: "6px 150px", fontWeight: 'bold' }}>Signup</Button>
                    <Typography>--OR--</Typography>
                    <Button startIcon={<GoogleIcon />} variant='contained' color='warning' sx={{ margin: "10px 0px", padding: "5px 82px", fontWeight: 'bold' }}>Signup with Google</Button>
                    <Typography sx={{
                        marginTop: "10px", cursor: "pointer", color: "#333"
                    }}>Have an Account? &nbsp;
                        <RouterLink component={RouterLink}
                            to="/login" className={styles.signupRouterLink}>Login</RouterLink>
                    </Typography>
                </Box>
            </div>

        </>
    );
}

export default Register;