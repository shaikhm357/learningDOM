//--> Exammine document object
//console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// //document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[13])
// //document.all[13].textContent= 'hello'
// console.log(document.forms)
// console.log(document.forms[0])
//console.log(document.images)

//console.log(document.getElementById('list'))

//---> GetElementById selector

// const id = document.getElementById('list');
// console.log(id)

// id.textContent = 'hello world'
//id.innerText = 'but what'
// console.log(id.innerText)
// console.log(id.textContent)

// id.innerHTML = "<h3>hello buddy</h3>"
// id.style.color = 'yellow'
// id.style.backgroundColor = 'black'

//---> getElementByClassName 

// const cls = document.getElementsByClassName("list")
// console.log(cls)
// // cls[1].style.color = "red";

// for(var i = 0 ; i< cls.length ; i++){
//     cls[i].style.backgroundColor = 'yellow'
// }


//---> getElementByTagName

// const tag = document.getElementsByTagName('li')
// console.log(tag)
// tag[1].style.color = 'red'
// tag[1].textContent = 'do good'
// tag[2].innerText = 'devil dare'

// for(let i = 0 ; i<tag.length ; i++){
//     tag[i].style.backgroundColor = '#f4f4f4'
// }

//---> querySelector

// const header = document.querySelector('.main-header')
// header.style.borderBottom = "4px solid blue"

// const input = document.querySelector('input')
// input.value = 'hello all'

// const sub = document.querySelector('input[type=submit]');
// sub.value = 'send'

// const lastItem = document.querySelector('.list:last-child')
// lastItem.style.color = 'green'

// const ntChild = document.querySelector('.list:nth-child(2)')
// ntChild.style.color = 'red'

//---> parentNode

// const node = document.querySelector('#title');
// console.log(node.parentNode);
// node.parentNode.style.backgroundColor = '#f4f4f4'

// const node1 = document.querySelector('li')
// console.log(node1.parentNode.parentNode.parentNode.parentNode)
// node1.parentNode.style.backgroundColor = '#c4c4c4'
// node1.parentNode.parentNode.style.backgroundColor = 'white'
// node1.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = '#ddd'

//---> parentElement

// const node1 = document.querySelector('li')
// console.log(node1.parentElement.parentElement.parentElement.parentElement)
// node1.parentElement.style.backgroundColor = '#c4c4c4'
// node1.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'black'

// const itemchild = document.querySelector('#list')
// console.log(itemchild.childNodes)

// console.log( itemchild.children )
// itemchild.children[0].style.display = 'inline'

//--->   nextElementSibling

// const sib = document.querySelector('form')
// console.log(sib.nextElementSibling)
// sib.nextElementSibling.style.color = 'red'

//--->   previousElementSibling

// const sib = document.querySelector('h3')
// console.log(sib.previousElementSibling)
// const form = sib.previousElementSibling.style
// form.padding = '4px'
// form.backgroundColor = '#f4f4f4'
// form.borderRadius = '5px '

//---> create you own tag and inset in dom

// //-created element
// const create = document.createElement('div')
// create.id = 'newid'
// create.className = 'newdiv'
// create.setAttribute('title','hello')
// //-creating text content
// const text = document.createTextNode('hello world');
// //-create heading h3
// const heading = document.createElement('h3')
// //-adding h3 and textcontent in div element
// create.appendChild(heading).appendChild(text)
// //-where to insert
// const container = document.querySelector('header .container')
// //-before the tag
// const h1 = document.querySelector('header h1')
// //-adding 
// container.insertBefore(create, h1)
// //-console view check
// console.log(create)
// //-styled
// const mytag = document.querySelector('#newid');
// console.log(mytag)
// mytag.style.color = 'yellow'

//---> addeventlistener

// const button = document.querySelector('.btn').addEventListener(
//     'click', handleClick );

// function handleClick(e){

//     //console.log(e.target)
//     //console.log(e.target.className)
//     // console.log(e.target.id)
//     //console.log(e.target.classList)

//     //- in present word use
//     // document.getElementById('output').innerHTML = `<h3>`+e.target.className+`</h3>`
//     // console.log(e.type)

//     //-mouse position document and element basis resp.
//     // console.log(`x=${e.clientX} , y=${e.clientY}`)
//     // console.log(`x=${e.offsetX} , y=${e.offsetY}`)

//     //-with shortkeys true false basis
//     // console.log(e.altKey)
//     // console.log(e.shiftKey)
//     // console.log(e.ctrlKey)

//     //- basic
//     // console.log('clicked')
//     // const heading = document.querySelector('.container h3')
//     // heading.textContent = 'hello world'
// }

//---> mouse overs

// const button =document.getElementById('btn')
// //button.addEventListener('click', handleClick)
// //button.addEventListener('dblclick', handleClick)
// // button.addEventListener('mousedown', handleClick)
// // button.addEventListener('mouseup', handleClick)

// //const box = document.getElementById('greybox')
// // box.addEventListener('mouseenter',handleClick)
// // box.addEventListener('mouseleave',handleClick)

// // box.addEventListener('mouseenter',handleClick)
// // box.addEventListener('mouseover',handleClick)

// // box.addEventListener('mouseleave',handleClick)
// // box.addEventListener('mouseout',handleClick)

// //box.addEventListener('mousemove',handleClick)



// function handleClick(e){
//     // console.log(e.type)
//     // list.innerHTML = `mouseX:${e.offsetX} mouseY:${e.offsetY}`
//     // output.innerHTML = `mouseX:${e.offsetX} mouseY:${e.offsetY}`
//     // output.style.color = `rgb(${e.offsetX}, ${e.offsetY},40)`

// }
//const item = document.querySelector('form input[type="text"]');

//const sel = document.querySelector('select')
// item.addEventListener('keydown', handleClick)
//item.addEventListener('keypress', handleClick)
//item.addEventListener('keyup', handleClick)

// item.addEventListener('focus', handleClick)
// item.addEventListener('blur', handleClick)

// item.addEventListener('cut', handleClick)
// item.addEventListener('paste', handleClick)

const form = document.querySelector("form");
      form.addEventListener('submit', handleClick)


function handleClick(e){
    e.preventDefault();
    // console.log(e.target.value)
    // document.getElementById('output').innerText = e.target.value
   console.log(e.type)
}