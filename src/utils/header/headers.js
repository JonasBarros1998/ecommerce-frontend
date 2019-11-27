class Headers{

    define(token){

        this.headers = new Headers()

        this.headers["Content-Type"] = "application/json"
        this.headers.Authorization = `Bearer ${token}`

        return this.headers
    }

    headersForGearToken(){

        const defineHeader = {
            "Content-Type":"application/x-www-form-urlencoded"
        }

        const header  =Object.freeze(defineHeader)
        return header
    }

    headersDefault(){
       return this.headers["Content-Type"] = "application/json"
    }
}

export default Headers