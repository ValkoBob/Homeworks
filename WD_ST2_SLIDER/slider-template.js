const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
  '?image=1080',
  '?image=1079',
  '?image=1069',
  '?image=1063',
  '?image=1050',
  '?image=1039'
];

let numberOfImage = 0;

function enableSlider() {
  const slider = $('.slider-previews');
  for (let i = 0; i < IMAGES.length; i++) {
    let li = $("<li>").append(`<img src="${API_URL + SMALL_SIZE + IMAGES[i]}" alt="image">`);
    slider.append(li);
  }

  $(".slider-previews li img").on('click', function () {
    $(".slider-previews li").removeClass('current');
    $(this).parent("li").addClass('current');
    const path = $(this).attr('src').replace(SMALL_SIZE, BIG_SIZE);
    $(".slider-current img").attr('src', path);
    numberOfImage = IMAGES.indexOf(path.substring(path.indexOf('?image='), path.length));
  });

  $(document).on('keyup', function (e) {
    const frame = 'current';
    if (e.keyCode === 39) {
      numberOfImage++;
      if (numberOfImage >= IMAGES.length) {
        numberOfImage = 0;
      }
    }
    if (e.keyCode === 37) {
      numberOfImage--;
      if (numberOfImage < 0) {
        numberOfImage = IMAGES.length - 1;
      }
    }

    $('.slider-current').find('img').attr('src', `${API_URL}${BIG_SIZE}/${IMAGES[numberOfImage]}`);
    slider.find('.' + frame).removeClass(frame);
    $(slider.find('li')[numberOfImage]).attr('class', frame);
  });

}

$(document).ready(() => {
  enableSlider();
});
