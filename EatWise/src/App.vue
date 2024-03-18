<template>
  <div id="app">
    <div class = "header">EatWise</div>
    <div style="display: flex; align-items: center;">
      <h1 style="color: #0C6D59; font-family: Inter; padding-left: 20px;">What's in My Fridge</h1>
      <DateView style = "margin-left: auto;"/>
      <h1 style = "padding-right: 100px;"></h1>
    </div>
    <TableView :columns="tableColumns" :items="tableData" />
    <!-- <test /> -->
  </div>
</template>

<script>
import test from './components/test.vue';
import DateView from './components/DateView.vue';
import TableView from './components/TableView.vue';
export default {
  name: 'App',
  components: {
    TableView,
    DateView
  },
  data() {
    return {
      tableColumns: [
        { key: 'itemName', label: 'Item Name' },
        { key: 'Quantity', label: 'Quantity' },
        { key: 'Units', label: 'Units' },
        { key: 'DaysLeft', label: 'Days Left' }
      ], 
      tableData: []
    };
  }
};
</script>

<style>
  .app{
    background-color: #FFF6E9;
  }

  .header {
    width: 100%; 
    height: 50px; 
    background: #0C6D59;
    padding: 2px;
    font-family: Inter;
    font-weight: 700;
    word-wrap: break-word;
    position: relative;
    color: white;
    font-size: 36px;
    text-align: left;
  }

  .header::before {
    content: ''; 
    background-image: url(assets/logo.png);
    width: 32px;
    height: 32px;
    display: inline-block; 
    margin-right: 10px;
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%); 
    left: 10px; 
  }
</style>

