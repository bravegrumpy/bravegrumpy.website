import { query } from "./_generated/server"

export const get = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();
        return users.map((user) => ({...user }))
    }
})