/**
 *  Made by kalme-egg
 *  version: 0.8.0
 * 
 *  CC-BY 4.0
 *  https://creativecommons.org/licenses/by/4.0/
 * 
 *  You should read "readme.md" before you use this module.
 * 
 */

export {degree,radian,grade}

class degree {
	constructor(number) {
		this.value = degree.#fix360(number)
	}

	static #fix360(number) {
		if (number > 0) {
			return number % 360
		} else {
			return (360 - (-1 * number) % 360) % 360
		}
	}

	static #fix180(number) {
		const fixednumber = degree.#fix360(number)
		if (fixednumber <= 180) return fixednumber
		return -1 * (360 - fixednumber)
	}

	get degree() {
		return this.value
	}

	get degreefixed() {
		return degree.#fix180(this.value)
	}

	get radian() {
		return this.value / (180 / Math.PI)
	}

	cradian() {
		return new radian(this.radian)
	}

	get grade() {
		return this.value / (360 / 400)
	}

	cgrade() {
		return new grade(this.grade)
	}

	sin() {
		return Math.sin(this.radian)
	}

	cos() {
		return Math.cos(this.radian)
	}

	tan() {
		return Math.tan(this.radian)
	}

	static sin(degree) {
		return Math.sin(degree.radian || degree / (180 / Math.PI))
	}

	static cos(degree) {
		return Math.cos(degree.radian || degree / (180 / Math.PI))
	}

	static tan(degree) {
		return Math.tan(degree.radian || degree / (180 / Math.PI))
	}

	static asin(sin) {
		return Math.asin(sin) * (180 / Math.PI)
	}

	static acos(cos) {
		return Math.acos(cos) * (180 / Math.PI)
	}

	static atan(tan) {
		return Math.atan(tan) * (180 / Math.PI)
	}

	add(number) {
		this.value = degree.#fix360(this.value + number)
		return this.value
	}

	adddegree(adddegree) {
		this.value = degree.#fix360(this.value + adddegree.value)
		return this.value
	}

	destruct() {
		return {
			value: this.value
		}
	}

	destructfixed() {
		return {
			value: degree.#fix180(this.value)
		}
	}

}

class radian {

	constructor(number) {
		this.value = radian.#fixabs(number)
	}

	static #fixabs(number) {
		if (number > 0) {
			return number % (2*Math.PI)
		} else {
			return (2*Math.PI - (-1 * number) % 2*Math.PI) % 2*Math.PI
		}
	}

	static #fixreg(number) {
		const fixednumber = radian.#fixabs(number)
		if (fixednumber <= Math.PI) return fixednumber
		return -1 * (2*Math.PI - fixednumber)
	}

	get radian() {
		return this.value
	}

	get radianfixed() {
		return radian.#fixreg(this.value)
	}

	get degree() {
		return this.value * (180 / Math.PI)
	}

	cdegree() {
		return new degree(this.degree)
	}

	get grade() {
		return this.value / (Math.PI / 200)
	}

	cgrade() {
		return new grade(this.grade)
	}

	sin() {
		return Math.sin(this.radian)
	}

	cos() {
		return Math.cos(this.radian)
	}

	tan() {
		return Math.tan(this.radian)
	}

	get coefficient() {
		return this.value / Math.PI
	}

	static sin(radian) {
		return Math.sin(radian.radian || radian)
	}

	static cos(radian) {
		return Math.cos(radian.radian || radian)
	}

	static tan(radian) {
		return Math.tan(radian.radian || radian)
	}

	static asin(sin) {
		return Math.asin(sin)
	}

	static acos(cos) {
		return Math.acos(cos)
	}

	static atan(tan) {
		return Math.atan(tan)
	}

	add(number) {
		this.value = radian.#fixabs(this.value + number)
		return this.value
	}

	addradian(addradian) {
		this.value = radian.#fixabs(this.value + addradian.value)
		return this.value
	}

	destruct() {
		return {
			value: this.value
		}
	}

	destructfixed() {
		return {
			value: radian.#fixreg(this.value)
		}
	}

	static acoefficient(number) {
		return new radian(number * Math.PI)
	}

}

class grade {
	constructor(number) {
		this.value = grade.#fix400(number)
	}

	static #fix400(number) {
		if (number > 0) {
			return number % 400
		} else {
			return (400 - (-1 * number) % 400) % 400
		}
	}

	static #fix200(number) {
		const fixednumber = grade.#fix400(number)
		if (fixednumber <= 200) return fixednumber
		return -1 * (360 - fixednumber)
	}

	get grade() {
		return this.value
	}

	get gradefixed() {
		return grade.#fix200(this.value)
	}

	get degree() {
		return this.value * (360 / 400)
	}

	cdegree() {
		return new degree(this.degree)
	}

	get radian() {
		return this.value / (200 / Math.PI)
	}

	cradian() {
		return new radian(this.radian)
	}

	sin() {
		return Math.sin(this.radian)
	}

	cos() {
		return Math.cos(this.radian)
	}

	tan() {
		return Math.tan(this.radian)
	}

	static sin(grade) {
		return Math.sin(grade.radian || grade / (200 / Math.PI))
	}

	static cos(grade) {
		return Math.cos(grade.radian || grade / (200 / Math.PI))
	}

	static tan(grade) {
		return Math.tan(grade.radian || grade / (200 / Math.PI))
	}

	static asin(sin) {
		return Math.asin(sin) * (200 / Math.PI)
	}

	static acos(cos) {
		return Math.acos(cos) * (200 / Math.PI)
	}

	static atan(tan) {
		return Math.atan(tan) * (200 / Math.PI)
	}

	add(number) {
		this.value = grade.#fix400(this.value + number)
		return this.value
	}

	addgrade(addgrade) {
		this.value = grade.#fix400(this.value + addgrade.value)
		return this.value
	}

	destruct() {
		return {
			value: this.value
		}
	}

	destructfixed() {
		return {
			value: grade.#fix200(this.value)
		}
	}

}