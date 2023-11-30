enum Direction {
	Up ='UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT'
}

const culcEnum = () => {
	return 3
}

enum Decision {
	Yes = 1,
	No = culcEnum()
}

const runEnum = (obj: {Up: string}) => {

}
 
runEnum(Direction)

enum Test {
	A
}

let test = Test.A
let nameA = Test[test]

const enum ConstEnum {
	A,
	B
}

let h = ConstEnum.A


enum Dice {
	One = 1,
	Two
}

const ruDice = (dice: Dice) => {
	switch(dice){
		case Dice.One:
			return 'Один';
		case Dice.Two:
			return 'Два'
		default:
			const a: never = dice
	}
}

// console.log(ruDice())





// const Up: Direction = 'UP'