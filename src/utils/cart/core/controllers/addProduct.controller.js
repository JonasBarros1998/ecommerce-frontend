
export const saveProduct = () =>{

    caches.open('cart')
    .then(cache => {
        cache.add()
    })
}