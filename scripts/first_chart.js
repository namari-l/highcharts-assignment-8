

Highcharts.chart('container', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Median Income based on Level of Education'
    },
    subtitle: {
        text:
            'Source: <a href="https://censusreporter.org/data/table/?table=B20004&geo_ids=04000US12&primary_geo_id=04000US12" target="_blank">US Census</a>'
    },
    xAxis: {
        type: 'Education '
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Income'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});
<figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
    </p>

<table id="datatable">
  <thead>
      <tr>
          <th></th>
          <th>Males</th>
          <th>Females</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <th>Less than high school graduate</th>
          <td>29 252</td>
          <td>20 748</td>
      </tr>
      <tr>
          <th>High school graduate</th>
          <td>31 711</td>
          <td>26 802</td>
      </tr>
      <tr>
          <th>Some college or associates degree</th>
          <td>37 236</td>
          <td>32 519</td>
      </tr>
      <tr>
          <th>Bachelors degrees</th>
          <td>51 381</td>
          <td>45 845</td>
      </tr>
      <tr>
          <th>Graduate or professional degree</th>
          <td>67 954</td>
          <td>59 116</td>

      </tr>
  </tbody>
</table>
</figure>



<p>There is a chart <em>above</em> this paragraph.</p>


<!-- add the SCRIPT elements BELOW this comment ...
ALL SCRIPTS GO BELOW THIS LINE -->

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

Highcharts.chart('container', {
    data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Median Income based on Level of Education'
    },
    subtitle: {
        text:
            'Source: <a href="https://censusreporter.org/data/table/?table=B20004&geo_ids=04000US12&primary_geo_id=04000US12" target="_blank">US Census</a>'
    },
    xAxis: {
        type: 'Education '
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Income'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});
