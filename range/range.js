/**
 *  Made by kalme-egg
 *  version: 0.1.0
 * 
 *  CC-BY 4.0
 *  https://creativecommons.org/licenses/by/4.0/
 * 
 *  You should read "readme.md" before you use this module.
 * 
 */

//export {number_range}

class number_range {
	#min
	#max

	constructor(min,max,mode){
		switch (typeof min) {
			case "string":
				if(max){
					console.warn(new TypeError("argument[1] is ignored if argument[0] is string."))
				}
				const pattern = min.match(/(\d*)\.\.(\d*)/)
				if(pattern === null){
					throw new TypeError("argument[0] can't be parsed for range.")
				}
				if(pattern[1] === ""){
					pattern[1] = "NaN"
				}
				if(pattern[2] === ""){
					pattern[2] = "NaN"
				}
				this.min = Number(pattern[1])
				this.max = Number(pattern[2])
				break;

			case "object":
				if(max){
					console.warn(new TypeError("argument[1] is ignored if argument[0] is object."))
				}
				this.min = Number(min.min)
				this.max = Number(min.max)
				break;
		
			default:
				this.max = max
				this.min = min
				break;
		}
		switch(typeof mode){

		}
	}

	get min(){
		return this.#min
	}
	
	get max(){
		return this.#max
	}

	set min(number){
		if(number == null || isNaN(number)) {
			this.#min = Number.NEGATIVE_INFINITY
		} else {
			this.#min = number
		}
	}
	
	set max(number){
		if(number == null || isNaN(number)) {
			this.#max = Number.POSITIVE_INFINITY
		} else {
			this.#max = number
		}
	}

}
