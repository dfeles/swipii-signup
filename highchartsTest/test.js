$(function () {

    Highcharts.setOptions({
        colors: ['#E87722', '#E0004D', '#5CB8B2', '#A51890', '#FCD757',
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
            name: 'Number of Transactions',
            data: [30, 26, 30, 63, 53, 14, 99],
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
