import {DIFERENTS_FIELDS, EQUAL_FIELDS} from '../constants/constants.user.js'

export const comparationFields = (fields) =>{

    if(fields[0] != fields[1]){
        return {
            result: DIFERENTS_FIELDS
        }
    }
    else{
        return {
            result: EQUAL_FIELDS
        }
    }
}
