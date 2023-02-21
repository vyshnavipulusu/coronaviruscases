import DataBox from '@/components/DataBox/DataBox.vue';
import api from '@/api/mainApis.js';


export default {
  name: 'HomePage',
  components: {
    DataBox
  },
  data() {
    return {
      summaryData: {},
      globalData: {},
      countries: [],
      selected: '',
      selectedCountry: false,
      countryData: []
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
        if (result.data.Countries) {
          result.data.Countries.forEach(country => {
            this.countries.push({label: country.Country, value: country.Country});
          });
        }
        console.log('Country', this.countries[0].label);
        this.selected = this.countries[0].label;
        this.onSelectedCountry();
    },
    failure(data) {
        console.log(data);
    },
    onSelectedCountry() {
      const country = this.selected;
      const countryData = this.summaryData.Countries.find(data => data.Country === country);
      this.countryData = [
        { name: 'Confirmed', value: {new: countryData.NewConfirmed ? countryData.NewConfirmed : '0' , total: countryData.TotalConfirmed ? countryData.TotalConfirmed : '0'}},
        { name: 'Deaths', value: {new: countryData.NewDeaths ? countryData.NewDeaths : '0', total: countryData.TotalDeaths ? countryData.TotalDeaths : '0' }},
        { name: 'Recovered', value: {new: countryData.NewRecovered ? countryData.NewRecovered : '0', total: countryData.TotalRecovered  ? countryData.TotalRecovered : '0' }},
      ]
    }
  },
  created() {
    this.caseDetails();
  }
}