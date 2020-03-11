
window.onload = function(){
    
    let container = document.querySelector('#canvas')
    let pallet = document.querySelector('#pallet-container')


    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for(let color of colorChoices) {
        let palletBox = document.createElement('span')
        palletBox.style.backgroundColor = color
        palletBox.style.height = '10px'
        palletBox.style.width = '10px'
        palletBox.style.border = '2px solid black';

        palletBox.addEventListener('click', function(event){
            brushColor = palletBox.style.backgroundColor
        });

        pallet.appendChild(palletBox);

    }

    for(let i=0; i < 400; i++){
        let box = document.createElement('span')
        box.style.width = '8px'
        box.style.height = '8px'
        box.style.border = '1px solid black'

     box.addEventListener('click', function(event) {
        box.style.backgroundColor = brushColor
     })
     container.appendChild(box)
    }   

}



