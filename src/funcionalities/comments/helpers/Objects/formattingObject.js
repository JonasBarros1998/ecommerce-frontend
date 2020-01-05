export const formatting = (datas, userId = {}) => {
    
    return Object.assign({}, datas, {
        user_id: userId,
        comments: datas.comments,
        product:datas.product,
    })
}
