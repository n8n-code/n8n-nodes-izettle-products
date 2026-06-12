import type { INodeProperties } from 'n8n-workflow';

export const categoriesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					]
				}
			},
			"options": [
				{
					"name": "Get Product Types",
					"value": "Get Product Types",
					"action": "Retrieve all categories",
					"description": "Retrieve all categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/categories/v2"
						}
					}
				},
				{
					"name": "Create Categories",
					"value": "Create Categories",
					"action": "Create a new category",
					"description": "Create a new category",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/categories/v2"
						}
					}
				},
				{
					"name": "Delete Category",
					"value": "Delete Category",
					"action": "Delete a category",
					"description": "Delete a category",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/categories/v2/{{$parameter[\"categoryUuid\"]}}"
						}
					}
				},
				{
					"name": "Rename Category",
					"value": "Rename Category",
					"action": "Rename a category",
					"description": "Rename a category",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/categories/v2/{{$parameter[\"categoryUuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/categories/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Product Types"
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
						"Categories"
					],
					"operation": [
						"Get Product Types"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationUuid}/categories/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Create Categories"
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
						"Categories"
					],
					"operation": [
						"Create Categories"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Create Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationUuid}/categories/v2/{categoryUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Delete Category"
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
						"Categories"
					],
					"operation": [
						"Delete Category"
					]
				}
			}
		},
		{
			"displayName": "Category Uuid",
			"name": "categoryUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Delete Category"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organizations/{organizationUuid}/categories/v2/{categoryUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Rename Category"
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
						"Categories"
					],
					"operation": [
						"Rename Category"
					]
				}
			}
		},
		{
			"displayName": "Category Uuid",
			"name": "categoryUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Rename Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Rename Category"
					]
				}
			}
		},
];
