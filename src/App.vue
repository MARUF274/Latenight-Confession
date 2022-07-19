<template>
  <LinkSection/>
  <CustomNav title="Blom ada nama"/>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomNav from './components/nav.vue'

export default {
  name: 'App',
  components: {
    CustomNav,
    HelloWorld
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body{
  background-image: url("assets/img.png");
  background-repeat: no-repeat;
background-size:cover;
background-position:center;
}
</style>
