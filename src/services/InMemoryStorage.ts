import { Storable } from '../interfaces/Storable';


export class InMemoryStorage implements Storable {
    
    private dataCart: { [key: string]: any } = {};
    
    save(key: string, cart: any): void {
        this.dataCart[key] = cart;
    }

    get(key: string): any {
        return this.dataCart[key];
    }
}

export class LocalStorage implements Storable {
    
    save(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get(key: string): any {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;        
    }
}