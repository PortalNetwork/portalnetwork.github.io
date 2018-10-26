<script>
import Header from './Header.vue';
import Hero from './Hero.vue';
import What from './What.vue';
import Bns from './Bns.vue';
import Repositories from './Repositories.vue';
import Chain from './Chain.vue';
import Solution from './Solution.vue';
import Roadmap from './Roadmap.vue';
import NewsFeed from './NewsFeed.vue';
import Partnership from './Partnership';
import Footer from './Footer.vue';
export default {
	components : {
		Header,
		Hero,
		What,
		Bns,
		Repositories,
		Chain,
		Solution,
		Roadmap,
		NewsFeed,
		Partnership,
		Footer,
	}
}
</script>

<template>
  <div class="wrap">
    <Header></Header>
		<Hero></Hero>
		<What></What>
		<Bns></Bns>
		<Repositories></Repositories>
		<Chain></Chain>
		<Solution></Solution>
		<Roadmap></Roadmap>
		<NewsFeed></NewsFeed>
		<Partnership></Partnership>
		<Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>

</style>

