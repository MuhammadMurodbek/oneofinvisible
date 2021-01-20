var options = {
      chart: {
        type: "area",
        height: 300,
        foreColor: "#999",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        }
      },
      colors: ['#00E396', '#0090FF'],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Total Views',
        data: generateDayWiseTimeSeries(0, 18)
      }, {
        name: 'Unique Views',
        data: generateDayWiseTimeSeries(1, 18)
      }],
      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetX: 14,
          offsetY: -5
        },
        tooltip: {
          enabled: true
        }
      },
      grid: {
        padding: {
          left: -5,
          right: 5
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      fill: {
        type: "solid",
        fillOpacity: 0.7
      }
    };

    var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

    chart.render();

    function generateDayWiseTimeSeries(s, count) {
      var values = [[
        4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
      ], [
        2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
      ]];
      var i = 0;
      var series = [];
      var x = new Date("11 Nov 2012").getTime();
      while (i < count) {
        series.push([x, values[s][i]]);
        x += 86400000;
        i++;
      }
      return series;
    }
// news

// news

var sidebar = document.querySelector('.sidebar-side');
var btn = document.querySelector('.switch-btn');
var i=0;
window.document.querySelectorAll('.form-ul').forEach( function(element) {
  element.classList.add('d-none');
});;

btn.addEventListener('click', function(ter){
	i++;
	if(i%2===1){
		sidebar.style.width = '270px';
     var lis = document.querySelectorAll('.form-ul');
        lis.forEach( function(li) {
        li.classList.remove('d-none');
    });
      document.querySelector('#ssidebar').classList.add('pl-4');
     document.querySelector('#ssidebar').classList.replace('align-items-center','align-items-start');
	}else{
		sidebar.style.width='60px';
    var lis = document.querySelectorAll('.form-ul');
    lis.forEach( function(li) {
        li.classList.add('d-none');
    });
    document.querySelector('#ssidebar').classList.remove('pl-4');
    document.querySelector('#ssidebar').classList.replace('align-items-start','align-items-center');
	}
	sidebar.style.transitionDuration = '0.4s';
});

var sidebarShowBtn = document.getElementById('sidebarShowBtn');
var sideLeft = document.getElementById('sideLeft');
var btnIcon = document.querySelector('#sidebarShowBtn i');
var k=0;
sidebarShowBtn.addEventListener('click',function(btn){
  k++;
  if(k%2==1){
    sideLeft.setAttribute('style','left:0; transition-duration:0.5s');
    btnIcon.classList.replace('fa-chevron-left', 'fa-chevron-down');
  }else {
     sideLeft.setAttribute('style','left:-70px; transition-duration:0.5s');
      btnIcon.classList.replace('fa-chevron-down', 'fa-chevron-left');
  }
});


 var imgLocation ="";
      var defaultbtn = document.querySelector('#default-btn');
      var custombtn = document.querySelector('#custom-btn');
      var img = document.querySelector('img');
      function defaultBtnActive(){
        defaultbtn.click();
      }
      defaultbtn.addEventListener("change",function(){
        var file = this.files[0];
        if(file){
          var reader = new FileReader();
          reader.onload=function(){
          var result = reader.result;
          img.src=result;
          imgLocation = result;
          }
          reader.readAsDataURL(file);
        }
      });