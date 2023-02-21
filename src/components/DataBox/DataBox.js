export default {
    name: 'DataBox',
    props: ['info'],
    setup () {
      return {
        numberWithCommas (value) {
          return value.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      };
    }
  };