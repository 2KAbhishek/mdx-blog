import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle='About'>
            <p>
                This blog was created by{' '}
                <a href='https://www.github.com/2kabhsihek'>2KAbhishek </a>
                using Gatsby JS, React and Theme UI
            </p>
        </Layout>
    );
};

export default AboutPage;
