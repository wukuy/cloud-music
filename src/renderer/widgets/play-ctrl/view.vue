<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
import Playlist from "@widgets/play-list/view.vue";
import { remote } from 'electron'

export default {
    data() {
        return {
            play: false,
			playDom: "",
			showPlaylist: false
        };
    },
    methods: {
        pauseAndPlay() {
            this.play = !this.play;
			this.play ? this.playDom.play() : this.playDom.pause();
		},
		playEnd() {
			this.downPlay()
		},
		downPlay() {
			let { playList, id } = this.$store.state
			let idx = playList.findIndex(item => item.id === id)

			if(~idx) {
				if((idx + 1) >= playList.length) {
					this.$store.commit("setMusicInfo", playList[0]);	
				}else {
					this.$store.commit("setMusicInfo", playList[idx + 1]);
				}
			}
		},
		upPlay() {
			let { playList, id } = this.$store.state
			let idx = playList.findIndex(item => item.id === id)

			if(~idx) {
				if((idx - 1) < 0) {
					this.$store.commit("setMusicInfo", playList[playList.length - 1]);	
				}else {
					this.$store.commit("setMusicInfo", playList[idx - 1]);
				}
			}
		},
		showSongWord() {
			const win = new remote.BrowserWindow({
				width: 1024,
				height: 200
			})
			const { href } = this.$router.resolve({
				path: '/lyric-bar'
			})

			win.loadURL(`${location.origin}/${href}`)
		}
    },
    mounted() {
        this.playDom = this.$refs.playDom;
    },
    computed: {
        musicInfo() {
            return this.$store.state;
        },
        musicUrl() {
            if (this.playDom) this.playDom.load();
            return this.$store.state.url;
        }
    },
    components: {
        Playlist
    }
};
</script>

