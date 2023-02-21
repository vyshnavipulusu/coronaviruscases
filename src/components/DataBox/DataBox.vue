<template>
    <div class="mb-4" style="width: 50%;margin: auto; color: black;">
        <div class="shadow text-center rounded" style=" padding: 15px;background-color: #CDDC39;">
            <h3 style="font-weight: bold;">{{ info.name }}</h3>

            <div class="">
                <span style="font-weight: bold;">New:</span>
                {{ numberWithCommas(info.value.new) }}
            </div>
            <div class="">
                <span  style="font-weight: bold;">Total:</span>
                {{ numberWithCommas(info.value.total) }}
            </div>
        </div>
    </div>

  </template>
  
  <script src="./DataBox.js"> </script>