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
        window.open('https://zughayyar.github.io/Calculator/' , '_blank');
    }
        

    if (project == 'Dojo Weather') {
        window.open('https://zughayyar.github.io/Dojo-Weather/' , '_blank');
    }

    if (project == 'Profile Page') {
        window.open('https://zughayyar.github.io/Profile-Page/' , '_blank');
    }
    
}