import type { INodeProperties } from 'n8n-workflow';

export const productsOnlineDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Products Online"
					]
				}
			},
			"options": [
				{
					"name": "Create Product Slug",
					"value": "Create Product Slug",
					"action": "Create a product identifier",
					"description": "Creates a unique slug (identifier) for a product. The slug is used to create a product URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/online/slug"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /organizations/{organizationUuid}/products/online/slug",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products Online"
					],
					"operation": [
						"Create Product Slug"
					]
				}
			}
		},
		{
			"displayName": "Organization Uuid",
			"name": "organizationUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Products Online"
					],
					"operation": [
						"Create Product Slug"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Product Name",
			"name": "productName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "productName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products Online"
					],
					"operation": [
						"Create Product Slug"
					]
				}
			}
		},
];
