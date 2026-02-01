export const handler = async (event: any) => {
    console.log(JSON.stringify(event));
    return "Hello from my first function"
}