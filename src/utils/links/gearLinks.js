import {env} from '../../env'

export const links = (backetName, listingFileName) => {

    const amazonDomain = env.amazon['domain']
    const amazonRegion = env.amazon['region']
    const newListingUrls = []
    
    listingFileName.keys.map((nameFileItem) => {
        const modifieldFileName = formatingFileName(nameFileItem)
        const formatedLinks = `https://${backetName}.${amazonRegion}.${amazonDomain}/${modifieldFileName}`
        return newListingUrls.push(formatedLinks)
    })
    return newListingUrls 
}

const formatingFileName = (fileName) => {
    return fileName.replace(/ /gi, "+")
}