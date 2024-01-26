<template>
	<transition name="fade">
		<article v-cloak class="tunes-song">
			<div class="inside">
				<h2>{{ songify(song) }}</h2>

				<div class="player-wrapper">
					<img class="cover" v-if="song.cover" :src="song.cover" alt="cover image" />
					<audio controls :src="song.audioFile"></audio>
				</div>
			</div>
			<footer class="meta">
				{{ shorten(song.album) }}
			</footer>
		</article>
	</transition>
</template>

<script>
import { truncate } from 'lodash'

export default {
	props: {
		song: {
			type: Object
		}
	},
	methods: {
		songify(song) {
			return song.artist + ' - ' + song.name
		},
		shorten(str) {
			return truncate(str, { length: 55 })
		}
	}
}
</script>

<style lang="scss">
.tunes-song {
	text-align: left;
	width: 27em;
	margin: 2em 2em 2em 2em;
	position: relative;
	box-sizing: border-box;
	background-color: #262626d7;
	border-radius: 0.75em;
	display: grid;
	/*grid-template-columns: 50px 50px 50px 50px;
	grid-template-rows: auto;*/
	grid-template-areas: 
    "header header header header"
    "main main . aside"
    "footer footer footer footer";
}

.inside {
	padding: 1.35em 1.75em 1.75em;
}

h2 {
	font-size: inherit;
	line-height: 1.5em;
	margin: 0;
	grid-area: header;
}

.player-wrapper {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.5em;
}

img.cover{
	width: 5em;
	border: 3px solid white;
	border-radius: 0.5em;
	grid-area: main;
}

audio {
	outline: none;
	max-width: 14em;
	grid-area: aside;
}

audio::-webkit-media-controls-panel {
	background: #fff;
}

.meta {
	font-size: 0.75em;
	font-weight: 800;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.6);

	padding: 1.5em 2.25em;
	background: rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
	grid-area: footer;

}

// animation
[v-cloak] {
	display: none;
}

.fade-enter-active {
	transition: all 0.2s ease;
}

.fade-enter {
	transform: scale(0.9);
}

// responsive
@media screen and (max-width:950px) {
	.tunes-song{
		max-width: 22em;
	}
}

@media screen and (max-width: 520px) {
	.player-wrapper {
		audio {
			margin-top: 1.5em;
		}

		flex-direction: column;
	}
}
</style>