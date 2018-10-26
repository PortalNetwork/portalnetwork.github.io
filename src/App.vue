<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["routerState"])
  }
};
</script>

<template>
	<div id="app">
		<!-- <router-link v-for="(item, i) in routerState" :to='item.url' :key='i'>
			{{ item.link }}
		</router-link> -->
		<transition mode='out-in'>
			<router-view></router-view>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}
.v-enter,
.v-leave-active {
  opacity: 0;
}
</style>

