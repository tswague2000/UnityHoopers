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
            url: 'http://localhost:3000/equipe',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7
        },
        {
            url: 'http://localhost:3000/partenaires',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7
        },

        {
            url: 'http://localhost:3000/evenementA',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },

        {
            url: 'http://localhost:3000/evenementB',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },

        {
            url: 'http://localhost:3000/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7
        }
    ]
}