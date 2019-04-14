<template>
  <div id="app">
    <nav>
      <a href="/">
        <img class="logo" src="./assets/logo.png" />
      </a>
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
    </section>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss">
@import '../node_modules/bulma/sass/utilities/mixins.sass';
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
    overflow-y: scroll;
    border: 1px solid black;
    border-top: none;
    border-bottom: none;
  }
  .content {
    flex-grow: 1;
  }
  .bio, .content {
    padding: 2.5rem 1.25rem;
  }
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  img.logo {
    width: 2.875rem;
    height: 2.875rem;
  }
  h1 {
    display: block;
    transform: rotate(270deg);
    transform-origin: 100% 100%;
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

@include touch {
  #app {
    flex-direction: column;
  }
  nav {
    flex-direction: row;
    padding: 0;
    .social {
      flex-direction: row;
      a {
        margin-bottom: 0;
        padding: 1rem;
        border: 1px solid red;
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>
