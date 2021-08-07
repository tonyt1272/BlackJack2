document.getElementById('main-window').style.display = 'none';

function addCss(fileName) {

    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
  }
  
addCss("https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
let myModal = document.createElement('div')
myModal.innerHTML =`<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content align-items-center">
                        <h5 class="modal-title text-center" id="exampleModalLongTitle">Loading</h5>
                        <h5 class="modal-title text-center" id="exampleModalLongTitle"> &nbsp</h5>
                        <div class="spinner-border "></div>
                        <h5 class="modal-title text-center" id="exampleModalLongTitle"> &nbsp</h5>
                    </div>
                    </div>
                    </div>`
document.body.appendChild(myModal)
document.body.insertAdjacentElement('afterbegin', myModal);

document.getElementById("exampleModalCenter").style.display = "block"
document.getElementById("exampleModalCenter").classList.add("show")



