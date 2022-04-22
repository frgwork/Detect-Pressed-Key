const box = document.querySelector('.box');

document.addEventListener('keydown', e => {
   box.classList.add('active');
   let keyName = e.keyCode === 32 ? 'Space' : e.key;
   box.querySelector('.key-code').textContent = e.keyCode;
   box.querySelector('.key-name').textContent = keyName;
   box.querySelector('.key span').innerHTML = keyName;
   box.querySelector('.code span').textContent = e.keyCode;

   //console.log(e);
})