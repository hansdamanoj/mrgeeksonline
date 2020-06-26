$( document ).ready(function() {
 
 /* ==================================
    =          Option Demo              =
    =====================================*/
    var $demoOption = $('.demo-option-container')

    $(".support-container").hide();
    $(".share-container").show();

    $('.quick-option').on('click', function (e) {
        e.preventDefault(),
        function () {
            $(".share-container").hide();
            $(".support-container").show();
            $demoOption.toggleClass('open')
        }()
    });


    $('.quick-option-share').on('click', function (e) {
        e.preventDefault(),
        function () {
            $(".support-container").hide();
            $(".share-container").show();
            $demoOption.toggleClass('open')
        }()
    });


});