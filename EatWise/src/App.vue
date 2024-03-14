<template>
  <div id="app">
    <h1>What's in My Fridge</h1>
    <!-- <DateView /> -->
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
    TableView
  },
  data() {
    return {
      tableColumns: [
        { key: 'itemName', label: 'Item Name' },
        { key: 'Quantity', label: 'Quantity' },
        { key: 'Units', label: 'Units' },
        { key: 'DaysLeft', label: 'Days Left' }
      ]
    };
  }
};
</script>
