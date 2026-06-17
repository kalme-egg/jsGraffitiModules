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

/*import { overLoader } from "../typejs/overloader/overLoader.mjs"*/

class Matrix {
	#_row = -1
	#_col = -1

	constructor(...args){
		this.#MatrixConstructor(...args)
	}

	#MatrixConstructor = overLoader([
		{args:"void",func:()=>{
			this.#_row = 1
			this.#_col = 1
			this.#InitMatrix()
			return
		}},
		{args:"pure_number,pure_number",func:(i,j)=>{
			this.#_row = i
			this.#_col = j
			this.#InitMatrix()
			return
		}},
		{args:"Array[Array[number]]",func:(arr1)=>{
			let maxCol = 0
			for (const arr2 of arr1) {
				if(arr2.length > maxCol)maxCol = arr2.length
			}
			for (const arr2 of arr1) {
				while(arr2.length < maxCol)arr2.push(0)
			}
			this.#_row = arr1.length
			this.#_col = maxCol
			for (let i = 0; i < this.row; i++) {
				this[i] = []
				for (let j = 0; j < this.column; j++) {
					this[i].push(arr1[i][j])
				}
			}
			return
		}},
		{args:"Array[number],Array[number]",func:(...args)=>{
			let maxCol = 0
			for (const arr2 of args) {
				if(arr2.length > maxCol)maxCol = arr2.length
			}
			for (const arr2 of args) {
				while(arr2.length < maxCol)arr2.push(0)
			}
			this.#_row = args.length
			this.#_col = maxCol
			for (let i = 0; i < this.row; i++) {
				this[i] = []
				for (let j = 0; j < this.column; j++) {
					this[i].push(args[i][j])
				}
			}
			return
		}}
	])

	#InitMatrix(){
		for (let i = 0; i < this.row; i++) {
			this[i] = []
			for (let j = 0; j < this.column; j++) {
				this[i].push(0)
			}
		}
	}
	
	get row(){
		return this.#_row
	}
	get column(){
		return this.#_col
	}

	getRow(rowNum){
		return 0 <= Math.ceil(rowNum) && Math.ceil(rowNum) < this.row ? this[Math.ceil(rowNum)] : undefined
	}

	getColumn(colNum){
		if(!(0 <= Math.ceil(colNum) && Math.ceil(colNum) < this.column))return undefined
		let col = []
		for(let i = 0; i < this.row; i++){
			col.push(this[i][Math.ceil(colNum)])
		}
		return col
	}

	getElement(rowNum,colNum){
		return 0 <= Math.ceil(rowNum) && Math.ceil(rowNum) < this.row ? this[Math.ceil(rowNum)][Math.ceil(colNum)] : undefined
	}

	eachRow(callbackFn){
		for (let i = 0; i < this.row; i++) {
			callbackFn(this.getRow(i),i,this)
		}
		return
	}
	
	eachColumn(callbackFn){
		for (let i = 0; i < this.row; i++) {
			callbackFn(this.getColumn(i),i,this)
		}
		return
	}

	eachElement(callbackFn){
		this.eachRow((row,rowIndex)=>{row.forEach((element,colIndex) => {
			callbackFn(element,rowIndex,colIndex,this)
		});})
	}

	toString = this.toStringOneLine

	toStringOneLine(){
		let text = ""
		text += "("

		this.eachRow((row)=>{text += " (" + row.toString() + ")"})
		
		text += "  )"
		return text
	}

	toStringMultiLine(){
		let text = ""
		text += "(\u000A"

		this.eachRow((row)=>{text += " (" + row.toString() + ")\u000A"})

		text += ")"
		return text
	}

	toArrayRow(){
		let ret = []
		this.eachRow((row)=>ret.push(row))
		return ret
	}
	
	toArrayColumn(){
		let ret = []
		this.eachColumn((col)=>ret.push(col))
		return ret
	}

	getType(){
		return `${this.row}*${this.column}`
	}

	getAddMatrix = overLoader([
		{args:"Matrix",func:(mat)=>{
			if(this.getType() != mat.getType())return undefined
			let newArr1 = []
			this.eachRow(row=>newArr1.push(row))
			mat.eachElement((element,ri,ci)=>{newArr1[ri][ci]+=element})
			return new Matrix(newArr1)
		}}
	])

	getMulMatrix = overLoader([
		{args:"number",func:(num)=>{
			let newArr1 = []
			this.eachRow(row=>newArr1.push(row.map(value=>value*num)))
			return new Matrix(newArr1)
		}},
		{args:"Matrix",func:(mat)=>{
			if(this.column != mat.row)return undefined
			let newArr1 = []
			for (let i = 0; i < this.row; i++){
				const row = this.getRow(i)
				let newArr2 = []
				for (let j = 0; j < mat.column; j++){
					const col = mat.getColumn(j)
					let mul = 0
					for (let k = 0; k < this.column; k++){
						mul += row[k] * col[k]
					}
					newArr2.push(mul)
				}
				newArr1.push(newArr2)
			}
			return new Matrix(newArr1)
		}}
	])

	isEqual = overLoader([
		{args:"Matrix",func:(mat)=>{
			if(this.getType()!=mat.getType())return false
			let bool = true
			this.eachElement((value,i,j)=>{if(value != mat[i][j])bool = false})
			return bool
		}}
	])

	isSquare(){ // 正方
		return this.row == this.column
	}
	
	getDiagonalComponent(){ // 対角成分
		if(!this.isSquare)return undefined
		let dig = []
		for (let i = 0; i < this.row; i++) {
			dig.push(this[i][i])
		}
		return dig
	}

	isDiagonal(){
		if(!this.isSquare)return undefined
		for (let i = 0; i < this.row; i++) {
			for (let j = 0; j < this.row; j++) {
				if(i == j)continue
				else if(this[i][j]!=0)return false
			}
		}
		return true
	}

	isSymmetric(){ // 対称
		return this.isEqual(this.getTransposed())
	}

	isCommutative(){ // 交代
		return this.getMulMatrix(-1).isEqual(this.getTransposed())
	}

	getTransposed(){ // 転置
		let newArr = []
		for(let j = 0; j < this.column; j++){
			newArr.push(this.getColumn(j))
		}
		return new Matrix(newArr)
	}

	#getSetRow = overLoader([
		{args:"number,Array[number]",func:(num,newArr)=>{
			let newArrs = []
			this.eachRow((row,i)=>{newArrs.push(i==num?newArr:row)})
			return new Matrix(newArrs)
		}}
	])
	#getSetColumn = overLoader([
		{args:"number,Array[number]",func:(num,newArr)=>{
			let newArrs = []
			this.eachColumn((col,i)=>{newArrs.push(i==num?newArr:col)})
			return new Matrix(newArrs).getTransposed()
		}}
	])

	ElementaryOperation={
		getExchangeRow: overLoader([
			{args:"number,number",func:(a,b)=>{
				if(a<0||a>this.row-1){throw RangeError("argument is invalid")}
				if(b<0||b>this.row-1){throw RangeError("argument is invalid")}
				const cache = this.getRow(a)
				return this.#getSetRow(a,this.getRow(b)).#getSetRow(b,cache)
			}}
		]),
		getExchangeCol: overLoader([
			{args:"number,number",func:(a,b)=>{
				if(a<0||a>this.column-1){throw RangeError("argument is invalid")}
				if(b<0||b>this.column-1){throw RangeError("argument is invalid")}
				const cache = this.getColumn(a)
				return this.#getSetColumn(a,this.getColumn(b)).#getSetColumn(b,cache)
			}}
		]),
		addOtherRow: overLoader([
			{args:"number,number,number",func:(a,b,mul)=>{
				if(a<0||a>this.row-1){throw RangeError("argument is invalid")}
				if(b<0||b>this.row-1){throw RangeError("argument is invalid")}
				const B = this.getRow(b).map((value)=>value*mul)
				const A = this.getRow(a).map((value,i)=>value+B[i])
				return this.#getSetRow(a,A)
			}}
		]),
		addOtherColumn: overLoader([
			{args:"number,number,number",func:(a,b,mul)=>{
				if(a<0||a>this.column-1){throw RangeError("argument is invalid")}
				if(b<0||b>this.column-1){throw RangeError("argument is invalid")}
				const B = this.getColumn(b).map((value)=>value*mul)
				const A = this.getColumn(a).map((value,i)=>value+B[i])
				return this.#getSetColumn(a,A)
			}}
		]),
		mulRow: overLoader([
			{args:"number,number",func:(a,mul)=>{
				if(a<0||a>this.row-1){throw RangeError("argument is invalid")}
				const A = this.getRow(a).map((value,i)=>value*mul)
				return this.#getSetRow(a,A)
			}}
		]),
		mulColumn: overLoader([
			{args:"number,number",func:(a,mul)=>{
				if(a<0||a>this.column-1){throw RangeError("argument is invalid")}
				const A = this.getColumn(a).map((value,i)=>value*mul)
				return this.#getSetColumn(a,A)
			}}
		])
	}


	determinant(){ // 行列式
		if(!this.isSquare)return undefined
		if(this.row==1)return this[0][0]
		else {
			let cache
			let newArr = []
			cache = this
			if(cache[0][0]==0){
				try {cache = cache.ElementaryOperation.addOtherRow(0,cache.getColumn(0).findIndex((value)=>value!=0),1)}
				catch (e){if(e instanceof RangeError)return 0}
			}
			let buf = cache[0][0]
			cache = cache.ElementaryOperation.mulRow(0,1/cache[0][0])
			for(let i = 1; i < this.row; i++){
				cache = cache.ElementaryOperation.addOtherRow(i,0,-1*cache[i][0])
				newArr.push(cache[i].filter((valie,i)=>i!=0))
			}
			return buf * new Matrix(newArr).determinant()
		}
	}

	isInvertible(){ // 正則
		return !(this.determinant==0)
	}

	getInvert(){ // 逆

	}

	rank(){ // 階数

	}





	static unitMatrix(num){
		let newArr = []
		for(let i = 0; i < num; i++){
			newArr.push(new Array(num))
			for(let j = 0; j < num; j++){
				if(i==j)newArr[i][j] = 1
				else newArr[i][j] = 0
			}
		}
		return new Matrix(newArr)
	}
}