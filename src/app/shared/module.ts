export interface Place {
    lat: number;
    lon: number;
    name: string;
    description: string;
    website: string;
    fb: string;
    google_map: string;
    vegan_level: number;
}

export interface City {
    id: number;
    name: string;
}