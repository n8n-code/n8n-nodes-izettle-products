import type { INodeProperties } from 'n8n-workflow';

export const imagesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					]
				}
			},
			"options": [
				{
					"name": "Get All Image Urls",
					"value": "Get All Image Urls",
					"action": "Retrieve all library item images",
					"description": "Retrieves all library items images used by the organization, sorted by updated date",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/images"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					],
					"operation": [
						"Get All Image Urls"
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
						"Images"
					],
					"operation": [
						"Get All Image Urls"
					]
				}
			}
		},
];
