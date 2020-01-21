import { makeStyles } from '@material-ui/styles'

const centerStyleObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
export default makeStyles({
    container: {
        ...centerStyleObject,
        flexDirection: "column",
        height: '100vh',
    },
    cardContainer: {
        ...centerStyleObject,
        flexDirection: "column",
        width: 400,
        height: 200,
        padding: '2rem',
    },
    title: {
        fontSize: "4rem",
    },
    titleGridContainer: {
        ...centerStyleObject,
    },
    textFieldSearch: {
        width: '90%',
    },
    searchButton: {
        marginLeft: '.5rem',
    },
    buttonContainer: {
        marginTop: '.5rem',
    },
})