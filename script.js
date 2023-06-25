const container = document.querySelector('.container')

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
			e.target.style.backgroundColor = 'blue'
		})
	})
}

createGrid(16)