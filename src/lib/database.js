import { SvelteMap } from "svelte/reactivity";

const db = new SvelteMap();

const welcome = {
    slug: 'welcome',
    title: 'Welcome to the Aperture Science computer-aided enrichment center',
     content: '<p>We hope your brief detention in the relaxation vault has been a pleasant one.</p><p>Your specimen has been processed and we are now ready to begin the test proper.</p>'    
};

const safety = {
    slug: 'safety',
    title: 'Safety notice',
    content: '<p>While safety is one of many Enrichment Center Goals, the Aperture Science High Energy Pellet, seen to the left of the chamber, can and has caused permanent disabilities, such as vaporization. Please be careful.</p>'
};

const cake  = {
    slug: 'cake',
    title: 'This was a triumph',
    content: "<p>I'm making a note here: HUGE SUCCESS.</p>"
};

db.set('welcome', welcome);
db.set('cake', cake);
db.set('safety', safety);


//export let posts = [welcome, safety, cake];

export let posts = [db.get('welcome'), db.get('safety'), db.get('cake')]

export function getAllPosts() {
    return posts;
}

export function addPost( slug, title, content ) {
    post = {slug, title, content};
    posts.push(post);

    return(post);
}

export function post(slug) {
    return posts.find((post) => post.slug === slug);
}