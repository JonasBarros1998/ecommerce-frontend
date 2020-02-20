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

    /**
 * @param url Url no qual que servir para fazer a requisição,
 * @param headers Um objeto javaScript, com todos os headers que deseja ser enviados. 
 * @param datas Um objeto javaScript, com todos os dados solicitados.
 */
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


    /**
     * @param url Url no qual que servir para fazer a requisição,
     * @param headers Um objeto javaScript, com todos os headers que deseja ser enviados. 
     * @param datas Um objeto javaScript, com todos os dados solicitados.
     */
    put: (url, headers, datas) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: new Headers(headers),
                body: JSON.stringify(datas)
            })
                .then(response => {
                    response.clone().json()
                        .then(respJson => resolve(respJson))
                }).catch(error => reject(error))
        })
    }
}
