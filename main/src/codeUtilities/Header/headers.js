class Headers{

    constructor(){

    }

    define(token){

        this.headers["Content-Type"] = "application/json"
        this.headers.Authorization = `Bearer ${token}`

        return this.headers
    }

    headersForGearToken(){

        const defineHeader = {
            "Content-Type":"application/x-www-form-urlencoded",
            "grant_type":"password"
        }

        const header  =Object.freeze(defineHeader)
        console.log(header)
        return header
    }
}

export default Headers