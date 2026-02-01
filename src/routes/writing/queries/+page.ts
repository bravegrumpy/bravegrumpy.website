import { generateClient } from "aws-amplify/data";
import type { Schema } from "$lib/../../amplify/data/resource";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit"

export const load: PageLoad = async () => {
    let todoList;
    try {
    const client = generateClient<Schema>();
    const { data: todos } = await client.models.Todo.list();
    let todoList = { data: todos };
    return todoList;
    } catch (err) {
        todoList = "Failure"
        return error(511, "Failed to fetch backend")
    }
    return todoList;
}
