# Clerk Role based permissions

## Question:

How can I give specific users permission to view specific content, while having the default user unable to see the content?

## Answer: 


 There are two main approaches to control user access to specific content in Clerk:

1. Using Organizations with Roles and Permissions:
- Create custom roles and permissions to define access levels  [(1)](https://clerk.com/docs/organizations/roles-permissions#permissions) 
- Use the `<Protect>` component to control content visibility based on permissions  [(2)](https://clerk.com/docs/components/protect#usage) 

Here's an example using the `<Protect>` component:

```tsx
<Protect permission="org:invoices:create">
  <p slot="fallback">You do not have the permissions to create an invoice.</p>
  <slot />
</Protect>
```


2. Using Basic RBAC with Metadata:
If you're not using Organizations, you can implement basic role-based access control by:
- Storing user privileges in public metadata  [(3)](https://clerk.com/docs/references/nextjs/basic-rbac) 
- Configuring the session token to include these privileges 
- Creating middleware to check for these privileges 

Both approaches allow you to restrict content visibility based on user permissions, with Organizations providing more robust built-in functionality for managing complex permission structures  [(4)](https://clerk.com/blog/role-based-access-control-with-clerk-orgs) .

Resources:
1. [Roles and Permissions](https://clerk.com/docs/organizations/roles-permissions)
 
1. <a href="https://clerk.com/docs/components/protect" target="_blank">&lt;Protect&gt;</a>

1. [Implement Basic Role Based Access Controll (RBAC) with metadata](https://clerk.com/docs/references/nextjs/basic-rbac)

1. [Role based access control with organizations](https://clerk.com/blog/role-based-access-control-with-clerk-orgs)