/**
 *  Made by kalme-egg
 *  version: 0.2.0
 * 
 *  CC-BY 4.0
 *  https://creativecommons.org/licenses/by/4.0/
 * 
 *  You should read "readme.md" before you use this module.
 * 
 */

export {Arrayshift, Array2d}

class Arrayshift extends Array {

	constructor() {
		let returning = super(1)
		if (arguments.length == 1) {
			if (typeof(arguments[0]) == "number" && arguments[0] >= 0 && arguments[0] <= Math.pow(2,32)-2) {
				returning = new Array(arguments[0] + 1)
			} else if (typeof(arguments[0]) == "number" && arguments[0] >= Math.pow(2,32)-2) {
				throw new RangeError("Arrayshift length limit is 2^32-2.");
			} else {
				returning.push(...arguments)
			}
		} else {
			returning.push(...arguments)
		}	
		return returning
	}

	toString() {
		const copy = new Array(this.destruct)
		console.debug(copy)
		copy.splice(0,1)
		console.debug(copy)
		return copy.join(",")
	}

	set 0(value) {
		throw new TypeError("Arrayshift[0] can't be set.")
		
	}

	shiftLength(number = undefined) {
		if (typeof number != "number") {
			return this.length - 1
		} else {
			return (this.length = (number + 1)) -1
		}
	}

	destruct() {
		const returning = []
		for (let i = 1; i < this.length; i++) {
			returning.push(this[i])
		}
		return returning
	}

	shift() {
		const returning = this[1]
		this.forEach((value,index,array)=>{
			if (index != 0)	array[index] = array[index+1]
		})
		if (this.shiftLength() > 0) this.length -= 1;
		return returning
	}


}


class Array2d {
	constructor(){
		switch (arguments.length) {
			case 0:
				this.length = 1
				this.depth = 1
				break
			case 1:
				if (typeof arguments[0] == "number") {
					return new Array2d(arguments[0],arguments[0])
				}
			case 2:
				if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
					for (let i = 0; i < arguments[0]; i++) {
						for (let j = 0; j < arguments[1]; j++) {
							this[`${i},${j}`] = undefined
						}
					}
					this.length = arguments[0]
					this.depth = arguments[1]
					break
				}
			default:
				for (let i = 0; i < arguments.length; i++) {
					this[`${i},0`] = arguments[i]
				}
		}
		
	}

	#_length
	#_depth

	get length(){
		return this.#_length
	}

	set length(value){
		if (this.#_length < value) {
			for (let i = this.#_length; i < value; i++) {
				for (let j = 0; j < this.#_depth; j++){
					this[`${i},${j}`] = undefined
				}
			}
		} else if (this.#_length > value) {
			for (let i = this.#_length -1; i > value; i--) {
				for (let j = 0; j < this.#_depth; j++){
					delete this[`${i},${j}`]
				}
			}
		}
		this.#_length = value
	}

	
	get depth(){
		return this.#_depth
	}

	set depth(value){
		if (this.#_depth < value) {
			for (let i = 0; i < this.#_length; i++) {
				for (let j = this.#_depth; j < value; j++){
					this[`${i},${j}`] = undefined
				}
			}
		}
		this.#_depth = value
	}

}