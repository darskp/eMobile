import { AppBar, Toolbar, Tabs, Tab, Button, useTheme, useMediaQuery, Typography, Grid} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState} from 'react';
import Drawer from './drawer';
import { NavLink as RouterLink } from 'react-router-dom';
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
                                                            <Tab key={data.id} label={data.name}  component={RouterLink} to={data.link} sx={{ marginLeft:"25px", textDecoration: "none",
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

                                                <Grid item xs={4}>
                                                    <Button variant="outlined" size="small" component={RouterLink} to="/login">Login</Button>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button variant="contained" sx={{ letterSpacing: "1px" }} size="small" component={RouterLink} to="/signup">SignUp</Button>
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
        </div>
    )
}

export default Header;