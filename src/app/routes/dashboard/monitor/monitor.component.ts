import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2';

@Component({
    selector: 'av-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.scss']
})
export class DashboardMonitorComponent implements OnInit {

    constructor() {
        G2.track(false);
    }

    ngOnInit() {
        this.renderChart1();
        this.renderChart2();
    }

    renderChart1() {
        const data = [{
            "month": "Jan",
            "city": "Tokyo",
            "temperature": 7
        }, {
            "month": "Jan",
            "city": "London",
            "temperature": 3.9
        }, {
            "month": "Feb",
            "city": "Tokyo",
            "temperature": 6.9
        }, {
            "month": "Feb",
            "city": "London",
            "temperature": 4.2
        }, {
            "month": "Mar",
            "city": "Tokyo",
            "temperature": 9.5
        }, {
            "month": "Mar",
            "city": "London",
            "temperature": 5.7
        }, {
            "month": "Apr",
            "city": "Tokyo",
            "temperature": 14.5
        }, {
            "month": "Apr",
            "city": "London",
            "temperature": 8.5
        }, {
            "month": "May",
            "city": "Tokyo",
            "temperature": 18.4
        }, {
            "month": "May",
            "city": "London",
            "temperature": 22.9
        }, {
            "month": "Jun",
            "city": "Tokyo",
            "temperature": 17.5
        }, {
            "month": "Jun",
            "city": "London",
            "temperature": 15.2
        }, {
            "month": "Jul",
            "city": "Tokyo",
            "temperature": 25.2
        }, {
            "month": "Jul",
            "city": "London",
            "temperature": 17
        }, {
            "month": "Aug",
            "city": "Tokyo",
            "temperature": 26.5
        }, {
            "month": "Aug",
            "city": "London",
            "temperature": 16.6
        }, {
            "month": "Sep",
            "city": "Tokyo",
            "temperature": 13
        }, {
            "month": "Sep",
            "city": "London",
            "temperature": 24.2
        }, {
            "month": "Oct",
            "city": "Tokyo",
            "temperature": 18.3
        }, {
            "month": "Oct",
            "city": "London",
            "temperature": 10.3
        }, {
            "month": "Nov",
            "city": "Tokyo",
            "temperature": 13.9
        }, {
            "month": "Nov",
            "city": "London",
            "temperature": 6.6
        }, {
            "month": "Dec",
            "city": "Tokyo",
            "temperature": 9.6
        }, {
            "month": "Dec",
            "city": "London",
            "temperature": 4.8
        }];

        var chart = new G2.Chart({
            container: 'c1',
            forceFit: true,
            height: 400
        });
        chart.source(data, {
            month: {
                range: [0, 1]
            }
        });
        chart.tooltip(true);
        chart.axis('temperature', {
            label: {
                formatter: function formatter(val) {
                    return val + '°C';
                }
            }
        });
        chart.line().position('month*temperature').color('city');
        chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
            stroke: '#fff',
            lineWidth: 1
        });
        chart.render();
    }

    renderChart2() {
        var data = [{
            gender: 'Capacity',
            path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
            value: 36
          }];
          
          var chart = new G2.Chart({
            container: 'c2',
            forceFit: true,
            height: 300,
            padding: 0
          });
          chart.source(data, {
            value: {
              min: 0,
              max: 100
            }
          });
          chart.legend(false);
          chart.axis(false);
          chart.interval().position('gender*value').color('gender')
            .shape('liquid-fill-gauge').style({
              lineWidth: 10,
              opacity: 0.75
            });
          
          data.forEach(function(row) {
            chart.guide().text({
              top: true,
              position: {
                gender: row.gender,
                value: 50
              },
              content: row.value + '%',
              style: {
                opacity: 0.75,
                fontSize: 40,
                textAlign: 'center'
              }
            });
          });
          
          chart.render();
    }
}
