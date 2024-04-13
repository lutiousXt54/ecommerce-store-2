const reLoad = () =>{
    setTimeout(()=>{
        window.open(document.location.pathname,'_self');
    },1000)
}

//image change slide
function imgChange(){
    const container = document.querySelector('.container');
    const imgs = ['Frame-560.png','slide-2.png','slide-3.jpg','slide-4.jpg'];
    for(let i=0;i<imgs.length;i++){
        const childDiv = document.createElement('div');
        container.appendChild(childDiv);
    }
    let index = Math.floor(Math.random()*imgs.length);
    const backImg = window.getComputedStyle(container).backgroundImage;
    const start = backImg.indexOf('"');
    const end = backImg.lastIndexOf('"');
    const imgUrl = backImg.slice(start+1,end);
    let url = imgUrl.concat(imgs[index]);
    container.style.backgroundImage=`url(${url})`;
    container.children[index].style.backgroundColor='red';
    Object.values(container.children).forEach((e,i)=>{
        e.addEventListener('click',()=>{
            const num = Object.values(container.children).indexOf(e);
            url = imgUrl.concat(imgs[num]);
            container.style.backgroundImage=`url(${url})`;
            container.children[num].style.backgroundColor='red';
            if(num!=index){
                container.children[index].style.backgroundColor='';
            }
            index=i;
        });
    });
}
imgChange();

function openOptions(links){
    const nav = document.querySelector('nav');
    const option = nav.querySelector('.right').querySelectorAll('img');
    Object.values(option).forEach((e)=>{
        e.addEventListener('click',()=>{
            const index = Object.values(option).indexOf(e);
            window.open(links[index],'_self');
        });
    });
    
}
{
    const links = ['/whislist.html','/cart.html','/account.html'];
    openOptions(links);
}