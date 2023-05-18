import { Drawer, List, ListItemButton, ListItemIcon,ListItemText ,ListItem,IconButton} from '@mui/material'
import {useState} from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { ShowOnLogin, ShowOnLogoff } from '../hiddenLink/hiddenLink';
const DrawerComp = ({pages}) => {
    const [openDrawer, setopenDrawer] = useState(false);
    return (<>
        <Drawer anchor='top' open={openDrawer} onClose={() => setopenDrawer(false)} sx={{zIndex: '1',transition:"0.5s all" }}>
            <List sx={{ marginTop: "50px",transition:"0.5s all"}}>
                {
                pages.map((data,index)=>{
                    return (
                        <RouterLink
                            to={data.link}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                    <ListItem disablePadding key={data.id}>
                                <ListItemButton onClick={() => { setopenDrawer(false) }}>
                                    <ListItemIcon>
                                        <ListItemText>{data.name}</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                    </ListItem>
                            </RouterLink>
                    )
                })
                }
                <ShowOnLogoff>
                <RouterLink
                    to='/login'
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { setopenDrawer(false) }}>
                            <ListItemIcon>
                                <ListItemText>Login</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </RouterLink>
                <RouterLink
                    to='/signup'
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { setopenDrawer(false) }}>
                            <ListItemIcon>
                                <ListItemText>Signup</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </RouterLink>
                </ShowOnLogoff>
                <ShowOnLogin>
                <RouterLink
                    to='/login'
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => { setopenDrawer(false) }}>
                            <ListItemIcon>
                                <ListItemText>Logout</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </RouterLink>
                </ShowOnLogin>
            </List>

        </Drawer>
        <IconButton onClick={() => setopenDrawer(!openDrawer)} sx={{color:"white",marginLeft:"auto"}}>
            <MenuIcon />
        </IconButton>
    </>);
}

export default DrawerComp;