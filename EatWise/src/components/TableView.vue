<template>
    <div id = "app">
        <div class = "table-container">
            <table class = "table">
                <thead>
                    <tr>
                        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td>{{ item.itemName }}</td>
                        <td>{{ item.Quantity }}</td>
                        <td>{{ item.Units }}</td>
                        <td>{{ item.DaysLeft }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/fb.js'; // Import your initialized Firestore instance
export default {
    name: 'TableView',
    props: {
        columns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            items: []
        };
    },
    async mounted() {
        await this.fetchItems();
    },
    methods: {
        async fetchItems() {
            const user = 'johndoe@gmail.com'; // User's email
            const fridgeRef = collection(db, 'users', user, 'myFridge');
            const q = query(fridgeRef);

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.items.push({
                    id: doc.id,
                    itemName: doc.data().name,
                    Quantity: doc.data().quantity,
                    Units: doc.data().unit,
                    DaysLeft: doc.data().daysTillExpiry
                });
            });
        }
    }
};
</script>

<style>
    #app {
        background-color: #FFF6E9;
        min-height: 100vh;
    }

    .table-container {
        padding: 20px;
    }

    .table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 10px;
        border-radius: 21px;
        border: 1px solid #0C6D59;
        padding: 8px 16px;
    }

    .table tr, .table td, .table th {
        text-align: center;
        font-family: inter;
    }

    .table th {
        color: black;
        border-bottom: 3px solid #0C6D59;
        border-spacing: 3cm;
    }

    .table td {
        color: black;
        padding: 3px 1px;
        border-top: 1px solid #0C6D59;
    }

    .table tr:first-child td{
        border-top: none; 
    }
</style>
