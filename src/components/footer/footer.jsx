import { AppBar, Toolbar, Typography, Grid} from '@mui/material';
const Footer = () => {
    let currentYear=new Date().getFullYear();
    return (
        <>
            <AppBar sx={{
                background: "#063970", position: "sticky", top:"92vh"}}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography sx={{ fontSize: '15px' }}>
                                &#169; {currentYear} All rights Reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Footer;