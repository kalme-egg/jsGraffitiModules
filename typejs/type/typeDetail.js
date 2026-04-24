/**
 *  Made by kalme-egg
 *  version: 0.2.0
 * 
 *  CC-BY 4.0
 *  https://creativecommons.org/licenses/by/4.0/
 * 
 *  You should read "readme.md" before you use this module.
 * 
 * Ref:https://qiita.com/Hiraku/items/87e5d1cdaaa475c80cc2
 * 
 */


function typeDetail(x) {
    let type = "unknown";
    let detail = "unknown";
    if (x == null) {
        type = "null";
        if (x === null) detail = "null";
        else detail = "undefined"
        return new typeDetailData(type,detail)
    }
    let type_j = typeof x, c = x.constructor;
    if (type_j === 'number') {
        type = "number"
        if (isNaN(x)) detail = "NaN";
        else if (!isFinite(x))
            detail = ( x === Infinity ? "Infinity" : "-Infinity")
        else detail = "pure_number"
    }
    if (type_j === "bigint") {
        type = "bigint"
        detail = "bigint"
    }
    if (type_j === "boolean") {
        type = "boolean"
        detail = "boolean"
    }
    if (type_j === "string") {
        type = "string"
        detail = "string"
    }
    if (type_j === "function") {
        type = "function"
        detail =  c && c.name ? c.name :
            Object.prototype.toString.call(x).slice(8, -1);
    }
    if (type_j === "symbol") {
        type = "symbol"
        detail = "symbol"
    }
    if (type_j === 'object') {
        type = "object"
        detail =  c && c.name ? c.name :
            Object.prototype.toString.call(x).slice(8, -1);
        if(detail === "Array"){
            type = "Array"
            if (x.length == 0) detail = "none"
            else {subTypes = x.map(element => {
                return typeDetail(element)
            })
            if(new Set(subTypes.map(element=>element.detail)).size == 1) detail = subTypes[0]
            else detail = "any"
            }
        }
    }
        return new typeDetailData(type,detail)
}

class typeDetailData {
    constructor(type,detail){
        this.type = type
        this.detail = detail
    }
    valueOf(){
        if (this.type !== "Array") {
            return this.detail
        } else {
            return `Array[${this.detail.valueOf()}]`
        }
    }
}