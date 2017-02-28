var count = 0;

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
})