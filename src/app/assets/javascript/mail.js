
let nbrClick = 0
$('.titreImgMail').on('click', function () {
    nbrClick++
    if (nbrClick % 2 == 0) {
        $('#adresseMail').css('display', 'none')
    } else {
        $('#adresseMail').css('display', 'block')
    }
})