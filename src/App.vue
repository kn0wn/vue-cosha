<template>
  <div id="app">
    <h1>vue-cosha</h1>

    <section class="display">
      <aside>
        <img
          src="https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=60"
          v-cosha="{ blur: '10px' }"
          alt="Image from unplash"
        />
      </aside>
      <aside>
        <img
          src="https://images.unsplash.com/photo-1557939403-1760a0e47505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
          v-cosha="{ blur: '15px' }"
        />
      </aside>
      <aside>
        <img
          src="https://images.unsplash.com/photo-1583272630857-5a0fd42e611e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
          v-cosha="{ blur: '20px' }"
        />
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.display {
  display: flex;
  justify-content: center;
  align-items: center;
}

.display aside {
  padding: 1em 2em;
}

.display aside img {
  max-width: 80vw;
}

@media screen and (max-width: 992px) {
  .display {
    flex-direction: column;
  }

  pre code {
    max-width: 85% !important;
  }
}

pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  max-width: 20%;
  margin: auto;
}
</style>
