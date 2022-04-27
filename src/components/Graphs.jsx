
import { makeStyles } from '@material-ui/styles';
import PieChartul from './PieChart';

import React from 'react';

const useStyles = makeStyles({
    container: {
        backgroundColor: "#202B31",
        width: "85%",
        paddingBottom: 200,
        float: "right"

    },
    cards: {
        width: "98%",
        paddingBottom: 200,
        backgroundColor: "#2B3C44",
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 6
        //   float: 'right'
    },

    pieCard: {
        width: "33.33%",
        paddingBottom: 200,
        float: "left",

    },

    lineChart1: {
        width: "33.33%",
        paddingBottom: 200,
        marginLeft: "345",


    },

    lineChart2: {
        paddingBottom: 200,
        width: "33%",
        float: "right",

    },

    header: {
        color: "white",
        fontSize: 25,
        fontWeight: 500,
        marginLeft: 16
    }
})

export default function Graphs() {

    const classes = useStyles();
    return (

        <div className={classes.container}>
            <h1 className={classes.header}>Portoflio</h1>
            <div className={classes.cards}>
                <div className={classes.pieCard}>
                    <PieChartul />
                </div>
                <div className={classes.lineChart1}>

                </div>
                <div className={classes.lineChart2}>

                </div>
            </div>
        </div>
    )
}





