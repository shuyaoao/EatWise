<template>
    <div>
      <h3>Today's Date: {{ currentDate }}</h3>
      <p></p>
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
  /* Add your component-specific styles here */
  </style>