import rss from 'astrojs/rss';

export function GET(content){
    return rss({
        title: 'BraveGrumpy Website',
        description: 'A personal website that features a bunch of different creative endeavours.',
        site: getContext.site,
        items [],
        customData: `<language>en-us</language>`
    })
}