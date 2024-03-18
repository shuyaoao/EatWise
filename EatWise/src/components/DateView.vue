<template>
  <div>
    <h3 class="date-view">Today's Date: {{ currentDate }}</h3>
  </div>
</template>
  
  <script>
  export default {
    name: 'TodayDate',
    data() {
      return {
        currentDate: ''
      };
    },
    mounted() {
      // Get today's date
      this.currentDate = new Date().toLocaleDateString();
    }
  };
  </script>
  
<style>

  .date-view {
    color: #0C6D59; 
    text-emphasis: 1px;
    font-family:inter; 
    border: 1px solid #0C6D59; 
    padding: 4px 8px;
    border-radius: 21px;
  }
</style>