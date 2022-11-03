$('.add-btn').click(function(){
    $('.subcontent').prepend(
        `<div class="maincontent__item">
            <img src="img/mainitem1.png" alt="">
            <br>
            <a>Song's name</a>
            <div class="mc-item__content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button class="erase">Remove</button>
            </div>
        </div>`);
});


$(document).on('click','.erase', function(){
    $(this).parent().parent().remove();
});
