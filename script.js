  function run(){
    const html = document.getElementById("html")
    const css = document.getElementById("css")
    const js = document.getElementById("js")
    const result = document.getElementById("result").contentWindow.document;
        result.open();
        result.writeln(
    html.value +
    
    "<style>"+ css.value +"</style>" +
    "<script>"+ js.value +"</script>"
    
    
        );
    
        result.close();
    }

    const copyBtn = document.getElementById('copyBtn');
    const saveBtn = document.getElementById('saveBtn');
    const lockBtn = document.getElementById('lockBtn');
    const copyTextarea = document.getElementById('html')
    copyBtn.addEventListener('click', () => {
        copyTextarea.select();
        document.execCommand('copy');
    });

    saveBtn.addEventListener('click', () => {
               alert("data saved")
    });

    let isLocked = false;
lockBtn.addEventListener('click', () => {
    if (isLocked) {
        document.getElementById("html").disabled = true;
        lockBtn.innerText = 'Unlock';
    } else {
        document.getElementById("html").disabled = false;
        lockBtn.innerText = 'Lock';
    }
    isLocked = !isLocked;
});


const buttons = document.querySelectorAll('.btn')
const bgc1 = document.querySelector('#box1')
let bgc2 = document.querySelector('#box2')
let bgc3 = document.querySelector('#box3')
const input1 = document.querySelector('.textarea1')
const input2 = document.querySelector('.textarea2')
const input3 = document.querySelector('.textarea3')
buttons.forEach((btns)=>{

btns.addEventListener('click', (e)=>{

    if(e.target.id === 'red'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
        input1.style.backgroundColor = 'mintcream'
        input2.style.backgroundColor = 'mintcream'
        input3.style.backgroundColor = 'mintcream'      
    }

    if(e.target.id === 'green'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'yellow'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'purple'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'gray'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'aqua'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'blue'){
        bgc1.style.backgroundColor = e.target.id
        bgc2.style.backgroundColor = e.target.id
        bgc3.style.backgroundColor = e.target.id
    }
})
})