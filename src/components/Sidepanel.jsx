import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PieChartIcon from '@material-ui/icons/PieChart';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

const useStyles = makeStyles({
    sidepanel: {
        width: "15%",
        float: "left",
        backgroundColor: "#2B3C44",
        color: "#899399",
        paddingTop: 50,
        paddingBottom: 420,

    },

    icon: {
        color: "#899399"
    },

    search: {
        backgroundColor: "#899399",
        borderRadius: 6,
        color: "#ffffff",
        marginTop: 10,
        marginBottom: 10,
        width: 245,
        marginLeft: 15
    }
})

function Sidepanel() {

    const classes = useStyles();



    return (
        <div className={classes.sidepanel}>
            <div>

                <TextField
                    className={classes.search}
                    id="filled-basic"
                    label="Search"
                    variant="filled"

                >
                    <SearchIcon />
                </TextField>
            </div>

            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Portofolio" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <PieChartIcon />
                </ListItemIcon>
                <ListItemText primary="Prospecting" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <ViewColumnIcon />
                </ListItemIcon>
                <ListItemText primary="Phases" />
            </ListItem>
            <ListItem button>
                <ListItemIcon className={classes.icon}>
                    <EqualizerIcon />
                </ListItemIcon>
                <ListItemText primary="Forecasting" />
            </ListItem>
        </div>
    )

}



export default Sidepanel;