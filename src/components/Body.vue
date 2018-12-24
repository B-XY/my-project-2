<template>
  <div>
    <Menu></Menu>
    <!--<router-view name="Menu"></router-view>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './Menu'
  // import Home from './Home'

  export default {
    components: {Menu},

  }
</script>

<style>

</style>
