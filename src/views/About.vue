<template>
  <div class="base">
    <section class="bio">
      Bio Goes Here
      <br />
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
  flex-grow: 1;
  overflow-y: scroll;
}
.content {
  flex-grow: 1;
}
.bio, .content {
  padding: 2.5rem 1.25rem;
}

@include touch {
  .base {
    flex-direction: column;
  }
  .bio {
    border-right: 1px solid black;
  }
}

@include tablet-only {
  .base {
    flex-direction: row;
  }
  .bio {
    flex-grow: 1;
  }
  .content {
    flex-grow: 1;
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
