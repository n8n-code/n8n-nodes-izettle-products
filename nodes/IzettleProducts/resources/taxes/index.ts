import type { INodeProperties } from 'n8n-workflow';

export const taxesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					]
				}
			},
			"options": [
				{
					"name": "Get Tax Rates",
					"value": "Get Tax Rates",
					"action": "Get all available tax rates",
					"description": "Get all available tax rates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/taxes"
						}
					}
				},
				{
					"name": "Create Tax Rates",
					"value": "Create Tax Rates",
					"action": "Create new tax rates",
					"description": "Create new tax rates",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/taxes"
						}
					}
				},
				{
					"name": "Get Product Count For All Taxes",
					"value": "Get Product Count For All Taxes",
					"action": "Get all tax rates and a count of products associated with each",
					"description": "Get all tax rates and a count of products associated with each",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/taxes/count"
						}
					}
				},
				{
					"name": "Get Tax Settings",
					"value": "Get Tax Settings",
					"action": "Get the organization tax settings ",
					"description": "Get the organization tax settings ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/taxes/settings"
						}
					}
				},
				{
					"name": "Set Taxation Mode",
					"value": "Set Taxation Mode",
					"action": "Update the organization tax settings",
					"description": "Update the organization tax settings",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/taxes/settings"
						}
					}
				},
				{
					"name": "Delete Tax Rate",
					"value": "Delete Tax Rate",
					"action": "Delete a single tax rate",
					"description": "Delete a single tax rate",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/taxes/{{$parameter[\"taxRateUuid\"]}}"
						}
					}
				},
				{
					"name": "Get Tax Rate",
					"value": "Get Tax Rate",
					"action": "Get a single tax rate",
					"description": "Get a single tax rate",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/taxes/{{$parameter[\"taxRateUuid\"]}}"
						}
					}
				},
				{
					"name": "Update Tax Rate",
					"value": "Update Tax Rate",
					"action": "Update a single tax rate",
					"description": "Update a single tax rate",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/taxes/{{$parameter[\"taxRateUuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/taxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Get Tax Rates"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/taxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Create Tax Rates"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tax Rates",
			"name": "taxRates",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "taxRates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Create Tax Rates"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/taxes/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Get Product Count For All Taxes"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/taxes/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Get Tax Settings"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/taxes/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Set Taxation Mode"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Taxation Mode",
			"name": "taxationMode",
			"type": "options",
			"default": "EXCLUSIVE",
			"options": [
				{
					"name": "EXCLUSIVE",
					"value": "EXCLUSIVE"
				},
				{
					"name": "INCLUSIVE",
					"value": "INCLUSIVE"
				}
			],
			"routing": {
				"send": {
					"property": "taxationMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Set Taxation Mode"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/taxes/{taxRateUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Delete Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "Tax Rate Uuid",
			"name": "taxRateUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Delete Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/taxes/{taxRateUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Get Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "Tax Rate Uuid",
			"name": "taxRateUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Get Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/taxes/{taxRateUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Update Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "Tax Rate Uuid",
			"name": "taxRateUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Update Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Update Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Update Tax Rate"
					]
				}
			}
		},
		{
			"displayName": "Percentage",
			"name": "percentage",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "percentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Taxes"
					],
					"operation": [
						"Update Tax Rate"
					]
				}
			}
		},
];
