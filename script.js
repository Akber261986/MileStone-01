var downPI = document.getElementById("downPI");
var upPI = document.getElementById("upPI");
var header = document.getElementById("header");
var downEdu = document.getElementById("downEdu");
var upEdu = document.getElementById("upEdu");
var expand = document.getElementById("expand");
var downSkill = document.getElementById("downSkill");
var upSkill = document.getElementById("upSkill");
var skill = document.getElementById("skills");
var downWork = document.getElementById("downWork");
var upWork = document.getElementById("upWork");
var work = document.getElementById("work");
document.addEventListener("DOMContentLoaded", function () {
    var itemList = document.getElementById("itemList");
    if (itemList) {
        itemList.addEventListener("click", function (event) {
            var target = event.target;
            if (target && target.id === "downPI") {
                downPI.style.display = "none";
                upPI.style.display = "block";
                header.style.display = "flex";
            }
            if (target && target.id === "upPI") {
                downPI.style.display = "block";
                upPI.style.display = "none";
                header.style.display = "none";
            }
            if (target && target.id === "downEdu") {
                downEdu.style.display = "none";
                upEdu.style.display = "block";
                expand.style.display = "block";
            }
            if (target && target.id === "upEdu") {
                downEdu.style.display = "block";
                upEdu.style.display = "none";
                expand.style.display = "none";
            }
            if (target && target.id === "downSkill") {
                downSkill.style.display = "none";
                upSkill.style.display = "block";
                skill.style.display = "block";
            }
            if (target && target.id === "upSkill") {
                downSkill.style.display = "block";
                upSkill.style.display = "none";
                skill.style.display = "none";
            }
            if (target && target.id === "downWork") {
                downWork.style.display = "none";
                upWork.style.display = "block";
                work.style.display = "block";
            }
            if (target && target.id === "upWork") {
                downWork.style.display = "block";
                upWork.style.display = "none";
                work.style.display = "none";
            }
        });
    }
});
