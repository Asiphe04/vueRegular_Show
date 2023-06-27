<template>
     <img :src ="employees.img" :alt="employees.fullName">
     <h2>{{ employees.fullName }}</h2>
     <p>{{ employees.desc }}</p>
</template>
<script>
    export default{
        props: ["employees"]
    }
</script>