{
    // union types

    // type FrontEndDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

    // const newDeveloper: FrontEndDeveloper = 'fakibazDeveloper'

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'Male' | 'Female'
    //     bloodGroup: "O+" | "A+" | "B+"
    // }

    // const user1: User = {
    //     name: 'istiak',
    //     email: "string",
    //     gender: 'Male',
    //     bloodGroup: "O+",
    // }

    type FrondendDeveloper = {
        skills:string[];
        designation1: "Frontend developer";
    }
    type BackendDeveloper = {
        skills:string[];
        designation2: "backend developer";
    }

    type FullstackDevloper = FrondendDeveloper & BackendDeveloper

    const fullstackdeveloper : FullstackDevloper = {
        skills:['hmtl','css','express'],
        designation1:"Frontend developer",
        designation2: "backend developer"
    }
}