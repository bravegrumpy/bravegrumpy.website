import * as sitemap from 'super-sitemap';

    export const GET = async () => {
        return await sitemap.response({
            origin: 'https://www.bravegrumpy.com',
            sort: 'alpha'
        })
    };