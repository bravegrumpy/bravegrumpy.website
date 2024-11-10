import { marked } from 'marked';
import DomPurify from 'isomorphic-dompurify';
import * as  db from "$lib/database.js";

export const actions = {
    default: async ({ request }) => {
        const data = request.formData();
        const slug = DomPurify.sanitize(marked(data.get('slug')));
        const title = DomPurify.sanitize(marked(data.get('title')));
        const content = DomPurify.sanitize(marked(data.get('content')));
        db.addPost(slug, title, content);
    }
};