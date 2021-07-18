import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle='About'>
            <p>
                This blog was created by
                <a href='https://www.github.com/2kabhsihek'> 2KAbhishek </a>.
                <br />
                <br />
                Made using Gatsby JS, React, GraphQL, Theme UI and a bazillion
                more things
            </p>
        </Layout>
    );
};

export default AboutPage;
