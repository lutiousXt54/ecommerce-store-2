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
    console.log(menuDiv);
}
