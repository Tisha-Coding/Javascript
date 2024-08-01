function hey(){
   const heading = document.getElementById("heading");
   if(heading.innerText === "The Most Affordable Learning Platform")
   {
        heading.innerText = "PW Skills";
   }
   else{
    heading.innerText = "The Most Affordable Learning Platform";
   }

    heading.style.color = "navy";
}