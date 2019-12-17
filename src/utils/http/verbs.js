export const verb = {

    get: (url, header) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: new Headers(header)
            }).then(response => {
                response.clone().json()
                    .then(respJson => {
                        resolve(respJson)
                    })
            }).catch(error => reject(error))
        })
    },
    
    post: (url, headers, datas) => {
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                headers: new Headers(headers),
                body: JSON.stringify(datas)
            })
                .then(response => {
                    response.clone().json()
                        .then(respJson => resolve(respJson))

                }).catch(error => reject(error));
        })
    },

    put: () => {
        throw new Error("Ainda não implementado")
    }
}
