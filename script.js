let readMoreBtn = document.getElementById("read-more-btn");
let moreInfo = document.getElementById("more-info");


readMoreBtn.addEventListener("click", function () {
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none"
    }
    else {
        moreInfo.style.display = "block"
    }

})