var count = 0;

function winGame (){
    $('div.modal').addClass('open');
}

$('button.new-game').on('click', function(){
    location.reload();
})

$('.game-conteiner div').on('click', function(){
    
    if($(this).hasClass('')){
        if (count % 2 === 1) {
            $(this).addClass('x');
            count += 1; 
        } else {
            $(this).addClass('o');
            count += 1; 
        }
    }

    if ($('.game-conteiner div').eq(0).hasClass('x') &&  $('.game-conteiner div').eq(1).hasClass('x') && $('.game-conteiner div').eq(2).hasClass('x')) {
        $('.game-conteiner div').eq(0).addClass('win');
        $('.game-conteiner div').eq(1).addClass('win');
        $('.game-conteiner div').eq(2).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(0).hasClass('o') &&  $('.game-conteiner div').eq(1).hasClass('o') && $('.game-conteiner div').eq(2).hasClass('o')) {
        $('.game-conteiner div').eq(0).addClass('win');
        $('.game-conteiner div').eq(1).addClass('win');
        $('.game-conteiner div').eq(2).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(3).hasClass('x') &&  $('.game-conteiner div').eq(4).hasClass('x') && $('.game-conteiner div').eq(5).hasClass('x')) {
        $('.game-conteiner div').eq(3).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(5).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(3).hasClass('o') &&  $('.game-conteiner div').eq(4).hasClass('o') && $('.game-conteiner div').eq(5).hasClass('o')) {
        $('.game-conteiner div').eq(3).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(5).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(6).hasClass('x') &&  $('.game-conteiner div').eq(7).hasClass('x') && $('.game-conteiner div').eq(8).hasClass('x')) {
        $('.game-conteiner div').eq(6).addClass('win');
        $('.game-conteiner div').eq(7).addClass('win');
        $('.game-conteiner div').eq(8).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(6).hasClass('o') &&  $('.game-conteiner div').eq(7).hasClass('o') && $('.game-conteiner div').eq(8).hasClass('o')) {
        $('.game-conteiner div').eq(6).addClass('win');
        $('.game-conteiner div').eq(7).addClass('win');
        $('.game-conteiner div').eq(8).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(0).hasClass('x') &&  $('.game-conteiner div').eq(3).hasClass('x') && $('.game-conteiner div').eq(6).hasClass('x')) {
        $('.game-conteiner div').eq(0).addClass('win');
        $('.game-conteiner div').eq(3).addClass('win');
        $('.game-conteiner div').eq(6).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(0).hasClass('o') &&  $('.game-conteiner div').eq(3).hasClass('o') && $('.game-conteiner div').eq(6).hasClass('o')) {
        $('.game-conteiner div').eq(0).addClass('win');
        $('.game-conteiner div').eq(3).addClass('win');
        $('.game-conteiner div').eq(6).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(1).hasClass('x') &&  $('.game-conteiner div').eq(4).hasClass('x') && $('.game-conteiner div').eq(7).hasClass('x')) {
        $('.game-conteiner div').eq(1).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(7).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(1).hasClass('o') &&  $('.game-conteiner div').eq(4).hasClass('o') && $('.game-conteiner div').eq(7).hasClass('o')) {
        $('.game-conteiner div').eq(1).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(7).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(2).hasClass('x') &&  $('.game-conteiner div').eq(5).hasClass('x') && $('.game-conteiner div').eq(8).hasClass('x')) {
        $('.game-conteiner div').eq(2).addClass('win');
        $('.game-conteiner div').eq(5).addClass('win');
        $('.game-conteiner div').eq(8).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(2).hasClass('o') &&  $('.game-conteiner div').eq(5).hasClass('o') && $('.game-conteiner div').eq(8).hasClass('o')) {
        $('.game-conteiner div').eq(2).addClass('win');
        $('.game-conteiner div').eq(5).addClass('win');
        $('.game-conteiner div').eq(8).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(0).hasClass('x') &&  $('.game-conteiner div').eq(4).hasClass('x') && $('.game-conteiner div').eq(8).hasClass('x')) {
        $('.game-conteiner div').eq(0).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(8).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }
    
    if ($('.game-conteiner div').eq(0).hasClass('o') &&  $('.game-conteiner div').eq(4).hasClass('o') && $('.game-conteiner div').eq(8).hasClass('o')) {
        $('.game-conteiner div').eq(0).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(8).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(2).hasClass('x') &&  $('.game-conteiner div').eq(4).hasClass('x') && $('.game-conteiner div').eq(6).hasClass('x')) {
        $('.game-conteiner div').eq(2).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(6).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

    if ($('.game-conteiner div').eq(2).hasClass('o') &&  $('.game-conteiner div').eq(4).hasClass('o') && $('.game-conteiner div').eq(6).hasClass('o')) {
        $('.game-conteiner div').eq(2).addClass('win');
        $('.game-conteiner div').eq(4).addClass('win');
        $('.game-conteiner div').eq(6).addClass('win');
        $('.game-conteiner div').off();
        winGame();
    }

})