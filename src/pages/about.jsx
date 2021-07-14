import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <p>
                This blog was created by{' '}
                <a href='https://www.github.com/2kabhsihek'>2KAbhishek </a>
                using Gatsby JS, React and Theme UI
            </p>
        </Layout>
    );
};

export default AboutPage;
