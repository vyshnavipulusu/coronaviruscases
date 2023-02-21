<template>
  <div class="main">
    <div style="text-align: center; margin-top: 20px;">
      <h2>Corona World Statistics</h2>
      <p><span style="font-weight: bold;">Date:</span>{{ getDateInHumanFormat() }}</p>
      <div v-for="(info, index) in dashboardData" v-bind:key="index">
        <DataBox :info="info"></DataBox>
      </div>   
    </div>
  </div>
</template>

<script src="./MainPage.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
