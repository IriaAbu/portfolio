$('#jeSuisComment1').click(function () {
    $('#span1').css('display', 'block')
    $('#span2').css('display', 'none')
    $('#span3').css('display', 'none')
})

$('#jeSuisComment2').click(function () {
    $('#span2').css('display', 'block')
    $('#span1').css('display', 'none')
    $('#span3').css('display', 'none')
})

$('#jeSuisComment3').click(function () {
    $('#span3').css('display', 'block')
    $('#span1').css('display', 'none')
    $('#span2').css('display', 'none')
})