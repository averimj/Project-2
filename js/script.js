/* 
 I created 2 global variables: 
 students = 54 <li>'s of students 
 itemsPerPage = the number of students I want to display on each page (10)
*/ 
const students = document.querySelectorAll(".student-item");
const itemsPerPage = 10;

/*
this function arranges ALL 54 of the <li>'s' in sets of 10 students
based on its index. 
Index 0 thru 9 will be on page 1...so on and so forth
*/
const showPage = (listOfStudents, pageNumber) => {

    const startIndex = (pageNumber * itemsPerPage) - itemsPerPage;
    const endIndex = (pageNumber * itemsPerPage) - 1;

    for (let i = 0; i < listOfStudents.length; i++) {
        const student = listOfStudents[i];

        if(i >= startIndex && i <= endIndex) { 
            student.style.display = "block";
        } else {
            student.style.display = "none";
        }
    }
};


/*  This function determines how many pages I'll need. 
    It also creates the page #s at the bottom of the page.
    This allows the user to click on a page #
    and go to the list of students on that page.
*/
const appendPageLinks = (listOfStudents) => {

    const numberOfPages = Math.ceil(listOfStudents.length / itemsPerPage);
    const pageDiv = document.querySelector(".page")
    const div = document.createElement("div");
    const ul = document.createElement("ul");

    div.className = "pagination";
    pageDiv.appendChild(div)
    div.appendChild(ul);

    showPage(listOfStudents,1)

   /*  This loop goes thru each page and creates a <li>
    and <a> tag with the page number as the <a> textContent.
    this also sets the first <a> as active
    */
    for(let i=1; i <= numberOfPages; i++) {

        const li = document.createElement("li");
        const anchorTag = document.createElement("a");
        
        anchorTag.setAttribute("href", "#");
        anchorTag.textContent = i;
        
        ul.appendChild(li);
        li.appendChild(anchorTag);
        
        const anchor = document.querySelector("a");
        const allAs = document.querySelectorAll("a");
        anchor.className = "active";
        
        
         /*  This loop goes thru ALL the <a> tags 
        and listens for which page # the user clicks on.
        when that page is clicked the link or <a> tag gets 
        the class "active" while the other class is equal to ""
        */

        /*  i credit @julian and @allie for their help
            with this portion of the function
        */
       ul.addEventListener("click", (e) => {
        const allAs = ul.querySelectorAll("a");
        for (let p = 0; p < allAs.length; p++){
            allAs[p].className = "";
        }
        const pageClicked = e.target;
        pageClicked.className = "active";
        showPage(listOfStudents,pageClicked.innerText);
        })        
    }   
}
    appendPageLinks(students);
