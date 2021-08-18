let dict = ['slide1','slide2','slide3','slide4','slide5',]
window.onload = function() {
    document.getElementById('slide1').style.display = 'block'
    document.getElementById('slide2').style.display = 'none'
    document.getElementById('slide3').style.display = 'none'
    document.getElementById('slide4').style.display = 'none'
    document.getElementById('slide5').style.display = 'none'
}

setInterval(
    // first arg to setInterval
    () => {    
        document.getElementById(dict[0]).style.display = 'none'
        document.getElementById(dict[1]).style.display = 'block'
        dict.push(dict.shift())
    }
    // second arg to setInterval
    , 2500);