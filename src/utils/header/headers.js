export const HttpHeaders = {

    headersForRequest: token => {

        const headers = new Headers()
        headers["Content-Type"] = "application/json"
        headers.Authorization = `Bearer ${token}`

        return headers
    },

    headersForGearToken: () =>{

        const defineHeader = {
            "Content-Type":"application/x-www-form-urlencoded"
        }
        return defineHeader
    },

    defaultHeaders: () =>{
        return {"Content-Type": "application/json"}
    }
}