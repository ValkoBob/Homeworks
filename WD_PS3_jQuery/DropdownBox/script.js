const CHARACTERS = [
  {
    name: "Jenny Hess",
    src: "./images/Jenny Hess.png"
  },
  {
    name: "Elliot Fu",
    src: "./images/Elliot Fu.png"
  },
  {
    name: "Stevie Feliciano",
    src: "./images/Stevie Feliciano.png"
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

function enableSelector() {
  const options = $('.options');
  const div = '<div></div>';
  CHARACTERS.forEach(function (item) {
    let name = item.name;
    options.append($(div).append(`<img src="${item.src}" alt="${name}"><label>${name}</label>`));
  });

  $('.options div').on('click', function () {
    let name = $(this).text();
    $('.selected').css('color', 'black').html(`<img src="images/${name}.png" alt="${name}">
    <label>${name}</label>`);
    $(options).hide();
  });

  $('.selected').on('click', function () {
    $(options).toggle();
  });

  $('.options div').hover(function () {
    $(this).toggleClass('focused');
  });

  $(document).on('click', function (e) {
    const selectBox = $('.selectBox');
    if (!selectBox.is(e.target) && selectBox.has(e.target).length === 0) {
      $(options).hide();
    }
  });
}
