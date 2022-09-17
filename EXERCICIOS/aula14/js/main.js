function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txt-ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {    
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('rad-sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
                img.setAttribute('src', 'img/hm_cr.jpg')
            }else if(idade < 50) {
                img.setAttribute('src', 'img/hm_ad.jpg')
            }else{
                img.setAttribute('src', 'img/hm_id.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 18) {
                img.setAttribute('src', 'img/ml_cr.jpg')
            }else if(idade < 50) {
                img.setAttribute('src', 'img/ml_ad.jpg')
            }else{
                img.setAttribute('src', 'img/ml_id.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}