import React, {Component} from 'react'

class QuerySet{

    constructor(headers){
        this.typeHeaders = headers;
        this.resp = {}
    }

    _requisitionFetch(url, methodType, datas){
        fetch(url, {
            method: methodType,
            headers: this.typeHeaders,
        })
        .then(response =>{
            response.json()

        }).then(respFormatJson =>{
            return respFormatJson
        }).catch(error =>{
            throw new Error(`HELP ${error}`)
        })
    }

    getQuerySet(url, methodType, datas){

        this.resp = this._requisitionFetch(url, methodType)
        return this.resp;
    }



    static countItens(){
        return null
    }
}

export default QuerySet
