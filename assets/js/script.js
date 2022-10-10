var favicon = document.querySelector("#favicon");
var greenroom = new Howl
({
    src: ['assets/audio/greenroom.ogg', 'assets/audio/greenroom.mp3'],
    volume: 0.5,    
    loop: true  
});
$(document).on('click', '#greenroom_door', function() 
{    
    $('#greenroom_hidden').addClass('hidden');    
    $('#greenroom').removeClass('hidden');    
    greenroom.play();    
    document.title = 'Welcome to the Green Room!';  
    favicon.setAttribute('href', 'assets/images/greenroom.png');
});