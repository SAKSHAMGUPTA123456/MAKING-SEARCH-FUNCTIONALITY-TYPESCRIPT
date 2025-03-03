const forming=document.getElementById('form') as HTMLFormElement
let putting=document.getElementById('container1')as HTMLElement
interface details{
 login:string
 avatar_url:string

}
async function fecthing<T>(value:string):Promise<T>{
console.log(value)
const response=await fetch(value)
const data=await response.json()
console.log(data)
return data
}
function showingscreen(value:string,value2:string){

    let div=document.createElement('div')as HTMLDivElement
    let content=document.createElement('h1')as HTMLElement
content.innerText=`${value2}`
content.style.color="white"
    div.addEventListener('mouseenter', () => {
        div.style.boxShadow ='0 0 20px 5px rgba(255, 255, 255, 0.8)';
      });
      
      div.addEventListener('mouseleave', () => {
        div.style.boxShadow = 'none';
      });
    div.style.border="2px solid white"
    div.style.width="250px"
    div.style.height="350px"
    div.style.marginLeft="8px"
let image=document.createElement('img')as HTMLImageElement
image.src=`${value}`
image.style.width="250px"

div.append(image)
div.append(content)
putting.appendChild(div)
}
forming.addEventListener('keyup',(e)=>{
    putting.innerHTML=""
 let texting=forming.value

let first="https://api.github.com/users"
fecthing<details[]>(first).then((userinfo)=>{
    console.log(userinfo)
    for(let hacking  of userinfo){
         if(hacking.login.startsWith(texting)){
            showingscreen(hacking.avatar_url,hacking.login)
         }

    }
})
})


