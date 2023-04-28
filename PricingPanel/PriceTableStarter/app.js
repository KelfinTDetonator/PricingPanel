const prBtn = document.querySelectorAll('.pricing-button');

let test = 0;
for(let list=0; list < prBtn.length; list++){
    let z = prBtn[list];
    z.addEventListener('click', removeFeature)
    z.addEventListener('click', ()=>{z.classList.add('is-featured')})
    test = list
}
// for(let list of prBtn){
//     list.addEventListener('click', removeFeature)
//     list.addEventListener('click', ()=>{list.classList.add('is-featured')})
// }
function removeFeature(){
    for (let x of prBtn) {
        if(x.classList.contains('is-featured') === true){
            x.classList.toggle('is-featured');
        } 
    }
}

// testtt