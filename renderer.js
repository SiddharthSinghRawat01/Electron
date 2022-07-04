//  renderer are the file to render html apart from main.js

let data = window.Bridge.getDetails();
console.log('data',data);

if( typeof data.fname !== "undefined"){
    document.getElementById("fname").value = data.fname
}

if( typeof data.lname !== "undefined"){
    document.getElementById("lname").value = data.lname
}

window.addEventListener('DOMContentLoaded', ()=> {
    let btnSubmit = document.getElementById("submit");

    btnSubmit.addEventListener("click", ()=> {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        console.log(fname);
        console.log(lname);

        window.Bridge.saveDetails(fname,lname);
    })
})

// comming from main -> preload -> renderner -> HTML
window.indexBridge.somthinghappened((event,icounter)=>{
   
    let eleI = document.querySelector('#change')
    eleI.innerHTML = `Somthing happende ${icounter};`
})


