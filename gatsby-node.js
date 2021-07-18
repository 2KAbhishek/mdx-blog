const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    result.data.allMdx.edges.forEach(({node}) => {
        createPage({
            path: '/articles/' + node.slug,
            component: path.resolve(`./src/templates/blog-post.jsx`),
            context: {
                slug: node.slug
            }
        });
    });
};
