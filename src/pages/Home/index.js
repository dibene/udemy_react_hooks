import React, { useState } from 'react'
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import styles from './style'
import { MovieIcon } from '../../icons'

export default ({history}) => {
	const classes = styles()
	const [searchText, setSearchText] = useState('')

	const handleSearchText = (event) => {
		setSearchText(event.target.value)
	}
	const handleClearTextClick = event => {
		setSearchText('')
	};
	const handleSearchTextClick = event => {
		history.push(`/results?movieName=${searchText}`)
	};
	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title} >Welcome</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.title} />
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder="Search"
					onChange={handleSearchText}
				/>
				<Grid className={classes.buttonContainer}>
					<Button variant="contained" onClick={handleClearTextClick}>Clear!</Button>
					<Button
						className={classes.searchButton}
						variant="contained"
						color="primary"
						size="large"
						onClick={handleSearchTextClick}>
						Search!
						 </Button>
				</Grid>
			</Card>
		</Container>
	)
}
