import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { movieResultSelector, movieResults } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";

const MovieDetail = ({ match }) => {
    const dispatch = useDispatch()
    const movieResult = useSelector(state => movieResultSelector(state))
    useEffect(() => {
        const movieId = match.params.id;
        dispatch(searchMovieById({ movieId }));
    }, [])

    if (!movieResult) {
        return <CircularProgress size={100} color='primary' />
    }
    const { Title, Poster,Actors,Director,Country,Rated,Awards,Plot } = movieResult
    return (
        <Container>
            <Typography variant="h3">{Title}</Typography>
            <img src={Poster} alt={Title} />
            <Typography><strong> Actors: </strong> {Actors} </Typography>
            <Typography><strong> Director: </strong> {Director} </Typography>
            <Typography><strong> Country: </strong> {Country} </Typography>
            <Typography><strong> Rated: </strong> {Rated} </Typography>
            <Typography><strong> Awards: </strong> {Awards} </Typography>
            <Typography><strong> Plot: </strong> {Plot} </Typography>
        </Container>
    )
}

export default MovieDetail;