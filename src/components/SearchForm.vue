<template>
	<form @submit.prevent="getMusic()">
		<div class="field is-grouped">
			<p class="control is-expanded">
				<input 
				@keyup.enter="search()" 
				v-model="query" 
				type="text" 
				ref="input" 
				placeholder="Search Music" 
				class="input" />
			</p>
			<p class="control">
				<a v-on:click="search()" class="button is-info">
				Search
				</a>
			</p>
		</div>
	</form>
</template>

<script>
import axios from 'axios'
import { debounce } from "lodash"

export default {
  name: 'SearchForm',
  data() {
		return {
			query: '',
			limit: 10
		}
	},
	methods: {
		getMusic() {
			axios
			.get(
					`https://itunes.apple.com/search
						?term=${encodeURI(this.query)}
						&limit=${this.limit}
						&entity=musicTrack`
				)
				.then(response => {
					let iTunesSongs = response.data.results
						.filter(song => song.kind === 'song')
						.map(song => this.extractData(song))

					window.eventBus.emit('new-songs-arrived', iTunesSongs)
				})
		},
		extractData({
			trackId: id,
			artistName: artist,
			previewUrl: audioFile,
			artworkUrl100: cover,
			trackName: name,
			collectionName: album
		}) {
			return { id, artist, audioFile, cover, name, album }
		},
		search: debounce(function() {
			this.getMusic()
		},)
	},
	mounted() {
		this.$refs.input.focus()
	}
}
</script>


<style src="@/assets/scss/main.scss" lang="scss"></style>
