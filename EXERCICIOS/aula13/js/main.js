function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Hrs.`
    if(hora >= 0 && hora <= 12){
        img.src='img/foto_manha.jpg'
        document.body.style.background = '#5a468b'
    }else if(hora >= 12 && hora < 18){
        img.src='img/foto_tarde.jpg'
        document.body.style.background = '#c63300'
    }else{
        img.src='img/foto_noite.jpg'
        document.body.style.background = '#0d1716'
    }
}