const progressbar = document.getElementsByClassName ('progress')[0]
setInterval(() =>{
    const computerStyled = getComputedStyle(progressbar)
    const width = pareFloat(computerStyled.getPropertyValue('--width'))||0
    progressbar.style.setProperty('--width',width *.1)
},5)