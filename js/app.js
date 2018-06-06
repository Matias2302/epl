////////////////////SCROLL/////////////////////
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".menu").addClass("colorScroll");
    } else {
        $(".menu").removeClass("colorScroll");
    }
});

///////////////////CHART 1//////////////
var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: "Total población privada de libertad",
            borderColor: 'rgb(255, 99, 132)',
            data: [4117, 4369, 5042, 5912, 6903, 7139, 7004, 6789, 7213, 7739, 8324, 8775, 9185, 9413, 9688, 9727, 9937, 10303, 11005],
        }]
    },
    // Configuration options go here
    options: {
        layout:{
            padding:{
                left:50,
                right:50,
                top:50,
                bottom:50
            }
        }
    }
});
///////////////////CHART 2//////////////
var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      datasets: [{
            label: 'Hombres',
            data: [10429, 10566, 10493,9775]
          }, {
            label: 'Mujeres',
            data: [609, 614, 585, 466],
            borderColor: 'rgb(255, 99, 132)',
            // Changes this dataset to become a line
            type: 'line'
          }],
      labels: ['Ene-17','May-17','Ago-17','Dic-17']
    },
    // Configuration options go here
    options: {
        layout:{
            padding:{
                left:50,
                right:50,
                top:50,
                bottom:50
            }
        }
    }
});

////////////////////////////////////////

///////////////////CHART 1//////////////
$('#chart_1').click(function(){
    if($('#chart1').css('display')== 'none'){
        $('#chart1').show();
    }
    else{
        $('#chart1').hide();
    }
});

///////////////////CHART 2//////////////
$('#chart_2').click(function(){
    if($('#chart2').css('display')== 'none'){
        $('#chart2').show();
    }
    else{
        $('#chart2').hide();
    }
});

///////////////////CHART 2//////////////
$('#chart_3').click(function(){
    if($('#charts').css('display')== 'none'){
        $('#charts').show();
    }
    else{
        $('#charts').hide();
    }
});
