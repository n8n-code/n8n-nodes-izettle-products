import type { INodeProperties } from 'n8n-workflow';

export const discountsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					]
				}
			},
			"options": [
				{
					"name": "Get All Discounts",
					"value": "Get All Discounts",
					"action": "Retrieve all discounts",
					"description": "Retrieve all discounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/discounts"
						}
					}
				},
				{
					"name": "Create Discount",
					"value": "Create Discount",
					"action": "Create a discount",
					"description": "Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/discounts"
						}
					}
				},
				{
					"name": "Delete Discount",
					"value": "Delete Discount",
					"action": "Delete a single discount ",
					"description": "Delete a single discount ",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/discounts/{{$parameter[\"discountUuid\"]}}"
						}
					}
				},
				{
					"name": "Get Discount",
					"value": "Get Discount",
					"action": "Retrieve a single discount",
					"description": "Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/discounts/{{$parameter[\"discountUuid\"]}}"
						}
					}
				},
				{
					"name": "Update Discount",
					"value": "Update Discount",
					"action": "Update a single discount",
					"description": "Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/discounts/{{$parameter[\"discountUuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/discounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Get All Discounts"
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
						"Discounts"
					],
					"operation": [
						"Get All Discounts"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationUuid}/discounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Create Discount"
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
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
			"displayName": "External Reference",
			"name": "externalReference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "externalReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
			"displayName": "Image Lookup Keys",
			"name": "imageLookupKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "imageLookupKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
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
						"Discounts"
					],
					"operation": [
						"Create Discount"
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
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Create Discount"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationUuid}/discounts/{discountUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Delete Discount"
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
						"Discounts"
					],
					"operation": [
						"Delete Discount"
					]
				}
			}
		},
		{
			"displayName": "Discount Uuid",
			"name": "discountUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Delete Discount"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/discounts/{discountUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Get Discount"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Get Discount"
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
						"Discounts"
					],
					"operation": [
						"Get Discount"
					]
				}
			}
		},
		{
			"displayName": "Discount Uuid",
			"name": "discountUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Get Discount"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationUuid}/discounts/{discountUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
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
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"displayName": "Discount Uuid",
			"name": "discountUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"displayName": "External Reference",
			"name": "externalReference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "externalReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"displayName": "Image Lookup Keys",
			"name": "imageLookupKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "imageLookupKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
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
						"Discounts"
					],
					"operation": [
						"Update Discount"
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
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Discounts"
					],
					"operation": [
						"Update Discount"
					]
				}
			}
		},
];
