var count = 0;

$('.game-conteiner div').on('click', function(){
    var button = $('.game-conteiner div');
    count += 1; 

    if (count % 2 === 1) {
        if ($(button.is('div'))) {
            $(this).addClass('x');
        }
    } else {
        if ($(button.is('div'))) {
            $(this).addClass('o');
        }
    }
    // console.log(count)
})