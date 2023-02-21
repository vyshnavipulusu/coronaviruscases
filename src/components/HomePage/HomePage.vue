<template>
  <div style="margin-top: 50px">
    <div style="text-align: center; margin-bottom: 18%;">
      <h2 style="margin-bottom: 30px; font-weight: bold;">Country Wise Report</h2>
      <select
        v-model="selected"
        class="border p-3 rounded"
        @change="onSelectedCountry()"
      >
            <!-- <option value="" disabled selected>Select Country</option> -->
            <option v-for="(country, index) in countries" v-bind:key="index" :value="country.value">
            {{ country.label }}
            </option>
        </select>


        <div v-for="(info, index) in countryData" v-bind:key="index" style="margin-top: 30px;">
          <DataBox :info="info"></DataBox>
        </div>  

    </div>
  </div>
</template>

<script src="./HomePage.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
