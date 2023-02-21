import DataBox from '@/components/DataBox/DataBox.vue';
import api from '@/api/mainApis.js';
var moment = require('moment');

export default {
  name: 'MainPage',
  components: {
    DataBox
  },
  data() {
    return {
      summaryData: {},
      globalData: {},
      dashboardData: []
    }
  },
  methods: {
    caseDetails(){
      api.coronaCasesDetails((result) => {
        this.success(result);
      }, this.failure)
    },
    success(result) {
        this.globalData = result.data.Global;
        this.summaryData = result.data;
        this.dashboardData = [
          { name: 'Confirmed', value: {new: this.globalData.NewConfirmed ? this.globalData.NewConfirmed : '0' , total: this.globalData.TotalConfirmed ? this.globalData.TotalConfirmed : '0'}},
          { name: 'Deaths', value: {new: this.globalData.NewDeaths ? this.globalData.NewDeaths : '0', total: this.globalData.TotalDeaths ? this.globalData.TotalDeaths : '0' }},
          { name: 'Recovered', value: {new: this.globalData.NewRecovered ? this.globalData.NewRecovered : '0', total: this.globalData.TotalRecovered  ? this.globalData.TotalRecovered : '0' }},
        ];
      
        console.log('globalData', this.globalData);
        console.log('summaryData', this.summaryData);
        console.log('dashboardData', this.dashboardData);
        console.log('countries', this.countries);
    },
    failure(data) {
        console.log(data);
    },
    getDateInHumanFormat() {
      console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); // "Sunday, February 14th 2010, 3:25:50 pm"
      return moment().format("dddd, MMMM Do YYYY");
    }
  },
  created() {
    this.caseDetails();
  }
}