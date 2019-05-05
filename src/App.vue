<template>
  <div id="app">
    <!-- TODO: Refactor nav into its own component -->
    <nav>
      <a class="logo" href="/">
        <img src="./assets/logo.png" />
      </a>
      <h1 class="is-size-4 is-hidden has-text-weight-bold">Rogger Matamoros</h1>
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
    <div class="wrapper">
      <!-- TODO: refactor both sections into own components -->
      <section class="bio">
        Bio Goes Here
      </section>
      <section class="content">
        <router-view/>
      </section>
    </div>
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

nav {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  a.logo img {
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

@include touch {
  #app {
    flex-direction: column;
  }
  nav {
    flex-direction: row;
    padding: 0;
    border-bottom: 1px solid black;
    .logo {
      height: 100%;
      padding: 0 1.25rem;
      display: flex;
      align-items: center;
    }
    .social {
      flex-direction: row;
      a {
        margin-bottom: 0;
        padding: 1.25rem;
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  .bio {
    border: none;
  }
}

@include tablet-only {
  .wrapper {
    border: 1px solid cyan;
    display: flex;
    .bio {
      border: 1px solid red;
      flex-grow: 1;
    }
    .content {
      flex-grow: 2;
    }
  }
}

@include desktop {
  nav {
    position: relative;
    h1 {
      position: absolute;
      top: 50%;
      width: 180px;
      display: block;
      transform: rotate(270deg);
    }
  }
  .wrapper {
    flex-grow: 1;
    display: flex;
  }
}
</style>
