$(document).ready(function () {
  $.getJSON('date.json', function (votingData) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      let table = [['Option number', 'value']];
      for (let key in votingData['voting']) {
        if (votingData['voting'].hasOwnProperty(key)) {
          let element = [key, votingData['voting'][key]];
          table.push(element);
        }
      }
      let data = google.visualization.arrayToDataTable(table);
      let options = {
        title: 'Most popular Steel Hunter.'
      };
      let chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
      chart.draw(data, options);
    }
  });
});