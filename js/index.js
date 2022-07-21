const url = "http://localhost:3000/monsters";
let curPage = 1;
let totalPages;
const perPage = 50;
const monsterContainer = document.getElementById("monster-container")
const forward = document.getElementById("forward");
const back = document.getElementById("back");

const showMonsters = (page) => {
    fetch(`${url}/?_limit=${perPage}&_page=${page}`)
    .then(res => res.json())
    .then(res => {   
        monsterContainer.innerHTML = '';     
        res.map((el, i) => {
            let idNode = document.createElement('p')
            idNode.innerText = el.id
            let nameNode = document.createElement('h1')
            nameNode.innerText = el.name
            let desNode = document.createElement('p')
            desNode.innerText = el.description
            let ageNode = document.createElement('h2')
            ageNode.innerText = el.age
            monsterContainer.append(nameNode)
            monsterContainer.append(ageNode)
            monsterContainer.append(desNode)
            monsterContainer.append(idNode)


        })
    })
    .catch(err => alert(err));
}
forward.addEventListener('click', e => {
    if (curPage < totalPages) {
        curPage += 1;
        showMonsters(curPage)
    }  
})
back.addEventListener('click', e => {
    if (curPage > 1) {
        curPage -= 1
        showMonsters(curPage)
    }
})
showMonsters(curPage);
fetch(url)
    .then(res => res.json())
    .then(res => totalPages = Math.ceil(res.length / perPage))