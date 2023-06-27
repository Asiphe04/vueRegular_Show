<template>
    <div v-if="employee" class="employee-details">
        <img :src="employee.img" alt="employee.fullName">

        <div>
        <h2>{{ employee.fullName }}</h2>
    <p>Description: {{ employee.desc }}</p>
   
    </div>
    </div>
   
   
</template>
<script>
export default{
    props: ["id"],
    computed:{
        employee(){
            return this.$store.state.employee;
        }
    },
    mounted(){
        this.$store.dispatch("getEmployee",this.id);
    }
}
</script>