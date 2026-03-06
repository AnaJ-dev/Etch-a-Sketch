const buildGridBtn = document.querySelector('.btn-sizing')

let convertgridSizeToNumber = 16

buildGridBtn.addEventListener('click', () => {
    let gridSizeNumber = prompt("enter nr squares per side");


    if (gridSizeNumber !== '') {
        convertgridSizeToNumber = gridSizeNumber * 1
        console.log(convertgridSizeToNumber)
    }



    while (gridSizeNumber === '' || isNaN(convertgridSizeToNumber) || gridSizeNumber > 100) {
        gridSizeNumber = prompt("enter nr squares per side, must be less than 100");
        convertgridSizeToNumber = gridSizeNumber * 1
        console.log(convertgridSizeToNumber)
    }

    let newSquaresSize = 960 / convertgridSizeToNumber;


    createBoxes(newSquaresSize);
    goOver();


})



function createBoxes(newSquaresSize) {
    const createGridBoxes = document.querySelector('.grid-area-container')

    createGridBoxes.innerHTML = '';


    for (let i = 1; i <= convertgridSizeToNumber * convertgridSizeToNumber; i++) {

        const createElementDiv = document.createElement('div')
        createElementDiv.classList.add('square')

        createElementDiv.style.width = newSquaresSize + 'px'
        createElementDiv.style.height = newSquaresSize + 'px'
        // createElementDiv.textContent = i

        createGridBoxes.append(createElementDiv)

    }
}


function goOver() {
    const changeColourOfBox = document.querySelectorAll('.square')

    for (let i = 0; i < changeColourOfBox.length; i++) {

        changeColourOfBox[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = 'rgb(228, 202, 238)'

            // setTimeout(() => {
            //     event.target.style.backgroundColor = "";
            // }, 900);
        })

    }
}

let newSquaresSize = 960 / convertgridSizeToNumber
createBoxes(newSquaresSize)
goOver()



