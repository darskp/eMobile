import { Button,Box, Typography, TextField } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import styles from './auth.module.scss';

const Reset = () => {

    return (
        <>
            <div style={{ height: "80vh", display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                <Box boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' }, width: "65%", height: "60%", borderRadius: "10px", display: 'flex', alignItems: 'center', justifyContent: "center", margin: 'auto', flexDirection: 'column', padding: "20px 20px",
                        ":hover": {
                            boxShadow:
                                '10px 10px 20px #ccc'
                        }
                    }}
                >
                    <Typography sx={{ textAlign: 'center', fontWeight: "bold", color: "#333", marginBottom: "20px" }} variant="h4">Reset Passsword</Typography>
                    <TextField
                        label="Email"
                        placeholder='Enter your Email Id'
                        type="email"
                        margin="normal"
                    />
                    <Button variant='contained' color='primary' sx={{ margin: "10px 0px", padding: "6px 106px", fontWeight: 'bold' }}>Reset Password</Button>
                    <Typography sx={{
                        marginTop: "10px", cursor: "pointer", color: "#333"
                    }}>
                        <RouterLink component={RouterLink}
                            to="/login" className={styles.signupRouterLink}>Login</RouterLink>
                    </Typography>
                </Box>
            </div>

        </>
    );
}

export default Reset;