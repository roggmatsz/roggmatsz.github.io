<template>
  <div id="app">
    <nav>
      <div class="logo"></div>
      <div class="social">
        <img src="./assets/twitter-logo.svg" >
        <img src="./assets/linkedin-logo.svg" />
        <img src="./assets/github-logo.svg" />
      </div>
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

<script>
export default { }
</script>

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

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border: 1px solid black;
}
 nav h1 {
  display: block;
  transform: rotate(270deg);
  transform-origin: 100% 100%;
}
nav .social {
  display: flex;
  flex-direction: column;
}
nav .social img {
  width: 36px;
  height: 36px;
  margin-bottom: 20px;
} nav .social img:last-child {
  margin-bottom: 0;
}
nav .logo {
  width: 46px;
  height: 46px;
  border: 1px solid black;
}
</style>
