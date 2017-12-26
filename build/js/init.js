(function($){
  $(function(){
    $('.button-collapse').sideNav();

    $('*[data-count]').each(function(){
      $this = $(this);
      var class_element = $this.data('count');
      $this.text( $( class_element ).length );
    });

    var checkWidthRelatedActions = (function(){
      var $window = $(window),
          $header = $('header'),
          bannerHeight = $('#banner').outerHeight(),
          $logo = $('#logo'),
          $menu = $('#menu'),
          menuOffsetBottom = $menu.height() + bannerHeight;
          $logoHeight = $logo.height(),
          $sidebar = $('.side-nav.fixed');

      return function(){
        if(window.innerWidth > 992 && $window.scrollTop() < bannerHeight ){
          $logo.height( $logoHeight - $window.scrollTop() );
          $header.css('top', -$window.scrollTop() + 'px');
          $sidebar.css('top', $logo.height() + 'px');
        } else if( window.innerWidth > 992 ){
          $logo.height( '100%' );
          $header.css('top', -bannerHeight+'px');
          $sidebar.css('top', $logo.height() + 'px');
        } else if( $window.scrollTop() < bannerHeight ){
          $header.css('top', -$window.scrollTop() + 'px');
          $sidebar.css('top', (menuOffsetBottom-$window.scrollTop()) + 'px');
        } else {
          $header.css('top', -bannerHeight + 'px');
          $sidebar.css('top', $menu.height() + 'px');
        }
      }
    }());
    checkWidthRelatedActions();
    $(window).resize( checkWidthRelatedActions );
    $(document).scroll( checkWidthRelatedActions );

    $('.button-collapse').sideNav({
       menuWidth: 250, // Default is 300
       edge: 'left', // Choose the horizontal origin
       closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
       draggable: true // Choose whether you can drag to open on touch screens,
       //onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
       //onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    });

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

    var url = $(".sidenav-control").html();
    console.log();
    $('a[href="'+url+'"]').addClass('green').parent().parent().parent().css('display','block').prev().addClass('active').parent().addClass('active');
    $('#search').on('keydown', function(){
      $('.search-result').slideDown();
    }).on('blur', function(){
      $('.search-result').slideUp();
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space
