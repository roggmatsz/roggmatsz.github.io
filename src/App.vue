<template>
  <div id="app">
    <nav>
      <img class="logo" src="./assets/logo.png" />
      <h1 class="is-hidden-mobile">Rogger Matamoros</h1>
      <div class="social">
        <a href="https://twitter.com/roggmatz">
          <img src="./assets/twitter-logo.svg" />
        </a>
        <a href="https://linkedin.com/in/roggmatz">
          <img src="./assets/linkedin-logo.svg" />
        </a>
        <a href="https://github.com/roggmatsz">
          <img src="./assets/github-logo.svg" />
        </a>
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
  padding: 2.5rem;
  border: 1px solid black;
  img.logo {
    width: 2.875rem;
    height: 2.875rem;
  }
  .social {
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 1.25rem;
    }
    img {
      width: 2.25rem;
      height: 2.25rem;
    }
    a:last-child {
      margin-bottom: 0;
    }
  }
}
@media screen and (max-width: 60rem) {
  #app {
    flex-direction: column;
    nav {
      padding: 1.5rem;
    }
    nav, nav .social {
      flex-direction: row;
    }
    nav .social a {
      margin-right: 1.25rem;
      margin-bottom: 0;
    }
    nav .social a:last-child {
      margin-right: 0;
    }
  }
}

</style>
