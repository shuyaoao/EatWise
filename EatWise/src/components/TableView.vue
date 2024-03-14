<template>
    <div>
        <table>
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
/* Add component-specific styles here */
</style>