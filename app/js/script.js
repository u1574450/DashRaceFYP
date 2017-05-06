function chartTable(data,ChartType)
{
var c=ChartType;
var jsonData=data;
google.load("visualization", "1", {packages:["corechart"], callback: drawVisualization});
google.load('visualization', '1', {packages:['timeline'], callback: drawVisualization});
google.load('visualization', '1', {packages:['gauge'], callback: drawVisualization});
google.load('visualization','1', {packages: ['table'], callback: drawVisualization});

function drawVisualization() 
{
var data = new google.visualization.DataTable();
data.addColumn('string', 'driver');
data.addColumn('number', 'Car Number');




$.each(jsonData, function(i,jsonData)
{
var name=jsonData.driver;
var CarNum=jsonData.num;



/*var name=jsonData.name
var value=jsonData.value;*/

/*data.addRows([ [name, value]]);*/
data.addRows([ [name,CarNum ]]);
});



var options = {
title : "Word Population Density",
colorAxis: {colors: ['#54C492', '#cc0000']},
datalessRegionColor: '#dedede',
defaultColor: '#dedede'
};

var chart;
if(c=="Table")
chart = new google.visualization.Table(document.getElementById('RaceTable'));




chart.draw(data, options);
}
}


function chartGauge(data,ChartType)
{
var c=ChartType;
var jsonData=data;
google.load('visualization', '1', {packages:['gauge'], callback: drawVisualization});

function drawVisualization() 
{
var data = new google.visualization.DataTable();
data.addColumn('number', 'RPM/100');
data.addColumn('number', 'MPH');
data.addColumn('number', 'Fuel');
data.addColumn('number', 'TempEngine');



/*data.addColumn('string', 'name');
data.addColumn('number', 'Population density');*/



$.each(jsonData, function(i,jsonData)
{
var rpm=jsonData.rpm;
var mph=jsonData.mph;
var fuel=jsonData.fuel;
var temp=jsonData.temp;



/*var name=jsonData.name
var value=jsonData.value;*/

/*data.addRows([ [name, value]]);*/
data.addRows([ [rpm, mph, fuel, temp]]);
});



var options = {
title : "Word Population Density",
colorAxis: {colors: ['#54C492', '#cc0000']},
datalessRegionColor: '#dedede',
defaultColor: '#dedede'
};

var chart;
if(c=="Gauge")
chart = new google.visualization.Gauge(document.getElementById('CarData'));

data.setValue(0, 0 , 40 + Math.round(30 * Math.random()));
data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
data.setValue(0, 2, 95 + Math.round(10 * Math.random()));
data.setValue(0, 3, 40 + Math.round(10 * Math.random()));

chart.draw(data, options);



}
}





function chartBarMat(data,ChartType)
{
var c=ChartType;
var jsonData=data;
google.load("visualization","1", {packages: ["bar"], callback: drawVisualization});

function drawVisualization() 
{
var data = new google.visualization.DataTable();
data.addColumn('string', 'driver');
data.addColumn('number', 'throttle');
data.addColumn('number', 'brake');




/*data.addColumn('string', 'name');
data.addColumn('number', 'Population density');*/



$.each(jsonData, function(i,jsonData)
{
var name = jsonData.driver;
var throttle = jsonData.throttle;
var brake = jsonData.brake;




data.addRows([ [name,throttle, brake ]]);
});



var options = {
title : "Brakes Throttle Pilots",
colorAxis: {colors: ['#54C492', '#cc0000']},
datalessRegionColor: '#dedede',
defaultColor: '#dedede',
 bars: 'horizontal'

};



var chart;
if(c=="Bar")
chart = new google.charts.Bar(document.getElementById('bar_mat'));


/*data.setValue(1, 1, Math.round(30 * Math.random()));
data.setValue(1, 2, Math.round(30 * Math.random()));


data.setValue(2, 1, Math.round(30 * Math.random()));
data.setValue(2, 2, Math.round(30 * Math.random()));


data.setValue(3, 1, Math.round(30 * Math.random()));
data.setValue(3, 2, Math.round(30 * Math.random()));*/

for (var i = 0; i < data.getNumberOfRows(); ++i) {
        for (var j = 1; j < data.getNumberOfColumns(); ++j) {
          var num = Math.floor(Math.random() * 100);
          data.setValue(i, j, num);
        }
      }

chart.draw(data, options);


}  

} 


 $(document).ready(refresh = function () 
{
url='data/raceData.json';



	
	

		ajax_data('GET',url, function(data)
		{

			chartTable(data,"Table");
			chartGauge(data,"Gauge");
			chartBarMat(data,"Bar");
			
			
		}
		)
	
}	
);
var interval = 1000 * 60 * 1;
	setInterval(refresh, 1000);
	
