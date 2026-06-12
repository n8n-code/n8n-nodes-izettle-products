import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IzettleProductsApi implements ICredentialType {
        name = 'N8nDevIzettleProductsApi';

        displayName = 'Izettle Products API';

        icon: Icon = { light: 'file:../nodes/IzettleProducts/izettle-products.png', dark: 'file:../nodes/IzettleProducts/izettle-products.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://products.izettle.com',
                        required: true,
                        placeholder: 'https://products.izettle.com',
                        description: 'The base URL of your Izettle Products API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
