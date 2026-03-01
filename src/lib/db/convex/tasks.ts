import { query, mutation } from "$lib/db/convex/_generated/server"
import { v } from "convex/values"

export const get = query({
    args: {},
    handler: async (ctx) => {
        const tasks = await ctx.db.query("tasks").collect();
        return tasks.map((task) => ({ ...task, assigner: "tom"}))
    }
});

export const createTask = mutation({
    args: { 
        text: v.string(),
        assigner: v.optional(v.string()),
        isCompleted: v.optional(v.boolean()) 
    },
    handler: async (ctx, args) => {
        const newTaskId = await ctx.db.insert("tasks", { text: args.text, isCompleted: args.isCompleted !== undefined ? args.isCompleted : false, assigner: args.assigner })
        return newTaskId;
    }
});

export const updateTask = mutation({
    args: {
        id: v.id("tasks"),
        text: v.string(),
    },
    handler: async (ctx, args) => {
        const task = await ctx.db.get(args.id)
        if (!task) {
            console.error("Task not found")
            throw new Error("Task not found")
        }
        await ctx.db.patch(args.id, {
            text: args.text
        })
    }
});

export const changeStatus = mutation({
    args: { id: v.id("tasks")},
    handler: async (ctx, args) => {
        const task = await ctx.db.get(args.id);
        if (!task) {
            console.error("Task not found")
            throw new Error("Task not found");
        }
        await ctx.db.patch(args.id, {
            isCompleted: !task.isCompleted
        })
    },
})