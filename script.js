//mobile threebar navbar and overlay
function openNav(){
    document.getElementById('overlayNav').style.width = '100%'
}
function closeNav(){
    document.getElementById('overlayNav').style.width = '0%';
}
var btnOpen = false;
function myFunction(x) {
    x.classList.toggle("change");
    if(btnOpen == false){
        openNav();
        btnOpen = true
    }
    else{
        closeNav();
        btnOpen= false;
    }
console.log(btnOpen);
}


