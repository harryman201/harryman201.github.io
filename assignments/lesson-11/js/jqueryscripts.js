$(function () {

  //INDEX JS
  $('.coreValues').prepend("<li><strong>This is brand new!</strong></li>");
  $("<li><strong>This is also great!</strong></li>").prependTo('.coreValues');

  //Logo Opacity
  $('#alcoveLogo').css('opacity', '0.3');

  //box2 text color
  $('.box2 a').css('color', 'white');

  // Fill in the text fields with red
  var toggleStyle = function () {
    var inputFields = $('input[type="text"]');
    if (inputFields.css('background-color') === 'rgb(225, 0, 0)') {
      inputFields.css('background-color', 'rgb(225, 225, 255)');
    } else {
      inputFields.css('background-color', 'rgb(225, 0, 0)');
    }
  }
  $('#ReqAQuoteBtn').click(toggleStyle);

  // Fill in the empty field
  var nameVal = $('input[name="nameVal"]');

  function FillEmpty() {
    if (nameVal.val() == '') {
      nameVal.val('John Doe')
    }
  }
  $('#ReqAQuoteBtn').click(FillEmpty);

  //ANIMATED MENU JS
  $('.navigation > li').hover(function () {
    $(this).addClass('openSesame');
  }, function () {

    $(this).removeClass('openSesame');
  })

  //DROP DOWN MENU JS
  $('.dropdownMenu > li').hover(function () {
    $(this).children("ul").slideToggle(200);
  })

  //FRUIT BASKET JS
  var fruitBasket = [{
      title: 'Apples',
      quantity: 20
  },
    {
      title: 'Oranges',
      quantity: 25
                     },
    {
      title: 'Kiwis',
      quantity: 50
                     },
    {
      title: 'Strawberries',
      quantity: 45
                     },
    {
      title: 'Bananas',
      quantity: 10
                     },
    {
      title: 'Mangoes',
      quantity: 5
                     },
    {
      title: 'Tomatoes',
      quantity: 30
                     }
                    ];

  // Your jQuery code goes here

  $.each(fruitBasket, function (index, element) {
    $('.fruits').append('<li>We have ' + element.quantity + " " + element.title + '</li>');
  })

  $('.fruits > li').each(function (index, element) {
    $(element).css('background-color', 'rgb(100,200,0)');
  })

  //INSERT HTML JS
  var box1 = $('.box1')
  var box2 = $('.box2')

  function LeftToRight() {
    if (box2.html() == '') {
      box2.html(box1.html())
      box1.html('');
    }
  }
  $('#LeftToRight').click(LeftToRight);

  function RightToLeft() {
    if (box1.html() == '') {
      box1.html(box2.html())
      box2.html('');
    }
  }
  $('#RightToLeft').click(RightToLeft);

  //TOGGLE BUTTON JS
  $('.toggleBtn').click(function () {
    $(this).toggleClass("toggleOn");
  })

})
