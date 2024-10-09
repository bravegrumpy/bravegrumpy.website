/*
 * Copyright (c) 2022.  BraveGrumpy.
 * Do not reproduce contents without express written permission from the author.
 * You can get permission by cloning the repository https://github.com/robin-zollner/bravegrumpy.website.git, and creating a new branch.
 * Otherwise, you can email seacrestskylar@gmail.com, or join the discord server, linked within each page.
 * The purpose of this website, is to practice responsive web design, and to publish creative writing.
 */

/************************************************************************
2024_09_29 EDIT
*** I commented this file out because it has an XSS vulnerability.
This part of the codebase is not under active development.
But  Ido not want to completely delete a file that was a 
part of my learning process. Keeping the file for historical purposes.

*************************************************************************


window.alert("This page is using Project-Link5.js")
document.getElementById('output').innerHTML = "This is Writeen usen External JS"
function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
    
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
  }

  function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);

  document.getElementById('output').innerHTML = getURLParameter('name');


*****************************************************************************/