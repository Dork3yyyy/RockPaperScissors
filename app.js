const sci = document.getElementById('scissors');
const ro = document.getElementById('rock');
const pa = document.getElementById('paper');
const head = document.getElementById('head');
const table = document.getElementById('table');
function srp() {
    let aelement = document.createElement('a');   //randomnumber = 0 === scissors  = 1 === paper = 2 === rock
    let point = 1;
    let points = 1;
    aelement.textContent = 0;
    aelement.className = "player";
    table.appendChild(aelement);
    let aelem = document.createElement('a');
    aelem.textContent = "-";
    table.appendChild(aelem);
    let ael3ment = document.createElement('a');
    ael3ment.textContent = 0;
    aelement.className = "pc1";
    table.appendChild(ael3ment);
    sci.addEventListener('click', function(){
        randomnumber = Math.floor(Math.random()*3);
        if(randomnumber == 1) {
            aelement.textContent = point++;
            console.log(aelement);
        } else if (randomnumber == 2) {
            ael3ment.textContent = points++;
        } else {

        }
    })
    ro.addEventListener('click', function(){
        randomnumber = Math.floor(Math.random()*3);
        if(randomnumber == 0) {
            aelement.textContent = point++;
        } else if (randomnumber == 2) {
            ael3ment.textContent = points++;
        } else {

        }
    })
    pa.addEventListener('click', function(){
        randomnumber = Math.floor(Math.random()*3);
        if(randomnumber == 2) {
            aelement.textContent = point++;
        } else if(randomnumber == 0) {
            ael3ment.textContent = points++;
        } else {
            
        }
    })
}

srp();