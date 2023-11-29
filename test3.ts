interface IObjectTestInfo {
	"desc": string;
	"isActive": boolean
}

interface IObjectTestTags {
		"name": string,
		"value": number
}


interface IObjectTest{
	"userId": number,
	"id": number,
	"title": string,
	"info": IObjectTestInfo,
	"tags": IObjectTestTags[]
}


const testObj = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"info": {
		"desc": "delectus aut autem",
		"isActive": true
	},
	"tags": [
		{
			"name": "my name",
			"value": 1000
		}
	]
}

const testFunc = (obj:IObjectTest) => {
	console.log(obj)
}

testFunc(testObj)





