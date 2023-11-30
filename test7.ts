function logTime<T> (num: T): T {
	console.log(new Date())
	return num
}

function logTime2<T> (num: T): T {
	if (typeof num === 'string') {
		num.toLocaleUpperCase
	}
	return num
}

interface MyInterface {
	transform: <T,F>(a: T) => F
}

// class MyGenClass<T>{
// 	constructor() {
// 		value : T
// 	}
// }

// const d = new MyGenClass<number>
// d.value

interface TimeStamp {
	stamp: number;
}

function logTimeStamp<TimeStamp>(num: TimeStamp) {
	
}

