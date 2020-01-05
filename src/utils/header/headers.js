export const HttpHeaders = {

    headersBearer: token => {

        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        return header
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