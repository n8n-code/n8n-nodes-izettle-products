# @n8n-dev/n8n-nodes-izettle-products

![izettle-products Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-izettle-products.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-izettle-products)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing izettle-products API integrations by hand.**

Every time you connect n8n to izettle-products, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to izettle-products took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Categories**, **Discounts**, **Images**, **Import**, **Library**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-izettle-products
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-izettle-products`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **izettle-products API** → paste your API key
3. Drag the **izettle-products** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Categories</b> (4 operations)</summary>

- Get Retrieve all categories
- Post Create a new category
- Delete a category
- Patch Rename a category

</details>

<details>
<summary><b>Discounts</b> (5 operations)</summary>

- Get Retrieve all discounts
- Post Create a discount
- Delete a single discount
- Get Retrieve a single discount
- Put Update a single discount

</details>

<details>
<summary><b>Images</b> (1 operations)</summary>

- Get Retrieve all library item images

</details>

<details>
<summary><b>Import</b> (3 operations)</summary>

- Get status for latest import
- Get status for an import
- Post Import library items

</details>

<details>
<summary><b>Library</b> (1 operations)</summary>

- Get Retrieve the entire library

</details>

<details>
<summary><b>Products</b> (9 operations)</summary>

- Delete a list of products
- Get Retrieve all products visible in POS
- Post Create a new product
- Get Retrieve an aggregate of active Options in the library
- Get Retrieve all products visible in POS v2
- Get Retrieve the count of existing products
- Put Update a single product
- Delete a single product
- Get Retrieve a single product

</details>

<details>
<summary><b>Products Online</b> (1 operations)</summary>

- Post Create a product identifier

</details>

<details>
<summary><b>Taxes</b> (8 operations)</summary>

- Get all available tax rates
- Post Create new tax rates
- Get all tax rates and a count of products associated with each
- Get the organization tax settings
- Put Update the organization tax settings
- Delete a single tax rate
- Get a single tax rate
- Put Update a single tax rate

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from izettle-products docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official izettle-products OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **izettle-products** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the izettle-products API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
