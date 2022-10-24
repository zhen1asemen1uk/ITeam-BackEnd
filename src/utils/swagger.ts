// import fs from 'fs';
// import { SwaggerOptions } from 'swagger-ui-express';

// class Swager {
// 	public template: SwaggerOptions;

// 	constructor() {
// 		this.template = {
// 			swagger: '2.0',
// 			info: {
// 				version: '1.0.0',
// 				title: 'My API',
// 				description:
// 					'Documentation automatically generated by the <b>swagger-autogen</b> module.',
// 			},
// 			host: 'localhost:3000',
// 			basePath: '/',
// 			tags: [
// 				{
// 					name: 'User',
// 					description: 'Endpoints',
// 				},
// 			],
// 			schemes: ['http', 'https'],
// 			consumes: ['application/json'],
// 			produces: ['application/json'],
// 			paths: {},
// 		};
// 	}

// 	async init() {
// 		fs.writeFile(
// 			__dirname + '/swagger.json',
// 			JSON.stringify(this.template),
// 			(e) => {
// 				e && console.error(e);
// 			}
// 		);
// 	}

// 	addEndpoint(path: string, endpointConfig: {}) {
// 		this.template.paths[path] = endpointConfig;
// 	}
// }
