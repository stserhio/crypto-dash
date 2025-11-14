import {Link} from "react-router";


const NotFoundPage = () => {
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>
                Sorry, we could not find any page.
            </p>
            <Link to='/' style={styles.link}>Return to the Home Page</Link>
        </div>

    );
}

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: '80px 20px',
        color: 'white',

    },
    title: {
        fontSize: '72px',
        marginBottom: '20px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    link:{
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold',
    }
}
export default NotFoundPage;