import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const AppHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Options
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default AppHeader;