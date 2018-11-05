import { Component, OnInit } from '@angular/core';
import * as G2 from '@antv/g2';

@Component({
  selector: 'av-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class DashboardAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    G2.track(false);
    this.renderChart1();
    this.renderChart2();
    this.renderChart3();
  }
  renderChart1() {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ];
    const chart = new G2.Chart({
      container: 'c1',
      width: 600,
      height: 300
    });
    chart.source(data);
    chart.interval().position('genre*sold').color('genre')
    chart.render();
  }

  renderChart2() {
    var data = [{
      item: 'evnet1',
      count: 40,
      percent: 0.4
    }, {
      item: 'evnet2',
      count: 21,
      percent: 0.21
    }, {
      item: 'evnet3',
      count: 17,
      percent: 0.17
    }, {
      item: 'evnet4',
      count: 13,
      percent: 0.13
    }, {
      item: 'evnet5',
      count: 9,
      percent: 0.09
    }];
    const chart = new G2.Chart({
      container: 'c2',
      forceFit: true,
      height: 300
    });
    chart.source(data, {
      percent: {
        formatter: function formatter(val) {
          val = val * 100 + '%';
          return val;
        }
      }
    });
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6, startAngle: 0, endAngle: 2 * Math.PI
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    // 辅助文本
    chart.guide().html({
      position: ['50%', '50%'],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">Event<br><span style="color:#8c8c8c;font-size:20px">200</span></div>',
      alignX: 'middle',
      alignY: 'middle'
    });
    var interval = chart.intervalStack().position('percent').color('item').label('percent', {
      formatter: function formatter(val, item) {
        return item.point.item + ': ' + val;
      }
    }).tooltip('item*percent', function (item, percent) {
      percent = percent * 100 + '%';
      return {
        name: item,
        value: percent
      };
    }).style({
      lineWidth: 1,
      stroke: '#fff'
    });
    chart.render();
  }

  renderChart3() {
    var data = [{
      event: 'evnet1',
      population: 182
    }, {
      event: 'evnet2',
      population: 234
    }, {
      event: 'evnet3',
      population: 290
    }, {
      event: 'evnet4',
      population: 104
    }, {
      event: 'evnet5',
      population: 131
    }];
    var chart = new G2.Chart({
      container: 'c3',
      forceFit: true,
      height: 300
    });
    chart.source(data);
    chart.axis('event', {
      label: {
        offset: 12
      }
    });
    chart.coord("rect", { radius: 0, innerRadius: 0, startAngle: 0, endAngle: 0 }).transpose();
    chart.interval().position('event*population');
    chart.render();
  }
}
