var elSer = document.querySelector('.ser')
var elNum = document.querySelector('.num')
var elSerLab = document.querySelector('.lab1')   
var elNumLab = document.querySelector('.lab2')


function fn(event) {
    event.preventDefault()
    var ser = elSer.value
    var num = elNum.value
    
    if (ser.length == 2 && ser[0].toLowerCase() !== ser[0] && ser[1].toLowerCase() !== ser[1]) {
        elSer.style.background = 'green'
        elSerLab.textContent = 'Passport seriyasi togri'
    }
    else{
        elSer.style.background = 'red'
        elSerLab.textContent = 'Passport seriyasini togri kiriting'
    }
    if(num.length == 7 && num * 1 >= 0){
        elNum.style.background = 'green'
        elNumLab.textContent = 'Passport raqami togri'
    }
    else{
        elNum.style.background = 'red'
        elNumLab.textContent = 'Passport raqamini togri kirirying'
    }
}