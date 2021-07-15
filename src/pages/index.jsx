import React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
    return (
        <Layout pageTitle='MDX Blog'>
            <p>Welcome to MDX Blog</p>
            <StaticImage
                src='../images/icon.png'
                alt='Markdown logo'></StaticImage>
        </Layout>
    );
};

export default IndexPage;
