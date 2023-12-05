<template>
    <div>
        <p><NuxtLink to="/secret">Go to Secret</NuxtLink></p>
      <button  class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"  @click="signOut" v-if="firebaseUser">Sign Out</button>
     <div v-if="firebaseUser">
      <client-only>
        <pre>
        {{  firebaseUser }}
      </pre>
      </client-only>
    </div>
    <div v-else>
      User is signed out!
    </div>
    </div>
  </template>
  
  <script setup>
  
  const firebaseUser = useFirebaseUser();
  const credentials = ref();

  console.log("--------APP-------", firebaseUser)


  const signOut = async() => {
     credentials.value =  await signOutUser();
  }
  
  </script>