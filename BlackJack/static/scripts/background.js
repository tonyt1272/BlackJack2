let backdrop = document.getElementById('backdrop');
let currentPage = window.location.href;
let currentPageArray = currentPage.split('/')
let currentPageEnd = currentPageArray[currentPageArray.length-1]
currentPageEnd = currentPageEnd
console.log(currentPageEnd)

let pattern = new RegExp('.*-background');
for (item of backdrop.classList){
    if (item.match(pattern)){
        backdrop.classList.replace(item,`${currentPageEnd}-background`)
        break;
    }else{
        backdrop.classList.add(`${currentPageEnd}-background`)
    }
}

