import type { INodeProperties } from 'n8n-workflow';

export const importDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					]
				}
			},
			"options": [
				{
					"name": "Get Latest Import Status",
					"value": "Get Latest Import Status",
					"action": "Get status for latest import",
					"description": "Get status for latest import",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/import/status"
						}
					}
				},
				{
					"name": "Get Status By Uuid",
					"value": "Get Status By Uuid",
					"action": "Get status for an import",
					"description": "Get status for an import",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/import/status/{{$parameter[\"importUuid\"]}}"
						}
					}
				},
				{
					"name": "Import Library v2",
					"value": "Import Library v2",
					"action": "Import library items",
					"description": "Import library items",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/import/v2"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/import/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Get Latest Import Status"
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
						"Import"
					],
					"operation": [
						"Get Latest Import Status"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/import/status/{importUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Get Status By Uuid"
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
						"Import"
					],
					"operation": [
						"Get Status By Uuid"
					]
				}
			}
		},
		{
			"displayName": "Import Uuid",
			"name": "importUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Get Status By Uuid"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationUuid}/import/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import Library v2"
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
						"Import"
					],
					"operation": [
						"Import Library v2"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Products",
			"name": "products",
			"type": "json",
			"default": "[\n  {\n    \"categories\": [\n      null\n    ],\n    \"category\": {},\n    \"imageLookupKeys\": [\n      null\n    ],\n    \"metadata\": {\n      \"source\": {}\n    },\n    \"online\": {\n      \"presentation\": {\n        \"additionalImageUrls\": [\n          null\n        ],\n        \"mediaUrls\": [\n          null\n        ]\n      },\n      \"seo\": {},\n      \"shipping\": {\n        \"weight\": {}\n      }\n    },\n    \"presentation\": {},\n    \"taxRates\": [\n      null\n    ],\n    \"variantOptionDefinitions\": {\n      \"definitions\": [\n        {\n          \"properties\": [\n            {}\n          ]\n        }\n      ]\n    },\n    \"variants\": [\n      {\n        \"costPrice\": {},\n        \"options\": [\n          {}\n        ],\n        \"presentation\": {},\n        \"price\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "products",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Import Library v2"
					]
				}
			}
		},
];
