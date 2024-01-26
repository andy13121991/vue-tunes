<template>
  <div id="app">
    <header>
      <div class="powered-by">
        <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">
        <p class="made-by">Powered by Vue.js</p>
      </div>
    </header>
    <main class="content">
      <section class="tunes">
        <h1>iTunes</h1>
        <search-form />
        <song-list />
      </section>
    </main>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import SongList from '@/components/SongList.vue'

export default {
  name: 'App',
  components: {
    SearchForm,
    SongList
  }
}
</script>

<style src="@/assets/scss/main.scss" lang="scss"></style>