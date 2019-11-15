class Http {

    get(){
        throw new Error("Ainda não implementado")
    }

    post(url, headers, datas) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                headers: new Headers(headers),
                body: JSON.stringify(datas)
            })
                .then(response => {
                    response.clone().json()

                        .then(respJson => resolve(respJson))

                }).catch(error => {
                    reject(error)
                    throw new Error(`HELP ${error}`)
                });
        })
    }

    put(){
        throw new Error("Ainda não implementado")
    }

}

export default Http