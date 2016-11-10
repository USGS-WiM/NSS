export interface IResource {
    name: string;
    description: string;
    methods: Array<IResourceMethod>;
}
export interface IResourceMethod {
    type: string;
    uriList: Array<IURI>
}
export interface IURI {
    uri: string;
    name: string;
    description: string;
    id: number;
    parameters: Array<IURIParameter>;
    availableMedia: Array<string>;
    selectedMedia: string;
}
export interface IURIParameter {
    name: string;
    type: string;
    optional: boolean;
    description: string;
    value: any;
}