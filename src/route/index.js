import home from "../components/Home";
import documentation from "../components/Documentation";
import privacy from "../components/Privacy";
import terms from "../components/Terms";
export default {
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/documentation',
      component: documentation
    },
    {
      path: '/privacy',
      component: privacy
    },
    {
      path: '/terms',
      component: terms
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
}