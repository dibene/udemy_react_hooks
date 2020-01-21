import React from 'react'
import { Grid, Card, Typography, Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";

import styles from './style'

export const MovieResult = withRouter(({ Title, Year, Type, imdbID, Poster, history }) => {
	const classes = styles()

    const handleViewMore = () => {
        history.push(`/movie/${imdbID}`)
    }
    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster}/>
                </Grid>
                <Grid item className={classes.infoContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleViewMore}>More...</Button>

                </Grid>
            </Grid>
        </Card>
    )
})
