<template>
  <div class="base">
    <section class="bio">
      Bio Goes Here
      <br />
      <img src="https://pbs.twimg.com/profile_images/1188630601315864576/mgUnBRaI_400x400.jpg" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
    <section class="content">
      Content Goes Here
    </section>
  </div>
</template>

<script>
export default { }
</script>

<style scoped lang="scss">
@import '../../node_modules/bulma/sass/utilities/mixins.sass';
.base {
  display: flex;
  flex-grow: 1;
}
.bio {
  overflow-y: scroll;
  flex-grow: 1;
  flex-basis: min-content;
}
.content {
  flex-grow: 1;
}
.bio, .content {
  padding: 2.5rem 1.25rem;
}
@include mobile {
  .bio {
    border-bottom: 1px solid black;
  }
}

@include touch {
  .base {
    flex-direction: column;
  }
}

@include tablet-only {
  .base {
    flex-direction: row;
  }
  .bio {
    flex-grow: 1;
    border-right: 1px solid black;
  }
  .content {
    flex-grow: 2;
  }
}

@include desktop {
  .content {
    flex-grow: 2;
  }
  .bio {
    border: 1px solid black;
    border-top: none;
    border-bottom: none;
  }
}
</style>
