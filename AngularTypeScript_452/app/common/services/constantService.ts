
module app.common.services {

    interface IConstant {
        apiPostURI: string;
    }

    export class ConstantService implements IConstant {
        apiPostURI: string;

        constructor() {
            this.apiPostURI = '/api/posts/';
        }
    }


    ng.module('blog')
        .service('constantService', ConstantService);

}