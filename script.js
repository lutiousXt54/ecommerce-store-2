const menu = ()=>{
    const menuDiv = document.createElement('div');
    menuDiv.className='menu';
    const heading = document.createElement('div');
    heading.className='heading';
    const head1 = document.createElement('div');
    head1.className='h1';
    head1.textContent='menu';
    const removeImg = document.createElement('img');
    removeImg.src='./images/cross.svg';
    removeImg.alt='cancel';
    const info = document.querySelector('.info');
    const select = document.querySelector('select');
    heading.appendChild(head1);
    heading.appendChild(removeImg);
    menuDiv.appendChild(heading);
    menuDiv.appendChild(info);
    if(screen.width < 700){
        menuDiv.appendChild(select);
    }
    document.body.appendChild(menuDiv);
    removeImg.addEventListener('click',()=>{
        menuDiv.style.display='none';
    })
}

const items = (event)=>{
    const containerDiv = document.createElement('div');
    containerDiv.className='container';
    const heading = document.createElement('div');
    heading.className='heading';
    const h1 =document.createElement('h1');
    h1.textContent='categories'
    const removeImg = document.createElement('img');
    removeImg.src='./images/cross.svg';
    const categories = document.querySelector('.left');
    heading.appendChild(h1);
    heading.appendChild(removeImg);
    containerDiv.appendChild(heading);
    containerDiv.appendChild(categories);
    document.body.appendChild(containerDiv);
    document.body.addEventListener('click',(event)=>{
        if(event.target==removeImg){
            containerDiv.style.display='none';
        }
    });
    event.target.addEventListener('click',()=>{
        containerDiv.style.display='none';
    });
}