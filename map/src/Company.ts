import { faker } from '@faker-js/faker';

class Company{
    name: string;
    catchprase: string;
    location:{
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.company.name();
        this.catchprase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        }
    }
    markerInfo():string {
        return `the name of the comapny is ${this.name}`
    }
}

export {Company}; 