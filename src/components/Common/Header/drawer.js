import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from "@mui/material";


export default function AnchorTemporaryDrawer() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuOpenIcon className="link" />
            </IconButton>
            <Drawer
                anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <div className="drawer-div">
                    <a href='/'>
                        <p className='link'>Home</p>
                    </a>
                    <a href='/'>
                        <p className='link'>Compare</p>
                    </a>
                    <a href='/'>
                        <p className='link'>Watchlist</p>
                    </a>
                    <a href='/'>
                        <p className='link'>Dashboard</p>
                    </a>
                </div>
            </Drawer>
        </div>
    );
}
