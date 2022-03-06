let ind=document.querySelectorAll(".ind")
let extra=document.querySelector(".extra")
for(let item of ind) {
    item.addEventListener("click",()=>{
        let nodeList=item.childNodes
        let sub=nodeList[1].childNodes
        extra.src=sub[1].src
    })
}