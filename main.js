let reset = 0
const value = document.querySelector('#span-el')
const btns = document.querySelectorAll('.button')

console.log(btns)
btns.forEach(btn=>{
    btn.addEventListener('click',function(e){
        console.log('best')
    const styles = e.currentTarget.classList;
    if(styles.contains('el')){
        reset -= 1
    }else if (styles.contains('-El')){
        reset +=1;
    }else{
        reset =0;
    }
    if(reset > 0){
        value.style.color = 'blue'
    }else if (reset<0){
        value.style.color =' red'
    }else{
        value;
    }
    value.textContent =reset; 
    })
})










