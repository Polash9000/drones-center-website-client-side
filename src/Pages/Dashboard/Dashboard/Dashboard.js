import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from './../../../hooks/useAuth'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDrone from '../AddDrone/AddDrone';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllDrones from '../ManageAllDrones/ManageAllDrones';
import ManageDrones from '../ManageDrones/ManageDrones';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const { admin, logout } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'gray' }} to="/drone"><Button color="inherit">Drone</Button></Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'gray' }} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'gray' }} to="/pay"><Button color="inherit">Pay</Button></Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'gray' }} to="/review"><Button color="inherit">Review</Button></Link>
            {admin && <Box>
                <Link style={{ textDecoration: 'none', color: 'gray' }} to={`${url}/manageAllProducts`}><Button color="inherit">Manage All Products</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'gray' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'gray' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link style={{ textDecoration: 'none', color: 'gray' }} to={`${url}/addDrone`}><Button color="inherit">Add Drone</Button></Link>
                <List></List>
            </Box>}
            <br />
            <Button onClick={logout} color="inherit">Logout</Button>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/manageAllProducts`}>
                        <ManageAllDrones></ManageAllDrones>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageDrones></ManageDrones>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDrone`}>
                        <AddDrone></AddDrone>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;