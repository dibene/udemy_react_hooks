import { makeStyles } from '@material-ui/styles'

const centerStyleObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
export default makeStyles({
    cardContainer: {
        marginBottom: 8 
    },
    poster: {
        width: 120,
    },
    infoContainer: {
        paddingLeft: 8
    }
})