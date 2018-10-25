<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import What from './components/What.vue';
import Bns from './components/Bns.vue';
import Repositories from './components/Repositories.vue';
import Chain from './components/Chain.vue';
import Solution from './components/Solution.vue';
import Roadmap from './components/Roadmap.vue';
import NewsFeed from './components/NewsFeed.vue';
import Partnership from './components/Partnership';
import Footer from './components/Footer.vue';
import Telegram from './images/telegram.svg';
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
		Telegram
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

