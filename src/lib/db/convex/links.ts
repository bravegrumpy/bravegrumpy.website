import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const getCategories = query({
    handler: async (ctx) => {
        return await ctx.db.query("linkCategories").order("asc").collect();
    }
});

export const getTypes = query({
    handler: async (ctx) => {
        return await ctx.db.query("linkNodeTypes").order("asc").collect();
    }
})

export  const getNodesByCategory = query({
    args: {
        categoryId: v.id("linkCategories")
    },
    handler: async (ctx, args) => {
        return await ctx.db.query("linkNodes")
            .withIndex("by_category", (q) => q.eq("categoryId", args.categoryId))
            .collect()
    }
});

export const getNodesByType = query({
    args: { typeId: v.id("linkNodeTypes") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("linkNodes")
            .withIndex("by_type", (q) => q.eq("typeId", args.typeId))
            .collect()
    }
})