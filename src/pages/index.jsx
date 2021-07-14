import React from 'react';
import {Link} from 'gatsby';

// styles
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

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>MDX Blog</title>
            <h1 style={headingStyles}>MDX Blog</h1>
            <p>Welcome to MDX Blog</p>
            <Link to='/about'>About MDX Blog</Link>
        </main>
    );
};

export default IndexPage;
