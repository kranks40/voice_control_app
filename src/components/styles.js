import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0
    },

    cards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
    },

    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },

    media: {
        height: 250,
    },

    border: {
        border: 'solid'
    },

    fullHeightCard: {
        height: '100%',
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
    },

    activeCard: {
        borderBottom: '10px solid #22289a',
    },

    grid: {
        display: 'flex',
    },

    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },

    title: {
        padding: '0 16px',
    },

    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },

    logoContainer: {
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // [theme.breakpoint.down('sm')]: {
        //     flexDirection: 'column-reverse',
        //     textAlign: 'center',
        // },
    },

    alanLogo: {
        height: '27vmin',
        borderRadius: '15%',
        padding: '0 5%',
        margin: '3% 0',
        // [theme.breakpoint.down('sm')]: {
        //     height: '35vmin',
        // },
    },
}));