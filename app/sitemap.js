/**
 * @returns {import("next").Metadata.Sitemap}
*/

export default function Sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },

        {
            url: 'http://localhost:3000/gallerie',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.2
        },

        {
            url: 'http://localhost:3000/apropos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },

        {
            url: 'http://localhost:3000/form',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        }
    ]
}