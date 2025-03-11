export async function load({ fetch }) {
    const resp = await fetch('https://dummyjson.com/users');
    const users = await resp.json();

    return {
        users,
    }
}