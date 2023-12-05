<template>
   <div>
    <div>
        Secret
    </div>
   
        <pre>
        {{  firebaseUser }}
      </pre>
    
   </div>
</template>


<script setup>
definePageMeta({
    middleware:['auth']
})

const firebaseUser = useFirebaseUser();
</script>