import home from "../components/Home";
import privacy from "../components/Privacy";
export default {
  mode: 'hash',
  routes: [{
      path: '/',
      component: home
    },
    {
      path: '/privacy',
      component: privacy
    }
  ]
}