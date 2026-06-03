// frontend and backend skills animation 

function showFrontend(){
    document.querySelector(".row1").style="left:0px;transition:all 1s";
    document.querySelector(".row2").style= "left:100%";
}

function showBackend(){
    document.querySelector(".row2").style = "left:0px;transition:all 1s";
    document.querySelector(".row1").style = "left:-100%";
}


// scroll Animation for responsive in skills file

const cards = document.querySelectorAll(".htmldiv, .javadiv");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach((card) => observer.observe(card));



// download resume 
document.getElementById("downloadBtn").addEventListener("click", function () {

    const link = document.createElement("a");

    link.href = "./SubaResume.pdf"; // Resume file path
    link.download = "Subasree_G_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});