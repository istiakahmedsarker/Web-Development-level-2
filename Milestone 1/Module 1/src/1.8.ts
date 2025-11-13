// destruccturig

const user = {
    id: 345,
    name: {
        firstName: "Istiak",
        middleName: "Sarker",
        lastName: "Ahmed"
    },
    contactNo: 19171560071,
    address: "Uganda"
}

const {
    contactNo, 
    name: { middleName }
} = user;


// array destructing
const myFrineds = ['cnadler','joy','ross','boss','pagla']

const[,,bestFriend,...rest] = myFrineds