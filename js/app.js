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
///////////////////CHART 3//////////////
var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
      datasets: [{
            label: 'Población',
            data: [67, 55, 1065, 3745, 308, 604, 1105, 13, 16, 103, 9, 604, 835, 159, 156, 326, 200, 154],
            backgroundColor:'red',
          }, {
            label: 'Plazas Educativas',
            data: [400, 614, 585, 466],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor:'blue',
            // Changes this dataset to become a line

          }],
      labels: ['Nº 2 Chacra Libertad','Nº 3 Libertad','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº','Nº']
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
///////////////////CHART 4//////////////
var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      datasets: [{
            label: 'Interior',
            data: [0.1, 14, 29.7, 19.1, 8.5, 7.2, 9.7, 2.3, 9.5],
            backgroundColor: 'red',
          }, {
                label: 'Maldonado y Canelones',
                data: [0.3, 12.3, 27.5, 15.4, 8.2, 7.1, 9.7, 2.3, 17.2]
            }, {
            label: 'Montevideo',
            data: [0.5, 14.1, 25, 20.4, 7.4, 5.5, 8.9, 2, 16.3],
            borderColor: 'rgb(255, 99, 132)',
            // Changes this dataset to become a line
            type: 'bar'
          }],
      labels: ['Sin instrucción', 'Primaria incompleta', 'Primaria completa', 'Ciclo básico incompleto', 'Ciclo básico completo', 'Secundaria segundo ciclo completo o incompleto', 'UTU completo o incompleto', 'Estudios terciarios completo o incompleto', 'NS/NC']
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
///////////////////CHART 1 DISPLAY//////////////
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

///////////////////CHART 3//////////////
$('#chart_3').click(function(){
    if($('#chart3').css('display')== 'none'){
        $('#chart3').show();
    }
    else{
        $('#chart3').hide();
    }
});

///////////////////////////////////////
$('#chart_4').click(function(){
    if($('#chart4').css('display')== 'none'){
        $('#chart4').show();
    }
    else{
        $('#chart4').hide();
    }
});
