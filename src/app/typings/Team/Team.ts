export interface TeamCard {
    urlImage: string;
    name: string;
    description: string;
}

export interface ResponseAPIGet {
    type: string;
    name: string;
    description?: string;
    flickr_images?: Array<string>;
    image?: string;
    link?: string;
    wikipedia?: string;
}