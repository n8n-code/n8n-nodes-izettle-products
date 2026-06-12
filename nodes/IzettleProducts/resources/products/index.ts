import type { INodeProperties } from 'n8n-workflow';

export const productsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					]
				}
			},
			"options": [
				{
					"name": "Delete Products",
					"value": "Delete Products",
					"action": "Delete a list of products",
					"description": "Delete a list of products",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products"
						}
					}
				},
				{
					"name": "Get All Products In Pos",
					"value": "Get All Products In Pos",
					"action": "Retrieve all products visible in POS",
					"description": "Retrieve all products visible in POS",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products"
						}
					}
				},
				{
					"name": "Create Product",
					"value": "Create Product",
					"action": "Create a new product",
					"description": "Create a new product",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products"
						}
					}
				},
				{
					"name": "Get All Options",
					"value": "Get All Options",
					"action": "Retrieve an aggregate of active Options in the library",
					"description": "Retrieve an aggregate of active Options in the library",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/options"
						}
					}
				},
				{
					"name": "Get All Products v2",
					"value": "Get All Products v2",
					"action": "Retrieve all products visible in POS – v2",
					"description": "Retrieve all products visible in POS – v2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/v2"
						}
					}
				},
				{
					"name": "Count All Products",
					"value": "Count All Products",
					"action": "Retrieve the count of existing products",
					"description": "Retrieve the count of existing products",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/v2/count"
						}
					}
				},
				{
					"name": "Update Product",
					"value": "Update Product",
					"action": "Update a single product",
					"description": "Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/v2/{{$parameter[\"productUuid\"]}}"
						}
					}
				},
				{
					"name": "Delete Product",
					"value": "Delete Product",
					"action": "Delete a single product",
					"description": "Delete a single product",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/{{$parameter[\"productUuid\"]}}"
						}
					}
				},
				{
					"name": "Get Product",
					"value": "Get Product",
					"action": "Retrieve a single product",
					"description": "Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationUuid\"]}}/products/{{$parameter[\"productUuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /organizations/{organizationUuid}/products",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Delete Products"
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
						"Products"
					],
					"operation": [
						"Delete Products"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"required": true,
			"description": "List of product UUIDs to be deleted",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "uuid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Delete Products"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/products",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get All Products In Pos"
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
						"Products"
					],
					"operation": [
						"Get All Products In Pos"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationUuid}/products",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
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
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Return Entity",
			"name": "returnEntity",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnEntity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Create With Default Tax",
			"name": "createWithDefaultTax",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "createWithDefaultTax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
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
						"Products"
					],
					"operation": [
						"Create Product"
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
						"Products"
					],
					"operation": [
						"Create Product"
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
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{\n  \"source\": {}\n}",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
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
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Online",
			"name": "online",
			"type": "json",
			"default": "{\n  \"presentation\": {\n    \"additionalImageUrls\": [\n      null\n    ],\n    \"mediaUrls\": [\n      null\n    ]\n  },\n  \"seo\": {},\n  \"shipping\": {\n    \"weight\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "online",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Presentation",
			"name": "presentation",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "presentation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Tax Code",
			"name": "taxCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "taxCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Tax Exempt",
			"name": "taxExempt",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "taxExempt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Tax Rates",
			"name": "taxRates",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Unit Name",
			"name": "unitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "unitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
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
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Variant Option Definitions",
			"name": "variantOptionDefinitions",
			"type": "json",
			"default": "{\n  \"definitions\": [\n    {\n      \"properties\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "variantOptionDefinitions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Variants",
			"name": "variants",
			"type": "json",
			"default": "[\n  {\n    \"costPrice\": {},\n    \"options\": [\n      {}\n    ],\n    \"presentation\": {},\n    \"price\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "variants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "Vat Percentage",
			"name": "vatPercentage",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vatPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Create Product"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/products/options",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get All Options"
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
						"Products"
					],
					"operation": [
						"Get All Options"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/products/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get All Products v2"
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
						"Products"
					],
					"operation": [
						"Get All Products v2"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "If true, sorts response by created date",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get All Products v2"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/products/v2/count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Count All Products"
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
						"Products"
					],
					"operation": [
						"Count All Products"
					]
				}
			}
		},
		{
			"displayName": "PUT /organizations/{organizationUuid}/products/v2/{productUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Product Uuid",
			"name": "productUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{\n  \"source\": {}\n}",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Online",
			"name": "online",
			"type": "json",
			"default": "{\n  \"presentation\": {\n    \"additionalImageUrls\": [\n      null\n    ],\n    \"mediaUrls\": [\n      null\n    ]\n  },\n  \"seo\": {},\n  \"shipping\": {\n    \"weight\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "online",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Presentation",
			"name": "presentation",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "presentation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Tax Code",
			"name": "taxCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "taxCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Tax Exempt",
			"name": "taxExempt",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "taxExempt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Tax Rates",
			"name": "taxRates",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Unit Name",
			"name": "unitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "unitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
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
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Variant Option Definitions",
			"name": "variantOptionDefinitions",
			"type": "json",
			"default": "{\n  \"definitions\": [\n    {\n      \"properties\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "variantOptionDefinitions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Variants",
			"name": "variants",
			"type": "json",
			"default": "[\n  {\n    \"costPrice\": {},\n    \"options\": [\n      {}\n    ],\n    \"presentation\": {},\n    \"price\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "variants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "Vat Percentage",
			"name": "vatPercentage",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vatPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Update Product"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organizations/{organizationUuid}/products/{productUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Delete Product"
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
						"Products"
					],
					"operation": [
						"Delete Product"
					]
				}
			}
		},
		{
			"displayName": "Product Uuid",
			"name": "productUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Delete Product"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationUuid}/products/{productUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get Product"
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
						"Products"
					],
					"operation": [
						"Get Product"
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
						"Products"
					],
					"operation": [
						"Get Product"
					]
				}
			}
		},
		{
			"displayName": "Product Uuid",
			"name": "productUuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Products"
					],
					"operation": [
						"Get Product"
					]
				}
			}
		},
];
