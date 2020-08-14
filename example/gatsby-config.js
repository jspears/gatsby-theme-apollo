const root = __dirname;
//See gatsby-theme-apollo-docs/themeOptions.js for a more comprehensive list
module.exports = {
    plugins: [
        {
            resolve: "@paypalcorp/gatsby-source-typedoc",
            options: {
                src: ['./src/index.ts'],
                typedoc: {
                    target: 'es5',
                    mode: 'modules',
                    experimentalDecorators: true,
                },
            },
        },
        {
            //use the gatsby apollo theme
            resolve: '@paypalcorp/gatsby-theme-apollo-docs',
            options: {
                //root is mandatory.
                root,
                siteName: 'Hello world',
                description: "An example of how to set up Apollo's documentation theme",
                favicon: '/favicon.ico',
                sidebarCategories: {
                    //Null is an alias for index page.
                    null: ['index'],
                    More: ['other']
                },

            }
        }
    ]
};
