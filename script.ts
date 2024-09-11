

    const downPI = document.getElementById("downPI") as HTMLElement;
    const upPI = document.getElementById("upPI") as HTMLElement;
    const header = document.getElementById("header") as HTMLElement;
    
    const downEdu = document.getElementById("downEdu") as HTMLElement
    const upEdu = document.getElementById("upEdu") as HTMLElement;
    const expand = document.getElementById("expand") as HTMLElement;

    const downSkill = document.getElementById("downSkill") as HTMLElement
    const upSkill = document.getElementById("upSkill") as HTMLElement;
    const skill = document.getElementById("skills") as HTMLElement;

    const downWork = document.getElementById("downWork") as HTMLElement
    const upWork = document.getElementById("upWork") as HTMLElement;
    const work = document.getElementById("work") as HTMLElement;




document.addEventListener("DOMContentLoaded", ()=>{
    const itemList = document.getElementById("itemList")
    
    if (itemList){
        itemList.addEventListener("click", (event)=>{
            const target = event.target as HTMLElement;

            if (target && target.id === "downPI"){
                downPI.style.display = "none";
                upPI.style.display = "block";
                header.style.display = "flex"
        }
        if (target && target.id === "upPI"){
            downPI.style.display = "block";
            upPI.style.display = "none";
            header.style.display = "none";
        }
        if (target && target.id === "downEdu"){
            downEdu.style.display = "none";
            upEdu.style.display = "block";
            expand.style.display = "block"
        }
        if (target && target.id === "upEdu"){
            downEdu.style.display = "block";
            upEdu.style.display = "none";
            expand.style.display = "none"
        }
            
        if (target && target.id === "downSkill"){
            downSkill.style.display = "none";
            upSkill.style.display = "block";
            skill.style.display = "block"
        }
        if (target && target.id === "upSkill"){
            downSkill.style.display = "block";
            upSkill.style.display = "none";
            skill.style.display = "none"
        }
            
        if (target && target.id === "downWork"){
            downWork.style.display = "none";
            upWork.style.display = "block";
            work.style.display = "block"
        }
        if (target && target.id === "upWork"){
            downWork.style.display = "block";
            upWork.style.display = "none";
            work.style.display = "none"
        }
            
        })
    }
    })