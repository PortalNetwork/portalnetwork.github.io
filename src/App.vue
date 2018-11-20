<script>
export default {};
</script>

<template>
	<div id="app">
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

