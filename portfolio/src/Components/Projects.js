import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        background: 'white',
        height: '150vh'
    }
})
const Projects = () => {

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>

        </div>
    )
}

export default Projects;