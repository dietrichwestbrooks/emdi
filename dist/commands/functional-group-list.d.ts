import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class FunctionalGroupListResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    groups: {
        name: string;
        commands: {
            name: string;
        }[];
    }[];
    constructor(data: any);
}
