import Privacy from "../components/Privacy";
// import about from "../components/About";
// import contact from "../components/Contact";
export default {
  mode: 'hash',
  routes: [{
      path: '/',
      component: home
    },
    {
      path: '/about',
      component: privacy
    },
    {
      path: '/contact',
      component: contact
    },
  ]
}