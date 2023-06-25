const container = document.querySelector('.container')
let actualSize = 16;

function getRandomRGB() {
	return 'rgb(' + (Math.random() * 256) + ',' + (Math.random() * 256) + ',' + (Math.random() * 256) + ')'
}

function deleteGrid() {
	while (container.firstChild) {
		container.removeChild(container.firstChild)
	}
}

function createGrid(numberOfSquare) {
	for (let i = 0; i < numberOfSquare; i++) {
		const div = document.createElement('div')
		div.classList.add('line')
		for (let j = 0; j < numberOfSquare; j++) {
			const div2 = document.createElement('div')
			div2.classList.add('square')
			div2.style.width = (960 / numberOfSquare) + 'px'
			div2.style.height = (960 / numberOfSquare) + 'px'
			div.appendChild(div2)
		}
		container.appendChild(div)
	}
	const squareList = document.querySelectorAll('div.square')
	squareList.forEach(square => {
		square.addEventListener('mouseover', e => {
			e.target.style.backgroundColor = getRandomRGB()
		})
	})
}

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', e => {
	deleteGrid()
	createGrid(actualSize)
})

const newGrid = document.querySelector('#newGrid')
newGrid.addEventListener('click', e => {
	actualSize = prompt('Enter grid size')
	deleteGrid()
	createGrid(actualSize)
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', e => {
	actualSize = 16
	deleteGrid()
	createGrid(actualSize)
})

createGrid(actualSize)