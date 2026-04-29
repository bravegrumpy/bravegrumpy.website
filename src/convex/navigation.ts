import { query, mutation } from "$lib/../convex/_generated/server"
import { type Infer, v } from "convex/values"

export const get = query({
    args: {},
    handler: async (ctx) => {
        const routes = await ctx.db
            .query("navigation")
            .withIndex("by_exists_index", (q) => q.eq("exists", true))
            .order("asc")
            .collect();
        return routes.map((route) => ({...route}))
    }
});

export const newRouteValidator = v.object({
    id: v.string(),
    href: v.string(),
    text: v.string(),
    pageTitle: v.string(), 
    pageSubtitle: v.string(),
    display: v.boolean(),
    exists: v.boolean(),
    subnav: v.optional(
        v.array(
            v.object({
                id: v.string(),
                href: v.string(),
                text: v.string(),
                pageTitle: v.string(), 
                pageSubtitle: v.string(),
                display: v.boolean(),
                exists: v.boolean(),
                subnav: v.optional(
                    v.array(
                        v.object({
                            id: v.string(),
                            href: v.string(),
                            text: v.string(),
                            pageTitle: v.string(), 
                            pageSubtitle: v.string(),
                            display: v.boolean(),
                            exists: v.boolean(),
                        })
                    )
                )
            })
        )
    )
});

export type Link = Infer<typeof newRouteValidator>

export const createRoute = mutation({
    args: newRouteValidator,
    handler: async (ctx, args) => {
        const newRoute = await ctx.db.insert("navigation", {...args});
        return newRoute;
    }
});