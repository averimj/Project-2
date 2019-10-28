/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

 

const students = document.querySelectorAll(".student-item");
const itemsPerPage = 10;


const showPage = (listOfStudents, pageNumber) => {

    const startIndex = (pageNumber * itemsPerPage) - itemsPerPage;
    const endIndex = (pageNumber * itemsPerPage) - 1;

    for (let i = 0; i < listOfStudents.length; i++) {
        const studentIndex = listOfStudents[i];

        if(i >= startIndex && i <= endIndex) { 
            studentIndex.style.display = "block";
        } else {
            studentIndex.style.display = "none";
        }
    }
};



const appendPageLinks = (listOfStudents) => {

    const numberOfPages = Math.ceil(listOfStudents.length / itemsPerPage);
    const pageDiv = document.querySelector(".page")
    const div = document.createElement("div");

    div.className = "pagination";
    pageDiv.appendChild(div)
    const ul = document.createElement("ul");
    div.appendChild(ul);

    showPage(listOfStudents,1)
   
    for(let i=1; i <= numberOfPages; i++) {

        const li = document.createElement("li");
         ul.appendChild(li);

        const anchorTag = document.createElement("a");
        anchorTag.setAttribute("href", "#");
        anchorTag.textContent = i;
        li.appendChild(anchorTag);

        const anchor = document.querySelector("a");
        anchor.className = "active";

        const aList = document.querySelectorAll("a");

        for(let l = 1; l <= aList.length; l++) {
            anchorTag.addEventListener("click", (e) => {
                showPage(listOfStudents,l);
                const pageClicked = e.target;
                
                for (let p = 1; p < anchorTag.length; p++){
                    let anchor = anchorTag[p];
                    if(pageClicked) {
                        anchor.className = "active";
                    } else {
                        anchor.className = "";
                    }                
                }  
            })        
        }
    }   
}
    appendPageLinks(students);
