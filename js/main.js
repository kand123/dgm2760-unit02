document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "asdf"


function reDisplay(){
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top.`
let location =  `The URL for this site is ${window.location}.`



// let anc = document.createElement('a')
// let link = document.createTextNode(location)
// anc.appendChild(link)
// anc.href = `${window.location}`
// document.body.appendChild(anc)


let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${location}`

}

reDisplay()


let docTitle = `This document is titled ${document.title}.`
let docUpdate = `This was last updated on ${document.lastModified}.`
let myDocument = document.querySelector('#myDocument').innerText = `${docTitle} \n ${docUpdate}`


