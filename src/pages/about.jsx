import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle='About'>
            <p>
                This blog was created by
                <a href='https://www.github.com/2kabhishek'> 2KAbhishek </a>.
                <br />
                <br />
                Made using Gatsby JS, React, GraphQL, Theme UI and a bazillion
                more things
                <br />
                <br />
                View the source here{' '}
                <a href='https://github.com/2kabhishek/mdx-blog'>
                    MDX Blog on GitHub
                </a>
                .
            </p>
        </Layout>
    );
};

export default AboutPage;
