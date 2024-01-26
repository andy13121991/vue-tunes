<template>
    <section class="tunes">
		<h1>iTunes</h1>
		<search-form />
		<song-list />
	</section>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import SongList from '@/components/SongList.vue'

export default {
	components: {
		SearchForm,
		SongList
	}
}
</script>