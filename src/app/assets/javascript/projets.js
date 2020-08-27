$('#calendar').click(function () {
    $('#projetNom').html('Calendar')
    $('#projetPhoto').html('<img src="assets/outils/calendar03.png" class="img-projet" alt="screenshot du terminal avec le programe calendar.php lancé sur la première étape possible">')
    $('.projetText').html("Calendar à été fait en 4 heures en situation d'examen, utilisant la technologie PHP uniquement. Cela m'a semblé un intéressant exercice pour s'initier à l'algorithmie.<br>Le but était de passer une date via le terminal et d'afficher le calendrier correspondant: le mois demandé ou les 12 mois si seulement l'année est demandée.<br><a href='https://github.com/IriaAbu/calendar' id='decouvrir'>&#171; Découvrir ici &#187;</a>")
    $('.projetText').attr('id', 'calendarText');
})

$('#puissance').click(function () {
    $('#projetNom').html('Puissance 4')
    $('#projetPhoto').html('<img src="assets/outils/Puissance403.png" class="img-projet" alt="screenshot de la page du jeu Puissance 4 au marcage du gagnant">')
    $('.projetText').html("Avec du JQuery et un plugin obligatoire à créer, le fameux jeu Puissance 4 est l'un des projets dont je suis fière.<br><br>J'ai choisi d'utiliser pour cela une reproduction (ancient projet) de bootstrap fait par moi même en CSS/SASS<br><a href='https://github.com/IriaAbu/puissance4' id='decouvrir'>&#171; Découvrir ici &#187;</a>")
    $('.projetText').attr('id', 'puissanceText');
})

$('#snap').click(function () {
    $('#projetNom').html('Snapchat')
    $('#projetPhoto').html('<img src="assets/outils/snapchat01.png" class="img-projet" alt="screenshot de l\'application mobile snapchat sur l\'écrans de connexion">')
    $('.projetText').html('My_snapchat à été mon premier approche (et pour le moment le seul) aux applications mobiles.<br>Ce projet à faire en groupe de trois personnes à été conçu avec du React native. Nous avons réussi à créer une page de connexion et d\'inscription avec une navigation.<br>Pour la base de données, une API externe nous a été fournie.<br><a href="https://github.com/IriaAbu/iria-abu-snapchat" id="decouvrir">&#171; Découvrir ici &#187;</a>')
    $('.projetText').attr('id', 'snapText');
})

$('#bacchus').click(function () {
    $('#projetNom').html('Bacchus')
    $('#projetPhoto').html(' <img src="assets/outils/my_meetic01.png" class="img-projet" alt="screenshot du projet my_meetic à la page d\'inscription">')
    $('.projetText').html(" Voici Bacchus ! Un projet inspiré de meetic. Le but, créer un site de rencontres. Mon idée, m'inspirer des orgies grecques et romaines. Pourquoi? Je me suis plutôt demandé << et pourquoi pas? >><br>Pour cela j'ai créé ma propre base de données avec MySQL et le reste à été fait avec du PHP.<br>Il est l'un des premiers projets fait et il me plaît pour son esthétique.<br><a href='https://github.com/IriaAbu/baccus' id='decouvrir'>&#171; Découvrir ici &#187;</a>")
    $('.projetText').attr('id', 'bacchusText');
})

$('#paint').click(function () {
    $('#projetNom').html('Paint')
    $('#projetPhoto').html('<img src="assets/outils/my_paint.png" class="img-projet" alt="screenshot de la page my_paint">')
    $('.projetText').html("My_paint est un projet en JavaScript qui avait pour but de s'approcher le maximum possible du paint classique, avec ses fonctionnalités principales. Un vrai défi pour apprendre à contrôler les canvas.<br><a href='https://github.com/IriaAbu/my_paint' id='decouvrir'>&#171; Découvrir ici &#187;</a>")
    $('.projetText').attr('id', 'paintText');
})