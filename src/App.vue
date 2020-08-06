<template>
  <div id="app">
      <router-view name="header"/>
      <transition name="fade" mode="in-out">
        <router-view/>
      </transition>
      <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
