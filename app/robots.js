/**
 * 
 * @returns {import("next").Metadata.Robots}
 */

export default function Robots() {
    return {
        rules: [
            {
                userAgent: '*', // Tous les robots
                allow: '/', // Autoriser toutes les pages
            }
        ],
        sitemap: ' http://localhost:3000/sitemap.xml', // URL de la sitemap  
    }
}