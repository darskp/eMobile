import { AppBar, Toolbar, Tabs, Tab, Button, useTheme, useMediaQuery, Tooltip,Typography, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import Drawer from './drawer';
import { auth } from '../../firebase/config.js'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { NavLink as RouterLink} from 'react-router-dom';
import { signOut } from "firebase/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { SET_ACTIVE_USER, SET_REMOVE_USER, selectIsLoggedIN } from '../../redux/slice/authSlice';
import { ShowOnLogin, ShowOnLogoff } from '../hiddenLink/hiddenLink';
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
        }
    ]
const Header = () => {
    let dispatch = useDispatch()
    const [value, setvalue] = useState(0)
    const [displayName, setdisplayName] = useState('')
    let theme = useTheme()
    let ismatch = useMediaQuery(theme.breakpoints.down('md'));
    let signout = () => {
        signOut(auth).then(() => {
            toast.success("Logout Successfully")
        }).catch((error) => {
            toast.error(error.message)
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.displayName !== null) {
                    setdisplayName(user.displayName)
                } else {
                    let uName = user.email.slice(0, user.email.indexOf('@'));
                    setdisplayName(uName.charAt(0).toUpperCase() + uName.slice(1))
                }
                dispatch(SET_ACTIVE_USER({
                    userName: displayName,
                    userID: user.uid,
                    email: user.email
                }))
            } else {
                setdisplayName('');
                dispatch(SET_REMOVE_USER());
            }
        });
    }, [displayName, dispatch])
    let isloginstatus = useSelector(selectIsLoggedIN);
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
                                    <Grid item xs={isloginstatus ? 9:10}>
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

                                    <ShowOnLogin>
                                        <Grid item xs={1}>
                                            <Tooltip title={displayName} arrow>
                                                <AccountCircleIcon sx={{ marginTop: "7px" }} />
                                            </Tooltip>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <ShoppingCartIcon sx={{ marginTop: "7px" }} />
                                        </Grid>
                                    </ShowOnLogin>
                                    <ShowOnLogoff>
                                        <Grid item xs={1}>
                                            <ShoppingCartIcon sx={{ marginTop: "7px" }} />
                                        </Grid>
                                    </ShowOnLogoff>
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
                                            <ShowOnLogoff>
                                                <Grid item xs={4}>
                                                    <Button variant="outlined" size="small" color='warning' component={RouterLink} to="/login">Login</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button variant="contained" sx={{ letterSpacing: "1px" }} size="small" component={RouterLink} to="/signup">SignUp</Button>
                                                </Grid>
                                            </ShowOnLogoff>
                                            <ShowOnLogin>
                                                <Grid item xs={4}>
                                                    <Button size="small" startIcon={<AccountCircleIcon />} variant='contained' color='warning'>{displayName}</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button onClick={signout} variant="outlined" size="small" color='warning' component={RouterLink} to="/">Logout</Button>
                                                </Grid>
                                            </ShowOnLogin>
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