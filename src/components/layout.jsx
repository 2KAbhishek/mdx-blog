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

const Layout = ({pageTitle, children}) => {
    return (
        <main style={pageStyles}>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <h1 style={headingStyles}>{pageTitle}</h1>
            {children}
        </main>
    );
};

export default Layout;
