<template>
	<ul class="song-list">
		<li>
			<tunes-song v-for="song in songs" :key="song.id" :song="song" />
		</li>
	</ul>
</template>

<script>
import TunesSong from '@/components/TunesSong.vue'

export default {
	components: {
		TunesSong
	},
	data() {
		return {
			songs: []
		}
	},
	mounted() {
		window.eventBus.on('new-songs-arrived', data => (this.songs = data))
	}
}
</script>

<style scoped>

ul {
	display: flex;
	margin: 3em 0 0 0;
	padding-left: 0;
	list-style: none;
	color: white;
	counter-reset: none;
}

li{
	display: inline-flex;
	flex-wrap: wrap;
}

@media screen and (max-width: 1860px) {
	li{
		display: flex;
		justify-content: center;
	}
}
</style>