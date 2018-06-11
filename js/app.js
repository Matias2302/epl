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
        labels: ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: "Total población privada de libertad",
            borderColor: '#98002f',

            data: [2791, 3148, 3131, 3145, 3403, 3185, 3350, 3636, 3992, 4117, 4369, 5042, 5912, 6903, 7139, 7004, 6789, 7213, 7739, 8324, 8775, 9185, 9413, 9688, 9727, 9937, 10303, 11005],
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
///////////////////CHART 4//////////////
var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      datasets: [{
            label: 'Interior',
            data: [0.1, 14, 29.7, 19.1, 8.5, 7.2, 9.7, 2.3, 9.5],
            backgroundColor: '#4b1d1d',
          }, {
                label: 'Maldonado y Canelones',
                data: [0.3, 12.3, 27.5, 15.4, 8.2, 7.1, 9.7, 2.3, 17.2],
                backgroundColor:'#0e2f44',
            }, {
            label: 'Montevideo',
            data: [0.5, 14.1, 25, 20.4, 7.4, 5.5, 8.9, 2, 16.3],
            backgroundColor:'#273e06',
            // Changes this dataset to become a line
            type: 'bar'
          }],
      labels: ['Sin instrucción', 'Primaria incompleta', 'Primaria completa', 'Ciclo básico incompleto', 'Ciclo básico completo', 'Secundaria segundo ciclo completo o incompleto', 'UTU completo o incompleto', 'Estudios terciarios completo o incompleto', 'NS/NC']
    },
    // Configuration options go here
    options: {

        title: {
     display: true,
     text: 'Porcentajes'
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
            backgroundColor:'#fa8072',
          }, {
            label: 'Plazas Educativas',
            data: [400, 614, 585, 466],
            
            backgroundColor:'#0e2f44',
            // Changes this dataset to become a line

          }],
      labels: ['Nº 2 Chacra Libertad','Nº 3 Libertad','Nº 4 Santiago Vázquez','Nº 5 Femenino','Nº 6 Punta de Rieles','Nº 7 Canelones','Nº 8 Domingo Arena','Nº 9 El Molino','Nº 10 Juan Soler','Nº 11 Salto-Tacuabé','Nº 12 Rivera','Nº 13 Maldonado','Nº 14 Colonia','Nº 15 Cerro Largo','Nº 16 Paysandú','Nº 17 Lavalleja','Nº 18 Durazno','Nº 19 Río Negro','Nº 20 Salto','Nº 21 Artigas','Nº 22 Rocha','Nº 23 Treinta y Tres','Nº 24 Soriano','Nº 25 Flores','Nº 26 Tacuarembó','Nº 27 Artigas - Pintado Grande','Nº 28 Rivera - Paso Ataque','Nº 29 Florida']
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
//var ctx = document.getElementById('myChart4').getContext('2d');
//var chart = new Chart(ctx, {
    // The type of chart we want to create
    //type: 'line',
    // The data for our dataset
    //data: {
      //datasets: [{
        //    label: 'Hombres',
        //    data: [10429, 10566, 10493,9775]
        //  }, {
        //    label: 'Mujeres',
        //    data: [609, 614, 585, 466],
        //    borderColor: '#98002f',
            // Changes this dataset to become a line
        //    type: 'line'
        //  }],
    //  labels: ['Ene-17','May-17','Ago-17','Dic-17']
//    },
    // Configuration options go here
//    options: {
//        layout:{
//            padding:{
//                left:50,
//                right:50,
//                top:50,
//                bottom:50
//            }
//        }
//    }
//});

////////////////////////////////////////
///////////////////CHART 5//////////////
var ctx = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      datasets: [{
            label: 'Interior',
            data: [22, 14, 2.4, 19.9, 11.8, 0.3, 7.7, 3.9, 0.5, 1.5, 0.2, 2.2, 2.5, 4.1, 6, 1],
            backgroundColor: '#4b1d1d',
          }, {
                label: 'Maldonado y Canelones',
                data: [30.9, 20.9, 1.5, 11.3, 11, 0.1, 8, 1.7, 0.1, 0.5, 0.1, 0.9, 4.1, 3.1, 4.6, 1.1],
                backgroundColor:'#0e2f44',
            },{
                label: 'Montevideo',
                data: [45.7, 13.1, 1.3, 9.6, 9.5, 0.1, 0.9, 2.2, 0.1, 0.2, 0.1, 0.7, 1.3, 2.3, 6.3, 6.4],
                backgroundColor:'#273e06',
              }, {
            label: 'Total',
            data: [36.9, 14.8, 1.6, 12.6, 10.4, 0.2, 4, 2.5, 0.2, 0.6, 0.1, 1.1, 2.1, 2.9, 5.9, 4],
            backgroundColor:'#c36728',
            // Changes this dataset to become a line
            type: 'bar'
          }],
      labels: ['Rapiña o tentativa de rapiña', 'Hurto', 'Copamiento', 'Homicidio', 'Narcotráfico/estupefacientes/tráfico', 'Porte de arma', 'Delito sexual/proxeneta/atentado al pudor', 'Agresiones/Lesiones', 'Deacato','Violencia doméstica','Accidente de tránsito','Delitos Económicos/Estafa','Receptación','Otro','Varios','NS/NC']
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
var ctx = document.getElementById('myChart4').getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data : {
    datasets: [{
        data: [9775, 466],
        backgroundColor: [
                "#c36728",
                "#273e06"]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Hombres',
        'Mujeres'
    ]
},
options: {

    title: {
 display: true,
 text: 'Valores de Diciembre de 2017'
}
}
});
///////////////////CHART 1 DISPLAY//////////////
$('.chart_button').click(function(){
    var chartID = $(this).attr('data-chart');

    if($('#'+chartID).hasClass('chart_container_selected')){
            return false;
    }

    $('.chart_container').removeClass('chart_container_selected');
    $('.chart_button').removeClass('active');
    $(this).addClass('active');
    $('#'+chartID).toggleClass('chart_container_selected');
});
