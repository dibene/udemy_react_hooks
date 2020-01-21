import React, { useEffect } from 'react'
import { Container, CircularProgress, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import styles from './style'
import queryString from 'querystring'
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading } from '../../redux/selectors'
import { MovieResult } from '../../components/MovieResult'

export default ({ location }) => {
	const classes = styles()
	const dispatch = useDispatch()
	const movies = useSelector(state => movieResults(state))
	const isLoading = useSelector(state => isSearchLoading(state))

	useEffect(() => {
		const { movieName } = queryString.parse(location.search.slice(1));
		dispatch(searchMovie({ movieName }));
	}, [])
	
	const renderMovies = () => {
		if (movies) {
			return movies.map((movie, index) =>
				<MovieResult key={index} {...movie} />
			)
		}else if (isLoading){
			return <CircularProgress sise={100} color="primary" />
		}
		return <div/>
	}
	return (
		<Container >
			{renderMovies()}
		</Container>
	)
}
