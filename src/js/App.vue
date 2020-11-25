<template>
  <main class="container">
    <Header/>
    <router-view/>
  </main>
</template>

<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

  }
</style>
<script>
  import Header from "./components/Header";
  export default {
    components: {Header}
  }
</script>