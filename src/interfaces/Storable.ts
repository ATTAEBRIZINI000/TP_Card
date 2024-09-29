export interface Storable {
    save(key: string, data: any): void;
    get(key: string): any;
}