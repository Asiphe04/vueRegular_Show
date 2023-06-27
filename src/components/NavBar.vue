<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script >
    export default{}
</script>
<style scopped>
nav{
    padding: 5px;
    top: 0;
    background-color: #d0d0d0;
}
a{
    margin: 10px;
    text-decoration: none;
}
</style>