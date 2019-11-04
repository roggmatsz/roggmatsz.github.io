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
  border: 1px solid red;
  flex-grow: 1;
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

@include touch {
  .base {
    flex-direction: column;
  }
}

@include tablet-only {
  .bio {
    border: 1px solid red;
    flex-grow: 1;
    flex-basis: 50%;
  }
  .content {
    flex-grow: 1;
  }
}
</style>
