// Function 

// normal function 
function add(num1:number,num2:number ):number {
    return num1 + num2;
}

// arrow funcation
const addArrow = (num1: number,num2:number):number => num1 + num2;


// object --> funcation --> mathod 

const poorUser = {
    name: "Istiak",
    balance: 0,
    addBalance(balance:number){
        return this.balance + balance;
    }
}

const arr: number[ ] = [1,4,10]

const newArray: number[] = arr.map((e:number):number => e*e)