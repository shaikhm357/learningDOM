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

const cls = document.getElementsByClassName("list")
console.log(cls)
// cls[1].style.color = "red";

for(var i = 0 ; i< cls.length ; i++){
    cls[i].style.backgroundColor = 'yellow'
}

