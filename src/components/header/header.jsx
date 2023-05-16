import { AppBar, Toolbar, Tabs, Tab, Button, useTheme, useMediaQuery, Typography, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Drawer from './drawer';
import { Link as RouterLink } from 'react-router-dom';
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
            link: '/admin',
            name: "Admin"
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
    let theme = useTheme()
    let ismatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
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
                                            sx={{
                                                fontSize: "25px",
                                                textDecoration: "none",
                                                color: "inherit",
                                                "&:hover":{
                                                textDecoration:"underline",
                                                transition:"0.5s"
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
                        <AppBar sx={{ background: "#063970", padding: "0px 40px" }}>
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
                                        <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' value={value} indicatorColor="dark" onChange={(e, val) => { setvalue(val) }}>
                                            {
                                                PAGES.filter((data, index) => {
                                                    return (index < 3)
                                                }).map((data, index) => {
                                                    return (
                                                        <Tab key={data.id} label={data.name} component={RouterLink} to={data.link} sx={{ padding: "0px 40px", textDecoration: "none" }} />)
                                                })
                                            }
                                        </Tabs>
                                    </Grid>
                                    <Grid item xs={3}>

                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >

                                            <Grid item xs={4}>
                                                    <Button variant="outlined" size="small" component={RouterLink} to="/contact">Login</Button>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button variant="contained" sx={{ letterSpacing: "1px" }} size="small" component={RouterLink} to="/contact">SignUp</Button>
                                            </Grid>
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
        </>
    )
}

export default Header;