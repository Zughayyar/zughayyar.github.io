/*
file: Profile Page (main style)
type: Javascript file
Developer: Anas Zughayyar
Date: 25/09/2024
*/

console.log("Page loaded... ")      // load page

function redirect_page(element) {
    let project = element.innerText
    console.log("The project chose : " + project)
    if (project == 'Calculator') {
        location.href="https://zughayyar.github.io/Calculator/"
    }
        

    if (project == 'Dojo Weather') {
        location.href="https://zughayyar.github.io/Dojo-Weather/"
    }

    if (project == 'Profile Page') {
        location.href="https://zughayyar.github.io/Profile-Page/"
    }
    
}