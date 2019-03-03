<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <section class="bio">
      Bio Goes Here
    </section>
    <section class="content">
      <router-view/>
      Content Goes Here
    </section>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100%;

  nav {
    flex-grow: 0;
  }
  .bio {
    flex-grow: 1;
  }
  .content {
    flex-grow: 2;
  }
}
</style>
