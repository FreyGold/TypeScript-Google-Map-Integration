import { faker } from '@faker-js/faker';

class User{
     name: string;
     location:{
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.person.fullName({sex: 'male'});
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        }
    }
    markerInfo():string {
        return `the name of the user is ${this.name}`
    }
}

export {User}; 