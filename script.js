// let button = document.querySelector('.btn')

// button.addEventListener('click', () => {

//     let img = document.createElement('img')
//     img.src = 'https://avatars.mds.yandex.net/i?id=bdaf1a5c1fda0bb97ac3c608e22cf3c3_l-4565487-images-thumbs&n=13'
//     body.append(img)
// })


// let input = document.querySelector('.text')

// button.addEventListener('click', () => {
//     let body = document.querySelector('body')

//     let inputValue = input.value
//     let h1 = document.createElement('h1')
//     h1.textContent = inputValue

//     body.append(h1)
// })




// let paswordd = document.querySelector('.pasword')




// paswordd.addEventListener('input', () => {
//     let inputValue = paswordd.value
//     h1text.textContent = inputValue
// })


// let savedata = document.querySelector('.data')
// let h1text = document.querySelector('.text')

// savedata.addEventListener('change', () => {
//     let savedateVale = savedata.value
//     h1text.textContent = savedateVale

// })


// let axmattiRangi = document.querySelector('.color')

// axmattiRangi.addEventListener('input', () => {
//     let body = document.querySelector('body')
//     let axmattiRangiValue = axmattiRangi.value
//     body.style.backgroundColor = axmattiRangiValue

// })

// let img = document.querySelector('.img')

// let count = 0
// img.addEventListener('mouseover', () => {
//     let randomX = Math.round(Math.random() * 500)
//     let randomY = Math.round(Math.random() * 250)
//     count++
//     console.log(randomX, randomY);

//     img.style.top = ` ${randomY}px`
//     img.style.left = ` ${randomX}px`

//     if (count === 10) {
//         let h1 = document.querySelector('.text')
//         h1.textContent = 'tutomisan kal kal'
//     } else {
//         h1.textContent = 'meni tut'
//     }


// })



let btn = document.querySelector('.btn')
let number1 = document.querySelector('.number1')
let number2 = document.querySelector('.number2')
let decrementBtn = document.querySelector('.decrementBtn')
let incrementBtn = document.querySelector('.incrementBtn')
let sentcolor  = document.querySelector('.sentcolor')

btn.addEventListener('click', () => {
    number2.innerHTML = number1.value
});

decrementBtn.addEventListener('click', () => {
if (parseInt(number2.innerHTML) > 0) {
        number2.innerHTML = parseInt(number2.innerHTML) - 1;
    }
})

incrementBtn.addEventListener('click', () => {
 number2.innerHTML = parseInt(number2.innerHTML) + 1
})

sentcolor.addEventListener('input', () => {
    number2.style.color = sentcolor.value
})