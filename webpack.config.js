const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
    { path: '/', priority: 1.0 },
    { path: '/zabiegi', priority: 0.8 },
    { path: '/zabiegi/:id', priority: 0.7 },
    { path: '/cennik', priority: 0.8 },
    { path: '/o-nas', priority: 0.7 },
    { path: '/pytania-i-odpowiedzi', priority: 0.6 },
    { path: '/kontakt', priority: 0.7 },
    { path: '/404', priority: 0.1 },
];

module.exports = {
    plugins: [
        new SitemapPlugin({ base: 'https://yourwebsite.com', paths }) // my link
    ],
};
