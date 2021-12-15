function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background ='#ffd6c6'
    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background ='#e75d37'
    }else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background ='#1d0b06'
    }
}