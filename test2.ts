type Point = {
	x: number,
	y: number
}

type D3Point =  Point & {
	z: number
}

interface IPoint  {
	x: number,
	y: number
}

interface I3DPoint extends IPoint {
	z: number
}

type stringOrNumber = string | number


interface Test {
	a: number;
}

interface Test {
	b: number;
}

const c = (point: IPoint) => {
	const d: I3DPoint = point as I3DPoint
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

function print(coord: Test) {
}
