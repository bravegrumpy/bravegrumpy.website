import { marked } from 'marked';
import DomPurify from 'isomorphic-dompurify';
import * as  db from "$lib/database.js";

export const actions = {
    default: async ({ request }) => {
        const data = request.formData();
        const slugDirty = (await data).get('slug')
        const titleDirty = (await data).get('title')
        const contentDirty = (await data).get('content');

        const slug = slugDirty;
        const title = slugDirty;
        const content = DomPurify.sanitize(marked.parse(slugDirty));

        db.addPost(slug, title, content);
    }
};