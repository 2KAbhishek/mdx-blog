import React from 'react';
import {Link} from 'gatsby';
const pageStyles = {
    color: '#232129',
    padding: 96,
    fontFamily: '-apple-system, Roboto, sans-serif, serif'
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 24,
    maxWidth: 320
};

const AboutPage = () => {
    return (
        <main style={pageStyles}>
            <title>About</title>
            <h1 style={headingStyles}>About</h1>
            <p>
                This blog was created by{' '}
                <a href='https://www.github.com/2kabhsihek'>2KAbhishek </a>
                using Gatsby JS, React and Theme UI
            </p>
            <Link to='/'>Back to Home</Link>
        </main>
    );
};

export default AboutPage;
