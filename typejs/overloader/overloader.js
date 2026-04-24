/**
 *  Made by kalme-egg
 *  version: 1.0.0
 * 
 *  CC-BY 4.0
 *  https://creativecommons.org/licenses/by/4.0/
 * 
 *  You should read "readme.md" before you use this module.
 * 
 * Ref:https://qiita.com/ciffelia/items/b3d17153023fa0f2e469
 * 
 */

/**
 * const function = overLoader([{args:string,func:Function}])
 * 
 */

import {typeDetail} from "../type/typeDetail"

function overLoader(overLoadDefinitions) {
	const thisArgsT = typeDetail(overLoadDefinitions)
	if (thisArgsT.type !== "Array" && thisArgsT.detail?.type !== "object") {
		throw TypeError("argument[0] must be Array[object]")
	}

	return (...args) => {
		const argTypesStrict = args.map(a=>{return typeDetail(a).valueOf()})
		const argTypesAbout = args.map(a=>{return typeDetail(a).type})

		for(const funcSet of overLoadDefinitions) {
    		const definitionArgTypes = funcSet.args.split(',').map(type => type.trim());
			if(argTypesStrict.toString() == definitionArgTypes.toString()) {
    			return funcSet.func(...args);
    		}
    	}

		for(const funcSet of overLoadDefinitions) {
    		const definitionArgTypes = funcSet.args.split(',').map(type => type.trim());
			if(argTypesAbout.toString() == definitionArgTypes.toString()) {
    			return funcSet.func(...args);
    		}
    	}

		let matchArgs = {}
		for(let i=0; i<overLoadDefinitions.length; i++) {
			const funcSet = overLoadDefinitions[i]
    		const definitionArgTypes = funcSet.args.split(',').map(type => type.trim());
			if(argTypesStrict.toString().startsWith(definitionArgTypes.toString())) {
				matchArgs[definitionArgTypes.toString().length] = i
    		}
    	}
		if(Object.keys(matchArgs).length > 0){
			return overLoadDefinitions[Object.keys(matchArgs).toSorted((a,b)=>b-a)[0]].func(...args)
		}

		matchArgs = {}
		for(let i=0; i<overLoadDefinitions.length; i++) {
			const funcSet = overLoadDefinitions[i]
    		const definitionArgTypes = funcSet.args.split(',').map(type => type.trim());
			if(definitionArgTypes.toString().startsWith(argTypesStrict.toString())) {
				matchArgs[argTypesStrict.toString().length] = i
    		}
    	}
		if(Object.keys(matchArgs).length > 0){
			return overLoadDefinitions[Object.keys(matchArgs).toSorted((a,b)=>b-a)[0]].func(...args)
		}

		matchArgs = {}
		for(let i=0; i<overLoadDefinitions.length; i++) {
			const funcSet = overLoadDefinitions[i]
    		const definitionArgTypes = funcSet.args.split(',').map(type => type.trim());
			if(argTypesAbout.toString().startsWith(definitionArgTypes.toString())) {
				matchArgs[definitionArgTypes.toString().length] = i
    		}
    	}
		if(Object.keys(matchArgs).length > 0){
			return overLoadDefinitions[Object.keys(matchArgs).toSorted((a,b)=>b-a)[0]].func(...args)
		}

		matchArgs = {}
		for(let i=0; i<overLoadDefinitions.length; i++) {
			const funcSet = overLoadDefinitions[i]
    		const definitionArgTypes = funcSet.args.split(',').map(type => type.trim());
			if(definitionArgTypes.toString().startsWith(argTypesAbout.toString())) {
				matchArgs[argTypesAbout.toString().length] = i
    		}
    	}
		if(Object.keys(matchArgs).length > 0){
			return overLoadDefinitions[Object.keys(matchArgs).toSorted((a,b)=>b-a)[0]].func(...args)
		}

		throw TypeError("argument aren't match.")
	}
}