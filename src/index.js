import x from './x.js'
import css from './asset/c.scss'
import png from './asset/fff.png'

const div=document.querySelector('#hf')
div.innerHTML=`
    <img src="${png}"></img>
`

const button=document.createElement('button')
button.innerText='按钮';
document.body.appendChild(button);

button.onclick=()=>{
    const promise=import('./asset/lazy')
    promise.then((modules)=>{
        const fn=modules.default;
        fn()

    })
}

console.log(x)
console.log(css)