app.controller('ownerdetailsCtrl', function($scope, $state, $timeout) {
    // ga('send', 'home');
    $('.modal').modal('close');
     
  $('.button-collapse1').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
     
    $('.parallax').parallax();
    $timeout(function() {
        $('.carousel-slider').carousel({
            full_width: true
        });

        $timeout(function(){

         $('.carousel-slider').height(350);
        }, 1500);

    }, 500)
$('select').material_select();

 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  $('.gallery').each(function() { // the containers for all your galleries
                    $(this).magnificPopup({
                        delegate: 'a', // the selector for gallery item
                        type: 'image',
                        gallery: {
                            enabled: true
                        }
                    });
                });

});
