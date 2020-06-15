
$(document).ready(function() {
/////////////////////// grid & List view Buttons ////////////////////////////////
    if ($('.girdView').hasClass('gridInactive')){
        $('#gridImg').attr('src','./images/grid-inactive.png');
    }
    $('.girdView').click(function(){
        $('.listView').removeClass('gridInactive')
        $('#listImg').attr('src','./images/list-active.png');
        $('#gridImg').attr('src','./images/grid-inactive.png');
        $(this).addClass('gridInactive');
    });
    $('.listView').click(function(){
        $('.girdView').removeClass('gridInactive')
        $('#gridImg').attr('src','./images/grid-active.png');
        $('#listImg').attr('src','./images/list-inactive.png');
        $(this).addClass('gridInactive');
    });
    /////////////////////// making search reset btn  ////////////////////////////////
    
    $( ".searchInpt input" ).on('input',function(e){
        $(".searchInpt .input-group-btn img").css('display','block');
      });
      $(".searchInpt .input-group-btn").click(function(){
        $( ".searchInpt input" ).val('');
        $(".searchInpt .input-group-btn img").css('display','none');
      });
/////////////////////// making filterSearch  ////////////////////////////////
    $( ".filterSearch").click(function(){
        $( ".searchPop").fadeToggle();
    });
    // reset filter pop up values 
     $(".resetFilter").click(function(){
        $( ".searchPop input[type='text']" ).val('');
        $( ".searchPop input[type='number']" ).val('');
        $( ".searchPop input[type='date']" ).val('');
        $('.FilterBtn').text('Any Status');
        
     });
/////////////////////// make text of dropmenu with value selected  ////////////////////////////////
     $(".dropdown-item").click(function(){
         var x= $(this).text();
        $('.FilterBtn').text(x);
 });
 $('#example').DataTable();
 

});
$(document).ready(function() {

    $('#myCarouselArticle').carousel({
                    interval: 5000
            });
      
    });