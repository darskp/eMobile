import { AppBar, Toolbar, Tabs, Tab, Button, useTheme, useMediaQuery, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import Drawer from './drawer';
const PAGES = ['Home', 'Contact Us', "Admin", "Login", "Sign Up"]
const Header = () => {
    const [value, setvalue] = useState(null)
    let theme = useTheme()
    let ismatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {
                ismatch ?
                    <>
                        <AppBar sx={{ background: "#063970", padding: "0px 20px" }}>
                            <Toolbar>
                                <AddShoppingCartIcon sx={{ fontSize: "30px" }} />
                                <Drawer pages={PAGES} />
                            </Toolbar>
                        </AppBar>
                    </>
                    :
                    <>
                        <AppBar sx={{ background: "#063970", padding: "0px 40px" }}>
                            <Toolbar>
                                <AddShoppingCartIcon sx={{ fontSize: "30px" }} />
                                <Tabs sx={{ marginLeft: "auto" }} textColor='inherit' value={value} indicatorColor="dark" onChange={(e, val) => { setvalue(val) }}>

                                    {
                                        PAGES.filter((data, index) => {
                                            return (index < 3)
                                        }).map((data, index) => {
                                            return (<Tab key={index} label={data} sx={{ padding: "0px 40px" }} />
                                            )
                                        })
                                    }
                                </Tabs>
                                <Button sx={{ marginLeft: "auto" }} variant="contained">Login</Button>
                                <Button sx={{ marginLeft: "10px" }} variant="contained">SignUp</Button>
                            </Toolbar>
                        </AppBar>
                    </>
}
</>
)
}

export default Header;