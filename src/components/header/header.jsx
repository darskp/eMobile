import { AppBar, Toolbar, Tabs, Tab, Button, useTheme, useMediaQuery, Typography, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import Drawer from './drawer';
import { auth } from '../../firebase/config.js'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { onAuthStateChanged } from "firebase/auth";
const PAGES =
    [
        {
            id: 1,
            link: '/',
            name: "Home"
        },
        {
            id: 2,
            link: '/contact',
            name: "Contact Us"
        },
        {
            id: 3,
            link: '/aboutus',
            name: "About Us"
        },
        {
            id: 4,
            link: '/login',
            name: "Login"
        },
        {
            id: 5,
            link: '/signup',
            name: "Sign Up"
        }
    ]
const Header = () => {
    const [value, setvalue] = useState(null)
    const [displayName, setdisplayName] = useState('')
    let theme = useTheme()
    let ismatch = useMediaQuery(theme.breakpoints.down('md'));
    let location = useLocation();
    let signout = () => {
        signOut(auth).then(() => {
            toast.success("Logout Successfully")
        }).catch((error) => {
            toast.error(error.message)
        });
    }
    useEffect(() => {
        onAuthStateChanged (auth, (user) => {
            if (user) {
                const displayName = user.displayName;
                console.log(displayName);

                displayName == '' ? setdisplayName(displayName) : setdisplayName('User')
            } else {
                setdisplayName('error')
            }
        });
    }, [])
    return (
        <div style={{ height: "9.1vh" }}>
            {
                ismatch ?
                    <>
                        <AppBar sx={{ background: "#063970", padding: "0px 10px" }}>
                            <Toolbar>
                                <Grid
                                    container
                                    alignItems="center"
                                >
                                    <Grid item xs={10}>
                                        <Typography
                                            component={RouterLink}
                                            to="/"
                                            exact
                                            sx={{
                                                fontSize: "25px",
                                                textDecoration: "none",
                                                color: "inherit",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                    transition: "0.5s"
                                                }
                                            }}
                                        >
                                            eMobile
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <ShoppingCartIcon sx={{ marginTop: "7px" }} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Drawer pages={PAGES} />
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </>
                    :
                    <>
                        <AppBar sx={{ background: "#063970", padding: "0px 30px" }}>
                            <Toolbar>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Grid item xs={3}>
                                        <Typography
                                            sx={{
                                                fontSize: "25px",
                                                textDecoration: "none",
                                                color: "inherit",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                    transition: "0.5s"
                                                }
                                            }}
                                            component={RouterLink}
                                            to="/"

                                        >
                                            eMobile
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' value={value} onChange={(e, val) => { setvalue(val) }}>
                                            {
                                                PAGES.filter((data, index) => {
                                                    return (index < 3)
                                                }).map((data, index) => {
                                                    return (
                                                        <Tab key={data.id} label={data.name} component={RouterLink} to={data.link} sx={{
                                                            marginLeft: "25px", textDecoration: "none",
                                                        }} />)
                                                })
                                            }
                                        </Tabs>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-around"
                                            alignItems="center"
                                        >
                                            {
                                                location.pathname !== '/admin' ? <>
                                                    <Grid item xs={4}>
                                                        <Button variant="outlined" size="small" color='warning' component={RouterLink} to="/login">Login</Button>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Button variant="contained" sx={{ letterSpacing: "1px" }} size="small" component={RouterLink} to="/signup">SignUp</Button>
                                                    </Grid>
                                                </> :
                                                    <>
                                                        <Grid item xs={4}>
                                                            <Button size="small" startIcon={<AccountCircleIcon />} variant='contained' color='warning'>{displayName}</Button>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Button onClick={signout} variant="outlined" size="small" color='warning' component={RouterLink} to="/">Logout</Button>
                                                        </Grid>
                                                    </>

                                            }
                                            <Grid item xs={4}>
                                                <RouterLink to="/cart" style={{ textDecoration: "none" }}>
                                                    <ShoppingCartIcon
                                                        sx={{
                                                            fontSize: "30px",
                                                            marginTop: "9px",
                                                            marginLeft: "25px",
                                                            color: "white"
                                                        }}
                                                    />
                                                </RouterLink>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </>
            }
        </div>
    )
}

export default Header;