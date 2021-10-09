import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, MenuItem, Menu } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Switch from './SwitchComp'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    drawerPaper: {
        width: drawerWidth,
        background: 'white',
        color: 'black',
        overflow: 'hidden',
    },
    toolbar: theme.mixins.toolbar,

}));

function SideDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const changeThemeHandler = event => {
        props.isDarkMode(event)
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }>
                <Typography variant="h5">{props.panelHeader}</Typography>
            </div>
            <Divider />
            <List>
                {props.controls.map((obj) => (
                    <MenuItem to={obj.path} component={Link} exact>
                        <ListItem button key={obj.id}>
                            <ListItemIcon>{obj.icon}</ListItemIcon>
                            <ListItemText primary={obj.name} />
                        </ListItem>
                    </MenuItem>
                ))}
            </List>
            <Divider />
            <List>
                {props.links.map((obj) => (
                    <ListItem button key={obj.id}>
                        <MenuItem component={Link} to={obj.path} exact>
                            <ListItemIcon>{obj.icon}</ListItemIcon>
                            <ListItemText primary={obj.name} />
                        </MenuItem>
                    </ListItem>
                ))}
            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileToggleState}
                    onClose={props.drawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}

export default SideDrawer