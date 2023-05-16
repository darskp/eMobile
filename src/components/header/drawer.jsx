
import { Drawer, List, ListItemButton, ListItemIcon,ListItemText ,ListItem,IconButton} from '@mui/material'
import {useState} from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
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
                            sx={{
                                "&:focus, &:hover, &:visited, &:link, &:active": {
                                    backgroundColor: "none !important",
                                    // Add any other active styles you want to remove
                                },
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
            </List>
            
        </Drawer>
        <IconButton onClick={() => setopenDrawer(!openDrawer)} sx={{color:"white",marginLeft:"auto"}}>
            <MenuIcon />
        </IconButton>
    </>);
}

export default DrawerComp;