var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: "My First dataset",

            borderColor: 'rgb(255, 99, 132)',
            data: [4117, 4369, 5042, 5912, 6903, 7139, 7004, 6789, 7213, 7739, 8324, 8775, 9185, 9413, 9688, 9727, 9937, 10303, 11005],
        }]
    },

    // Configuration options go here
    options: {}
});
$('#chart_1').click(function(){
    if($('#charts').css('display')== 'none'){
        $('#charts').show();
    }
    else{
        $('#charts').hide();
    }
});
