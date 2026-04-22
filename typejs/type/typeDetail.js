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
    }
    var type = typeof x, c = x.constructor;
    if (type === 'number') {
        if (isNaN(x)) return 'NaN';
        if (!isFinite(x))
            return x === Infinity ? 'Infinity' : '-Infinity';
    }
    if (type === 'object') {
        return c && c.name ? c.name :
            Object.prototype.toString.call(x).slice(8, -1);
    }
    return type;
}

