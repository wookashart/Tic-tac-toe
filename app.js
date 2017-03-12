var count = 0;

function winGame (){
    $('div.modal').addClass('open');
}

$('button.new-game').on('click', function(){
    location.reload();
})

var $field = $('.game-conteiner div');

$field.on('click', function(){
    
    if($(this).hasClass('')){
        if (count % 2 === 1) {
            $(this).addClass('x');
            count += 1; 
        } else {
            $(this).addClass('o');
            count += 1; 
        }
    }

    if ($field.eq(0).hasClass('x') &&  $field.eq(1).hasClass('x') && $field.eq(2).hasClass('x')) {
        $field.eq(0).addClass('win');
        $field.eq(1).addClass('win');
        $field.eq(2).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(0).hasClass('o') &&  $field.eq(1).hasClass('o') && $field.eq(2).hasClass('o')) {
        $field.eq(0).addClass('win');
        $field.eq(1).addClass('win');
        $field.eq(2).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(3).hasClass('x') &&  $field.eq(4).hasClass('x') && $field.eq(5).hasClass('x')) {
        $field.eq(3).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(5).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(3).hasClass('o') &&  $field.eq(4).hasClass('o') && $field.eq(5).hasClass('o')) {
        $field.eq(3).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(5).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(6).hasClass('x') &&  $field.eq(7).hasClass('x') && $field.eq(8).hasClass('x')) {
        $field.eq(6).addClass('win');
        $field.eq(7).addClass('win');
        $field.eq(8).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(6).hasClass('o') &&  $field.eq(7).hasClass('o') && $field.eq(8).hasClass('o')) {
        $field.eq(6).addClass('win');
        $field.eq(7).addClass('win');
        $field.eq(8).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(0).hasClass('x') &&  $field.eq(3).hasClass('x') && $field.eq(6).hasClass('x')) {
        $field.eq(0).addClass('win');
        $field.eq(3).addClass('win');
        $field.eq(6).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(0).hasClass('o') &&  $field.eq(3).hasClass('o') && $field.eq(6).hasClass('o')) {
        $field.eq(0).addClass('win');
        $field.eq(3).addClass('win');
        $field.eq(6).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(1).hasClass('x') &&  $field.eq(4).hasClass('x') && $field.eq(7).hasClass('x')) {
        $field.eq(1).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(7).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(1).hasClass('o') &&  $field.eq(4).hasClass('o') && $field.eq(7).hasClass('o')) {
        $field.eq(1).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(7).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(2).hasClass('x') &&  $field.eq(5).hasClass('x') && $field.eq(8).hasClass('x')) {
        $field.eq(2).addClass('win');
        $field.eq(5).addClass('win');
        $field.eq(8).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(2).hasClass('o') &&  $field.eq(5).hasClass('o') && $field.eq(8).hasClass('o')) {
        $field.eq(2).addClass('win');
        $field.eq(5).addClass('win');
        $field.eq(8).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(0).hasClass('x') &&  $field.eq(4).hasClass('x') && $field.eq(8).hasClass('x')) {
        $field.eq(0).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(8).addClass('win');
        $field.off();
        winGame();
    }
    
    if ($field.eq(0).hasClass('o') &&  $field.eq(4).hasClass('o') && $field.eq(8).hasClass('o')) {
        $field.eq(0).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(8).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(2).hasClass('x') &&  $field.eq(4).hasClass('x') && $field.eq(6).hasClass('x')) {
        $field.eq(2).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(6).addClass('win');
        $field.off();
        winGame();
    }

    if ($field.eq(2).hasClass('o') &&  $field.eq(4).hasClass('o') && $field.eq(6).hasClass('o')) {
        $field.eq(2).addClass('win');
        $field.eq(4).addClass('win');
        $field.eq(6).addClass('win');
        $field.off();
        winGame();
    }

})