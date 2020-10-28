const body = document.querySelector("body");
const IMG_NUMBER = 5;



function paintImage(imgNumber) {
    const image = new Image();
    image.src = imgNumber;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandomImg() {
    const number= Math.floor(Math.random()*IMG_NUMBER);
    let imgLink;
    switch(number){
       case 0:
        imgLink= 'https://unsplash.com/photos/NRQV-hBF10M/download?force=true&w=2400';
       break;
       case 1:
            imgLink='https://unsplash.com/photos/twukN12EN7c/download?force=true&w=2400';
        break;
      
        case 2:
            imgLink='https://unsplash.com/photos/QHZn3-0bbEM/download?force=true&w=2400';
        break;
        case 3:
            imgLink='https://unsplash.com/photos/t7YycgAoVSw/download?force=true&w=2400';
        break;
        case 4:
            imgLink='https://unsplash.com/photos/T7K4aEPoGGk/download?force=true&w=2400';
        break;
                                  
       
    }
    return imgLink;
}

function init() {
    const randomNumber = getRandomImg();
    paintImage(randomNumber);

 }

 init();