$('#paginaEnEsp').on('click', function () {
    // section1
    $('head title').html('Quién es Miriam?')
    $('#titre').html('Desarrolladora Web')
    $('#jeSuisComment1').html('<a href="#">TRABAJADORA</a><span id="span1">: A veces demasiado; se me olvida tomarme un descanso</span>')
    $('#jeSuisComment2').html('<a href="#">ORGANIZADA</a><span id="span2">: Por no decir maniática con ciertas cosas</span>')
    $('#jeSuisComment3').html('<a href="#">CRÍTICA</a><span id="span3">: Sobretodo conmigo misma</span>')
    $('#dLama').html('« Si crees que eres demasiado pequeño para cambiar algo, intenta dormir con un mosquito en tu habitación »<br>Dalaï Lama')

    // section21
    $('#labelPlusInfos').html('Más Inf')
    $('#Cmp').html('<img src="assets/outils/competences.png" alt="logo de cualificaciones" class="img-cv" id="img-comp">Cualificaciones:')
    
    // section22
    $('#status').html('Actualmente a la búsqueda de un contrato de profesionalización o de aprendizage')
    $('#ExpPr').html('<img src="assets/outils/experience.png" alt="logo de experiencias profesionales" class="img-cv">Experiencias:')
    $('#pttEnfanceXP').html('Asistente / Sustituta en escuela infantil (CDD)')
    $('#pttEnfanceXPInfos').html('Burlada, España / sept 2012 - juin 2013')
    $('#AuPairXP').html('Au pair')
    $('#AuPairXPInfos').html('Noisy-le-Grand, Francia / agosto 2013 - junio 2014')
    $('#capXP').html('Florista de Monceau Fleurs (Contrato de aprendizaje)')
    $('#capXPInfos').html('Montrouge, Francia / sept 2014 - junio 2016')
    $('#salarieXP').html('Florista de Monceau Fleurs (CDI)')
    $('#salarieXPInfos').html('Montrouge, Francia / julio 2016 - junio 2019')

    
    // section23
    $('#statusFormation').html('Actualmente en formación en la escuela Web@academie by EPitech de París')
    $('#Dpl').html('<img src="assets/outils/diplome.png" alt="logo de diploma" class="img-cv" id="img-diplome">Diplomas:')
    $('#bac').html('Bachillerato Artístico')
    $('#bacInfos').html('Pamplona, España // sept 2008 - junio 2010')
    $('#pttEnfance').html('Grado Superior de Educación Infantil')
    $('#pttEnfanceInfos').html('Pamplona, España // sept 2010 - junio 2012')
    $('#ega').html('Título de euskera EGA')
    $('#egaInfos').html('Pamplona, España // sept 2012 - junio 2013')
    $('#cap').html('Grado medio de venta, floristería')
    $('#capInfos').html('París, Francia // sept 2014 - junio 2016')
    $('#fleuristeDate').html('De septiembre 2014 a junio 2016')
    
    // section3
    $('#pdfCv').html('&#171; Descargue aquí mi CV &#187;')
    $('.section23 h2').html('Idiomas')
    $('#esp').html('<img class="img-langue" src="assets/outils/esp.png" alt="bandera española sobre mapa de España" title="Espagnol">100%<br>Idioma materno')

    // section4
    $('#projets').html('Mis Proyectos:')
    $('#puissance').html('4L')
    $('.section4 .label').html('Otros proyectos')
    $('#calendarText').html('En situación de examen, Calendar ha sido programado en 4 horas. Para ello, sólo el lenguage PHP estaba permitido. Me ha parecido un interesante ejercicio para iniciarse en el mundo del algoritmo. El objetivo era pasar una fecha a través del terminal y mostrar el calendario correspondiente: el mes o los 12 meses si solo el año es solicitado.<br><a href="https://github.com/IriaAbu/calendar" id="decouvrir">&#171; Descubrir aquí &#187;</a>')
    $('#calendar').click(function () {
        $('#calendarText').html('En situación de examen, Calendar ha sido programado en 4 horas. Para ello, sólo el lenguage PHP estaba permitido. Me ha parecido un interesante ejercicio para iniciarse en el mundo del algoritmo. El objetivo era pasar una fecha a través del terminal y mostrar el calendario correspondiente: el mes o los 12 meses si solo el año es solicitado.<br><a href="https://github.com/IriaAbu/calendar" id="decouvrir">&#171; Descubrir aquí &#187;</a>')
    })
    $('#puissance').click(function () {
        $('#projetNom').html('4 en Línea')
        $('#puissanceText').html('El famoso juego 4 en línea es uno de los proyectos del que me siento orgullosa. Con JQuery y un plugin obligatorio he escogido utilizar una reproduction (antiguo proyecto) de bootstrap hecho por mí misma en CSS/SASS<br><a href="https://github.com/IriaAbu/puissance4" id="decouvrir">&#171; Descubrir aquí &#187;</a>')
    })
    $('#snap').click(function () {
        $('#snapText').html('My_snapchat ha sido el primer contacto (y el único por el momento) que he tenido con la aplicación móbil.<br>Este proyecto ha realizar en grupo de tres personas ha sido diseñado con React nativo. Conseguimos crear una página "Conexión" y otra "Inscripción" con una navigación entre ellas.<br>Para la base de datos una API externa fue proporcionada.<br><a href="https://github.com/IriaAbu/iria-abu-snapchat" id="decouvrir">&#171; Descubrir aquí &#187;</a>')
    })
    $('#bacchus').click(function () {
        $('#bacchusText').html('He aquí Bacchus! Un proyecto inspirado de meetic.<br>El objetivo, crear una página web donde la gente pueda encontrarse. Mi idea, inspirarme de las orgías griegas y romanas. ¿Por qué? La pregunta que me hice fue más bien "¿y por qué no?".<br>Para ello creé mi propia base de datos con MySQL y el resto ha sido confeccionado con PHP.<br>Es uno de mis primeros proyectos y me gusta por su estética.<br><a href="https://github.com/IriaAbu/baccus" id="decouvrir">&#171; Descubrir aquí &#187;</a>')
    })
    $('#paint').click(function () {
        $('#paintText').html('My_paint es un proyecto hecho en JavaScript con el objetivo de acercarse lo máximo posible del paint clásico, con sus funcionalidades principales. Un auténtico desafío para aprender a controlar los canvas.<br><a href="https://github.com/IriaAbu/my_paint" id="decouvrir">&#171; Descubrir aquí &#187;</a>')
    })

    // section5
    $('.section5 h1').html('Dónde encontrarme')
    $('#mailTexte').html('Por email : miriam.olmedo-vera@epitech.eu')

    // section6
    $('.section6 h1').html('¿Desea saber más?')
    $('#titreRead').html('La lectura')
    $('#textRead').html('Leo sobretodo libros de ciencia ficción y fantasía.<br>Algunos de mis autores preferidos:<br>John Ronald Reuel Tolkien, Isaac Asimov y Connie Willis.<br><br>Mi primera novela fue : El Jardín Secreto,<br>de Frances Hodgson Burnett.<br>Me hizo caer en el placer de perderme en las historias escritas.')
    $('#titreEcriture').html('La escritura')
    $('#textWrite').html('No soy ni la mejor escritora del mundo ni la peor.<br>Escribo solo por placer y a golpes de inspiración. No es algo que haga bien si pienso demasiado en cómo hacerlo.<br>Mis historias son en general cortas y calificables en la fantasía o ciencia ficción.')
    $('#titreDanse').html('El baile')
    $('#textDanse').html('¡Nada como el baile para ponerme de buen humor!<br>Se me ve raras veces (en realidad nunca) bailar sola en medio de la pista, soy demasiado tímida. Pero con alguien que me guíe, al son de una salsa, merengue, bachata o cha-cha-cha la pista me atrapa y lo que me cuesta es dejarla.')
    $('#titreNature').html('La naturaleza')
    $('#textNature').html('¿Qué decir al respecto? Cuando vivía en España iba amenudo al monte, allí la tierra es verde.<br>Me siento yo misma en medio del bosque. Tal vez más que en ningún otro lado. Se respira mejor, me calmo, me canso al caminar y disfruto de la belleza al estado puro. Nada mejor para el cuerpo y el alma<br>Mi color preferido es el verde de las hojas de los robles o hayas cuando les da el sol.')

    // section7
    $('.section7 h1').html('Envíeme un email')
    $('#phraseContact').html('Contácteme, estoy a la escucha')
    $('#emailMail').html('Email:')
    $('#email').attr('placeholder', 'Escriba aquí su email')
    $('#messageMail').html('Mensaje:')
    $('#message').attr('placeholder', 'Escriba aquí su mensaje')
    $('#buttonEnvoyer').attr('value', "Enviar !")
})