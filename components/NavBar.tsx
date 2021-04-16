import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { useRouter, NextRouter } from 'next/router';

import {
    Grid,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
    Menu,
    ChevronLeftOutlined,
    ExpandLess,
    ExpandMore,
} from '@material-ui/icons';

import { Nav } from './common/common';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

interface NavProps {
    children: ReactNode;
}

const NavBar: React.FC<NavProps> = (props) => {
    const classes = useStyles();
    const router: NextRouter = useRouter();

    const [open, setOpen] = useState(false);
    const [openSub, setOpenSub] = useState(false);

    const handleOpenDrawer = () => {
        setOpen(true);
    };

    const handleCloseDrawer = () => {
        setOpen(false);
    };

    const handleOpenSubMenu = () => {
        setOpenSub(!openSub);
    };

    return (
        <div className={classes.root}>
            <AppBar
                color='primary'
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Grid
                        container
                        direction='row'
                        justify='space-between'
                        alignItems='center'
                    >
                        <Grid item>
                            <IconButton
                                color='inherit'
                                aria-label='open drawer'
                                edge='start'
                                onClick={handleOpenDrawer}
                            >
                                <Menu />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={() => router.push('/login')}
                            >
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleCloseDrawer}>
                        <ChevronLeftOutlined />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {Nav.map((nav) =>
                        nav.submenu ? (
                            <div>
                                <ListItem
                                    key={nav.id}
                                    onClick={handleOpenSubMenu}
                                >
                                    <ListItemIcon>{nav.icon}</ListItemIcon>
                                    <ListItemText primary={nav.label} />
                                    {openSub ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse
                                    in={openSub}
                                    timeout='auto'
                                    unmountOnExit
                                >
                                    <List component='div' disablePadding>
                                        {nav.submenu?.map((submenu) => (
                                            <ListItem key={submenu.id}>
                                                <ListItemIcon>
                                                    {submenu.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={submenu.label}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </div>
                        ) : (
                            <ListItem key={nav.id}>
                                <ListItemIcon>{nav.icon}</ListItemIcon>
                                <ListItemText primary={nav.label} />
                            </ListItem>
                        )
                    )}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
};

export default NavBar;
