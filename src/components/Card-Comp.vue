<template>
     <router-link :to="{name: 'employee', params: {id: employee.id}}" ></router-link>
     <img :src ="employee.img" :alt="employee.fullName">
     <h2>{{ employee.fullName }}</h2>
     <p>{{ employee.desc }}</p>
</template>
<script>
    export default{
        props: ["employee"]
    }
</script>