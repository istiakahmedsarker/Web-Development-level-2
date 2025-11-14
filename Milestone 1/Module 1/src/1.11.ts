{
    // ternary operator
    const age: number = 15;
    //   if(age>=18){
    //     console.log("adult")
    //   }else{
    //     console.log("not adult")
    //   }

    const isAdult = age >= 18 ? 'adult' : "not adult";

    // console.log(isAdult)


    // optional chaining
    type User = {
        id: number;
        name: string;
        address?: {
            street: string;
            city: string;
        }
    }

    const user: User = {
        id: 1,
        name: "John Doe",
        // address: {
        //     street: "123 Main St",
        //     city: "Anytown"
        // }
        
    }

    //nullish coaliecing
    // null/undefined ---> decision making

    const isAuthenticatedUser = null;

    const result1 = isAuthenticatedUser ?? 'guest user';

    const result2 = isAuthenticatedUser ? isAuthenticatedUser:  "Guest"
    console.log(result2)

}