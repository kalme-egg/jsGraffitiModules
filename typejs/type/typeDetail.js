/**
 *  Made by kalme-egg
 *  version: 0.1.0
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
        return {type:type, detail:detail}
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
    }
        return {type:type, detail:detail}
}

