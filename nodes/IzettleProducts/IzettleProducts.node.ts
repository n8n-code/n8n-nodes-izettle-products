import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { categoriesDescription } from './resources/categories';
import { discountsDescription } from './resources/discounts';
import { imagesDescription } from './resources/images';
import { importDescription } from './resources/import';
import { libraryDescription } from './resources/library';
import { productsDescription } from './resources/products';
import { productsOnlineDescription } from './resources/products-online';
import { taxesDescription } from './resources/taxes';

export class IzettleProducts implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Izettle Products',
                name: 'N8nDevIzettleProducts',
                icon: { light: 'file:./izettle-products.png', dark: 'file:./izettle-products.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Product Library API manages merchant product data and images.',
                defaults: { name: 'Izettle Products' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevIzettleProductsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Categories",
					"value": "Categories",
					"description": ""
				},
				{
					"name": "Discounts",
					"value": "Discounts",
					"description": ""
				},
				{
					"name": "Images",
					"value": "Images",
					"description": ""
				},
				{
					"name": "Import",
					"value": "Import",
					"description": ""
				},
				{
					"name": "Library",
					"value": "Library",
					"description": ""
				},
				{
					"name": "Products",
					"value": "Products",
					"description": ""
				},
				{
					"name": "Products Online",
					"value": "Products Online",
					"description": ""
				},
				{
					"name": "Taxes",
					"value": "Taxes",
					"description": ""
				}
			],
			"default": ""
		},
		...categoriesDescription,
		...discountsDescription,
		...imagesDescription,
		...importDescription,
		...libraryDescription,
		...productsDescription,
		...productsOnlineDescription,
		...taxesDescription
                ],
        };
}
