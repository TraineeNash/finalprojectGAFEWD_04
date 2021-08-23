document.querySelector(".dropbtn").addEventListener("click",function(){
    let x = document.querySelector("#myTopnav")

    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})