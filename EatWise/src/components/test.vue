<template>
    <div>
      <p>{{ name }}</p> 
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'; // Import ref and onMounted from Vue
  import { db } from '../fb.js';
  import { collection, doc, getDoc } from 'firebase/firestore';
  
  export default {
    setup() {
      const name = ref(''); // Define a reactive ref for user's name
  
      onMounted(async () => {
        const uid = 'johndoe@gmail.com'; // Example UID (replace with actual UID)
  
        try {
          const userRef = doc(db, 'users', uid); // Reference to user document
          const userDoc = await getDoc(userRef); // Get user document
  
          if (userDoc.exists()) {
            // Document exists, update name
            name.value = userDoc.data().name;
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error getting document:', error);
        }
      });
  
      return { name }; // Expose name to the template
    }
  };
  </script>