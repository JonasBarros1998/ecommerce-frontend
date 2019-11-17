class Headers{

    constructor(){
        this.headers = new Headers()
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
        return header
    }

    headersDefault(){
       return this.headers["Content-Type"] = "application/json"
    }
}

export default Headers