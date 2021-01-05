import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    // Style for NewsCards component
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

 // styles for NewsCard component

    media: {
        height: 250,
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
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

    activeCard: {
        borderBottom: '10px solid #22289a',
    },

    border: {
        border: 'solid'
    },

    fullHeightCard: {
        height: '100%',
    },
    
    grid: {
        display: 'flex',
    },
    //

    logoContainer: {
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },





    alanLogo: {
        height: '27vmin',
        borderRadius: '15%',
        padding: '0 5%',
        margin: '3% 0',
    },

// styles for Modal Component
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        overflow: 'scroll',
        height: '60%',
      },

      infoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px 0',
      },

      chipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '25px',
        width: '50%',
      },

      trySaying: {
        marginBottom: '25px',
      },

      chip: {
        margin: '5px',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
}));