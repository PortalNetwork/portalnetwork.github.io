<script>
import Header from './index/Header.vue';
import Hero from './index/Hero.vue';
import What from './index/What.vue';
import Bns from './index/Bns.vue';
import Repositories from './index/Repositories.vue';
import Chain from './index/Chain.vue';
import Solution from './index/Solution.vue';
import Roadmap from './index/Roadmap.vue';
import NewsFeed from './index/NewsFeed.vue';
import Partnership from './index/Partnership';
import Footer from './index/Footer.vue';
import AOS from 'aos';

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
	},
	mounted(){
    AOS.init();
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

