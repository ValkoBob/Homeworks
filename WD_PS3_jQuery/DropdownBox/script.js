const CHARACTERS = [
    {
        name: "Jenny Hess",
        src: "./images/Jenny_Hess.png"
    },
    {
        name: "Elliot Fu",
        src: "./images/Elliot_Fu.png"
    },
    {
        name: "Stevie Feliciano",
        src: "./images/Stevie_Feliciano.png"
    },
    {
        name: "Christian",
        src: "./images/Christian.png"
    },
    {
        name: "Matt",
        src: "./images/Matt.png"
    }
];

$(document).ready(() => {
    enableSelector();
});

function enableSelector(){
    let options = $('.options');
    let li = '<li></li>';
    CHARACTERS.forEach(function (item) {
        let name = item.name;
        options.append($(li).attr('value', name)
            .html(`<img src="${item.src}" alt="${name}"><label>${name}</label>`));
    });
    $('.options li').on('click', function() {
        let name = $(this).text();
        $('.first_block').css('color', 'black').html(`<img src="images/${name}.png" alt="${name}">
<label>${name}</label>`);
        $('.options').removeClass('show');
    });

    $('.first_block').on('click', function() {
        $('.options').toggleClass('show');
    });

    $('.options li').on('mouseover mouseout', function () {
        $(this).toggleClass('focused');
    });
}
