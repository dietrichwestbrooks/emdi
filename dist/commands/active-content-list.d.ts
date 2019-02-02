import { EmdiResponses, EmdiClasses, EmdiResponse } from './emdi-command';
export declare class ActiveContentListResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    contentList: {
        contentId: number;
        displayId: number;
    }[];
    constructor(data: any);
}
