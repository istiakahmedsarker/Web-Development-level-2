{
    // nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log(`Searching for ${value} in the database...`)
        } else {
            console.log("Please provide a name to search")
        }

    }
    searchName("istiak")

    // unknown
    const getSpeedInMeterPerSercond = (value: unknown) => {
        if (typeof value === 'number') {
            const speed = value * 1000 / 3600;
            console.log(`Speed is ${speed} m/s`)
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`Speed is ${convertedSpeed} m/s`)
        }else{
            console.log("Invalid speed value")
        }
    }
    getSpeedInMeterPerSercond(10)



    // never 

    const throwError = (msg:string )=>{
        throw new Error(msg);
    }
    throwError("This is a critical error");
}
