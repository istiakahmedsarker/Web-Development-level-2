{
    // type alias
    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }
    const student1: Student = {
        name: "IStiak",
        age: 50,
        gender: "Mae",
        contactNo: "013248",
        address: "ntr"
    }

    const student2: Student = {
        name: "mir",
        age: 40,
        gender: "Mae",
        address: "ntr"
    }

    type UserName = string

    const userName: UserName = "Istiak"
    type IsAdmin = boolean
    const isAdmin: IsAdmin = true

    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2
}