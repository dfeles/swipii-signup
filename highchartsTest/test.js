$(function () {

    Highcharts.setOptions({
        colors: ['#E0004D', '#E87722', '#5CB8B2', '#A51890', '#FCD757',
        '#058DC7', '#50B432', '#ED561B', '#DDDF00'],
        chart: {
            style: {
                fontFamily: 'Open Sans'
            }
        },
        tooltip: {
            backgroundColor: '#fff',
            borderColor: 'transparent',
            borderRadius: 10,
            borderWidth: 0
        },
        title: {
            style: {
                fontFamily: 'Poppins'
            }
        },

        navigation: {
            buttonOptions: {
                enabled: false
            }
        }
    });

    Highcharts.chart('container', {
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
        },
        yAxis: [{
            title: {
                text: null
            },
            labels:
            {
                enabled: false
            }
        },{
            title: {
                text: null
            },
            labels:
            {
                enabled: false
            }
        }],
        plotOptions: {
            spline: {
                marker: {
                    radius: 2
                },
                title: {
                    opacity: 0
                }
            }
        },
        series: [{
            type: 'column',
            name: 'Redeemed Rewards',
            data: [3, 2, 1, 3, 4, 1 ,10],
            yAxis: 1
        }, {
            type: 'spline',
            name: 'Views',
            data: [300, 267, 300, 633, 533, 174, 999],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1],
                fillColor: Highcharts.getOptions().colors[1]
            }
        },]
    });


// Build the chart
Highcharts.chart('pieChart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Redeemed rewards'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Reward 1 - Free Hot Drink',
        y: 132
      }, {
        name: 'Reward 2 - Free Cookie',
        y: 56
      }, {
        name: 'Reward 3 - Free Meal',
        y: 12
      }]
    }]
  });
})
