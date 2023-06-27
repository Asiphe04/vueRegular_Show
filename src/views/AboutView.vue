<template>
  <div class="about">
    <h1>About The Park</h1>
    <img src="https://i.postimg.cc/hPKbfJdq/tp2.png" alt="The park Image">
    <p>The Park is not an ordinary park. It is filled with fantastical and extraordinary elements, blending the everyday world with bizarre occurrences and supernatural phenomena. Throughout the series, Mordecai and Rigby encounter a wide range of characters, both human and non-human, who add to the absurdity and fun of their adventures.</p>
  <img src="https://i.postimg.cc/WzvmmzYg/tp3.png" alt="The park Image">
  <p>The duo often finds themselves in strange situations, whether it's battling supernatural creatures, traveling through time, or dealing with the consequences of their slacker behavior. They frequently rely on their wits, friendship, and their unique talents to navigate through the challenges they face.</p>
  <img src="https://i.postimg.cc/dtnRdq2Z/tp1.png" alt="The park Image">
  <p>Despite everything the park has become a home to these workers.</p>

  <!-- Employees -->
  <h1>Our Employees</h1>
  <div v-if="employees" class="container">
  <CardComp v-for="employee of employees"   :key="employee.id" :employee="employee"/>
  </div>
  <div v-else>Error:404</div>
  <!-- End of employees -->
  </div>
</template>
<script>
  import CardComp from "@/components/Card-Comp.vue"
  export default {
    computed:{
      employees(){
        return this.$store.state.employees
      },
      mounted(){
        this.$store.dispatch("getEmployees")
      },
      components: {CardComp}
    }
  }
</script>
