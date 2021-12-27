const imageBox = document.querySelector('.image-box'),
nav = document.querySelector('.nav')

let tabs = [
    {
        title: 'Little nightmare',
        src: 'sheets/4.png',
        target: 'img-4'
    },
    {
        title:'Sakura redemption',
        src:'sheets/1.jpg',
        target:'img-1'
    },
    {
        title: 'Sunset by the river',
        src: 'sheets/2.jpg',
        target: 'img-2'
    },
    {
        title: 'The mountains',
        src: 'sheets/3.jpg',
        target: 'img-3'
    },
]

tabs.forEach(tab=>{
    let navItem = document.createElement('div')
    navItem.classList.add('nav__item')
    navItem.innerHTML = `<span>${tab.title}</span>`
    navItem.dataset.target = tab.target
    navItem.addEventListener('click',choosePicture)

    nav.append(navItem)
})

//Active picture on load
nav.children[0].classList.add('nav__item_active')
let boxWithImage = document.createElement('img')
boxWithImage.src=tabs[0].src
boxWithImage.alt=tabs[0].title
boxWithImage.classList.add('image-box__item')
boxWithImage.classList.add('image-box__item_active')
imageBox.append(boxWithImage)


function choosePicture(e){
    clearTab()
    let currentPict = e.currentTarget
    currentPict.classList.add('nav__item_active')
    tabs.forEach((tab) => {
        if(currentPict.dataset.target == tab.target){
            boxWithImage.src = tab.src
            boxWithImage.alt = tab.title
        }
    })
}

function clearTab() {
    [...nav.children].forEach(item => item.classList.remove('nav__item_active'))
}