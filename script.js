const navigation = document.getElementById("navigation");

function show(){
    navigation.style.display = "block";
}

function remove(){
    navigation.style.display = "none";
}

const loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    setTimeout( function() {
        loader.style.display = "none";
    }, 1000 )
})