///* Ajax-запрос */
//
//function SendPost() // Наша функция, которая будет осуществлять ajax-отправку
//{
//   jQuery.ajax({	// Начала конструкции для работы с Ajax через jQuery
//            type: "GET", // Метод, которым получаем данные из формы
//            url: "/mail.php", // Обработчик формы. 
//            data: jQuery("#form").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
//            success: function(html) {	// функция выполняемая при успешном отправлении данных
//                 $("#myCallback").modal('hide');//закрываем окно
//                 $("#myrequery").modal('show');//закрываем окно
//                 //setTimeout("('#myrequery').modal('hide')",2000);
//                 setTimeout(function(){$("#myrequery").modal('hide')}, 3000);
//                 $(".form")[0].reset();// ресет формы
//
//            }
//    });
//}
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);
$('.carousel').carousel({
    interval: 6000
}); 
$(document).ready(function () {

    $('#openBtn').click(function () {
        $('#myModal').modal({
            show: true
        })
    });

        $(document).on('show.bs.modal', '.modal', function (event) {
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            $(this).css('z-index', zIndex);
            setTimeout(function() {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        });


});

  $(function() {
    //при нажатии на кнопку с id="save"
    $('.send').click(function() {
    var $form = $(this).parents('form');
      //переменная formValid
      var formValid = true;
      //перебрать все элементы управления input 
      $form.find('input').each(function() {
      //найти предков, которые имеют класс .form-group, для установления success/error
      var formGroup = $(this).parents('.form-group');
      //найти glyphicon, который предназначен для показа иконки успеха или ошибки
      var glyphicon = formGroup.find('.form-control-feedback');
      //для валидации данных используем HTML5 функцию checkValidity
      if (this.checkValidity()) {
        //добавить к formGroup класс .has-success, удалить has-error
        formGroup.addClass('has-success').removeClass('has-error');
        //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
        glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
      } else {
        //добавить к formGroup класс .has-error, удалить .has-success
        formGroup.addClass('has-error').removeClass('has-success');
        //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
        glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
        //отметить форму как невалидную 
        formValid = false;  
      }
    });
    //если форма валидна, то
    if (formValid) {
       jQuery.ajax({	// Начала конструкции для работы с Ajax через jQuery
            type: "POST", // Метод, которым получаем данные из формы
            url: "formdata.php", // Обработчик формы. 
            data: $form.serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
            success: function(html) {	// функция выполняемая при успешном отправлении данных
                 $("#myCallback").modal('hide');//закрываем окно
                 $("#myrequery").modal('show');//закрываем окно
                 //setTimeout("('#myrequery').modal('hide')",2000);
                 setTimeout(function(){$("#myrequery").modal('hide')}, 3000);
                 $(".has-feedback").removeClass('has-success');
                 $('input').val('');
            }
            });
    }
  });
});
$('.navbar-nav a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});