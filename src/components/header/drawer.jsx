
import { Drawer, List, ListItemButton, ListItemIcon,ListItemText ,ListItem,IconButton} from '@mui/material'
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = ({pages}) => {
    const [openDrawer, setopenDrawer] = useState(false);
    console.log(pages);
    return (<>
        <Drawer anchor='top' open={openDrawer} onClose={() => setopenDrawer(false)} sx={{zIndex: '1',transition:"0.5s all" }}>
            <List sx={{ marginTop: "50px",transition:"0.5s all"}}>
                {
                pages.map((data,index)=>{
                    return (
                    <ListItem disablePadding key={index}>
                        <ListItemButton onClick={()=>{setopenDrawer(false)}}>
                            <ListItemIcon>
                                <ListItemText >{data}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>)
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