import React, {Suspense, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {ToolBarList} from "./components/ToolBarList";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {Index} from './pages/Index';
import {Prerendered} from "./pages/Prerendered";
import {AppBar} from "./components/AppBar";
import {SearchList} from './components/SearchList';
import {Backdrop} from "@material-ui/core";
import {Why} from "./pages/Why";
import {How} from './pages/How';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer - 1,
        color: "white",
    },
}));

function App() {
    const classes = useStyles();
    const [open, setOpen] = useState(window.innerWidth > 420);
    const [search, setSearch] = useState("");
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);
    const handleBackDropClose = () => setSearch("");
    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar handleDrawerOpen={handleDrawerOpen} open={open} onSearch={setSearch}/>
                <Drawer variant="permanent"
                        classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}} open={open}>
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <Suspense fallback="loading">
                        <ToolBarList/>
                    </Suspense>
                </Drawer>
                <main className={classes.content}>
                    <Backdrop className={classes.backdrop} open={search !== ""} onClick={handleBackDropClose}>
                        <Suspense fallback="loading">
                            <SearchList to_search={search}/>
                        </Suspense>
                    </Backdrop>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Switch>
                            <Route exact path="/">
                                <Index/>
                            </Route>
                            <Route exact path="/how">
                                <How/>
                            </Route>
                            <Route exact path="/why">
                                <Why/>
                            </Route>
                            <Route path="/prerendered/:path">
                                <Prerendered/>
                            </Route>
                        </Switch>
                    </Container>
                </main>
            </div>
        </Router>
    );
}

export default App;
