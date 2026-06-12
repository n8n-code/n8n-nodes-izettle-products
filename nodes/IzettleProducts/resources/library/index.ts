import type { INodeProperties } from 'n8n-workflow';

export const libraryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					]
				}
			},
			"options": [
				{
					"name": "Get Library",
					"value": "Get Library",
					"action": "Retrieve the entire library",
					"description": "Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:\n\n<https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel=\"next\"\n\nwhere limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any \"next\" value, all items have been sent to the client.\n\nNote: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not \"next\" (there will never be more than one \"next\" though). See more at:\n\n    IETF: https://tools.ietf.org/html/rfc5988\n    GitHub: https://developer.github.com/guides/traversing-with-pagination/\n\nIf eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/library"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/library",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Library"
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
						"Library"
					],
					"operation": [
						"Get Library"
					]
				}
			}
		},
		{
			"displayName": "Event Log Uuid",
			"name": "eventLogUuid",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "eventLogUuid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Library"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 500,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Library"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Library"
					]
				}
			}
		},
		{
			"displayName": "All",
			"name": "all",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "all",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Library"
					]
				}
			}
		},
];
