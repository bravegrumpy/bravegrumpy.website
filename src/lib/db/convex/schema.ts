import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    navigation: defineTable({
        id: v.union(v.string(), v.number()),
        href: v.string(),
        text: v.string(),
        pageTitle: v.string(),
        pageSubtitle: v.string(),
        subnav: v.optional(
            v.array(
                v.object({
                    id: v.union(v.string(), v.number()),
                    href: v.string(),
                    text: v.string(),
                    pageTitle: v.string(),
                    pageSubtitle: v.string(),
                    subnav: v.optional(
                        v.array(
                            v.object({
                                id: v.string(),
                                href: v.string(),
                                text: v.string(),
                                pageTitle: v.string(),
                                pageSubtitle: v.string(),
                                display: v.optional(v.boolean()),
                                exists: v.optional(v.boolean())
                            })
                        )
                    ),
                    display: v.optional(v.boolean()),
                    exists: v.optional(v.boolean())
                })
            )
        ),
        display: v.boolean(),
        exists: v.boolean()
    })
    .index("by_exists_index", ["exists", "id"]),

    tasks: defineTable({
        isCompleted: v.boolean(),
        text: v.string()
    }),

    users: defineTable({
        email: v.string(),
        name: v.string()
    }),

    linkCategories: defineTable({
        name: v.string(),
        slug: v.string(),
        order: v.float64()
    }),

    linkNodeTypes: defineTable({
        name: v.string(),
        order: v.float64()
    }),

    linkNodes: defineTable({
        categoryId: v.id('linkCategories'),
        parentId: v.optional(v.id("linkNodes")),
        typeId: v.id('linkNodeTypes'),

        title: v.optional(v.string()),
        url: v.optional(v.string()),
        content: v.optional(v.string()),
        order: v.float64(),
    }).index("by_category", ["categoryId"]).index("by_parent", ["parentId"]).index("by_type", ["typeId"])
});