/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variab/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/* 
 2 global variables: 
 students = 54 li's
 itemsPerPage = the number of students i want to display on each page (10)
*/
const students = document.querySelectorAll(".student-item");
const itemsPerPage = 10;


/*
this function arranges ALL 54 of the <li>'s' in sets of 10 students at a time.
this enables us to build upon the code to make it display a page
based on a click of that pageNumber

<li>'s  will be refered to as listOfStudents
(it's only refered to as "students"(global variable) when we call/execute the code:
example: showPage(students, 2))
*/
const showPage = (listOfStudents, pageNumber) => {


    /* on endIndex i subtract 1 because i only want 10 students per page, not 11
       pageNumber = 1 
       itemsPerPage = 10
       startIndex = (1 * 10) - 10 = 0 
       endIndex = (1 * 10) -1 = 9 
       index 0 to 9 is 10 students 
    */
    const startIndex = (pageNumber * itemsPerPage) - itemsPerPage;
    const endIndex = (pageNumber * itemsPerPage) - 1;


    /* i need a loop here because i want to go thru my entire list of 54 and check their indexes.
       i start with index 0 (which is the first student in the list) and go all the way to
       indexes 55 (which is the last student in the list).

       the "if statement" produces a range of indexes:
       page 1 -- indexes between: 0 to 9
       page 2 -- indexes between: 10 to 19
       page 3 -- indexes between: 20 to 29 
       page 4 -- indexes between: 30 to 39
       page 5 -- indexes between: 40 to 49
       page 6 -- indexes between: 50 to 54

       so if [i] (meaning the index) is greater than or equal to 30 AND [i] is less than or equal to 39,
       display the students with indexes 30 to 39 (studentIndex.style.display = "") 
       and hide the rest of the students (studentIndex.style.display = "none")
    */

    /*  loops over each student, starting with index 0
        as long as the index is less than the length of listOfStudents (54) // as long as this statement is true
        add 1 to [i], loop thru this until the middle statement is no longer true (false)
    */ 
    for (let i = 0; i < listOfStudents.length; i++) {


        /*  listOfStudents represents the list of 54 students,
            list[i] represents a single student based on their index 
        */
        
        // reassigned listOfStudent to studentIndex
        const studentIndex = listOfStudents[i];


        /*  IF the index is greater or equal to 0 (startIndex) AND less than or equal to 9 (endIndex) (or whatever the range is at that time)
            display all 10 <li>'s or students w/in that index range            
        */
        if(i >= startIndex && i <= endIndex) { 
            studentIndex.style.display = ""


        //  IF the index is NOT w/in that range, please hide it
        } else {
            studentIndex.style.display = "none"
        }
    }
};


// calls the function...using "students" and the page number you want displayed
// not sure if i call the actuall function here
showPage(students, 2);


/* this funtction

*/
const appendPageLinks = (listOfStudents) => {

    /*  i need to figure out how many pages i'll need, so i take "listOfStudents.length" (54 students long) 
        and divide it by the number of students i want on each page (10).
        54/10 = 5.4;
        i use Math.ceil because i want to round up (ceiling up / floor down)
        5.4 rounds UP to 6
        i'll end up with 6 pages 
        5 pages with 10 students each and the 6th page will have 4 students (50 + 4 = 54)
    */
    const numberOfPages = Math.ceil(listOfStudents.length / itemsPerPage);
    

    /*  using DOM, i go to the document & grab the 1st class w/ the name "page" using querySelector.
        querySelector only selects the 1st of its kind
    */
    const pageDiv = document.querySelector(".page")


    // i create a <div> and name it div
    const div = document.createElement("div");


    // i assign that <div> the class name of "pagination"
    div.className = "pagination";


    // i attach the <div> to the end of the "pageDiv" (aka the <div> with the class of "page")
    pageDiv.appendChild(div)


    // i create a <ul> and name it ul
    const ul = document.createElement("ul");


    // i attach the <ul> to the end of the "div" (the one i just created)
    div.appendChild(ul);

    
    /*  need to loop over to this to determine how hany <li> and <a> are needed per page
        not sure how to determine how many <li>/<a>'s to print out??????

        at the beginning of this function, I realized I'd need 6 pages
        the [i] below starts at 1 instead of 0 because no pageNumber starts at 0
    */
    for(let i=1; i < numberOfPages.length; i++) {
        const li = document.createElement("li");
        const anchorTag = document.createElement("a");
        console.log(anchorTag);

        anchorTag.setAttribute("href", "#");
        li.firstChild.setAttribute("class", "active");
        anchorTag.textContent = numberOfPages[i];
        li.appendChild(anchorTag);
        ul.appendChild(li);
    }
    
    // a.addEventListener("click", (e) => {
    // // loop over pagination link to remove active class from all links except for the page you want to show
    // const pageClicked = event.target;
    // const anchors = querySelectorAll("a");
    
    // // const pageClicked = pageClicked.className = "active"
    
    //     for (let i = 0; i < anchors.length; i++){
    //         let anchor = anchors[i];
    //         if(pageCLicked) {
    //             anchor.className = "active";
    //         } else {
    //             anchor.classList.remove("active");
    //         }
    //         showPage(students, pageClicked);
        
    //     }  
    // })
}

appendPageLinks(students);
les that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

var students = document.querySelector(".student-item");
// var page = students.length === 10
var pages = document.querySelector(".student-list");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
var showPage = (list, page) => {
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;  
      for(let i = 0; i < students.length; i++);
      let student = students[i];
      if(student >= startIndex && student <= endIndex) {
         // not sure if this is the correct documentation
         document.style.display = '';
      } else {
         document.style.display = "none";
      }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


var appendPageLinks = (list) => {
   let pageDiv = document.querySelector(".page");
   let div = document.createElement("div");
   div.className = "pagination";
   pageDiv.appendChild(div);

   let ul = document.createElement("ul");
   div.appendChild(ul);

   let numberOfPages = students.length / 10;
      if() {
        for(let i = 1; i < numberOfPages; i++) {
            let pageNumber = numberOfPages[i];
            let li = document.createElement("li");
            ul.appendChild(li);
            let a = document.createElement("a");
            li.appendChild(a);
            a.className = "a";
            a.href = "#";
            a.textContent = i;

        }
      }

   

   
   a.addEventListener("click", (e) => {
      
      if(e.target.){

      }
   });

      

   
  
}


// Remember to delete the comments that came with this file, and replace them with your own code comments.

// SHOW PAGE 
// if () { 
//    for(let i = 0; i < students.length; i++);
//    let student = students[i];
//    if(student[i] >= 0 && student[i] <= 9) {
//       // show page 1 -- document.body.display
//    } else if (student[i] >= 10 && student[i] <= 19) {
//       // show page 2
//    } else if (student[i] >= 20 && student[i] <= 29) {
//       // show page 3
//    } else if (student[i] >= 30 && student[i] <= 39) {
//       // show page 4
//    } else if (student[i] >= 40 && student[i] <= 49) {
//       // show page 5
//    } else if (student[i] >= 50 && student[i] <= 59) {
//       // show page 6 -- 
//    }  
// }