// flipbook thingmebob
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// paper thing
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers +1;

function openBook(){
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-330px)";
    nextBtn.style.transform = "translateX(330px)";
}

function closeBook(isAtBeginning){
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)"
    } else {
        book.style.transform = "translateX(100%)"
    }
    prevBtn.style = "translateX(0px)";
    nextBtn.style = "translateX(0px)";
}

function goNextPage(){
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                closeBook();
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage(){
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 2;
                break;
            case 3:
                openBook();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
    }
}