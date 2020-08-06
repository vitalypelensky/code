import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/elements/Header'
import Footer from '../components/elements/Footer'
import admincabinet from '../components/admin/admin'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/main',
      components: {
        default: resolve => require(['@/components/main-page/main-page'], resolve),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/main',
      name: 'mainPage',
      components: {
        default: resolve => require(['@/components/main-page/main-page'], resolve),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/about',
      name: 'aboutUs',
      components: {
        default: resolve => require(['@/components/about-us/aboutUs'], resolve),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/news',
      name: 'news',
      components: {
        default: resolve => require(['@/components/news/news'], resolve),
        header: Header
      }
    },
    {
      path: '/news/:id',
      name: 'singleNews',
      components: {
        default: resolve => require(['@/components/news/single-new'], resolve),
        header: Header
      }
    },
    {
      path: '/activities/:id',
      name: 'singleActivities',
      components: {
        default: resolve => require(['@/components/activities/single-activity'], resolve),
        header: Header
      }
    },
    {
      path: '/activities',
      name: 'activities',
      components: {
        default: resolve => require(['@/components/activities/activities'], resolve),
        header: Header
      }
    },
    {
      path: '/information',
      name: 'information',
      components : {
        default: resolve => require(['@/components/documents/documents'], resolve),
        header: Header
      }
    },
    {
      path: '/admincabinet',
      name: 'admincabinet',
      components: {
        default: admincabinet,
      },
      children: [
        {
          path: 'login',
          component: resolve => require(['@/components/admin/login/login'], resolve),
        },
        {
          path: 'cabinet',
          component: resolve => require(['@/components/admin/admin-cabinet/admin-cabinet'], resolve),
          children: [
            {
              path: 'main',
              component: resolve => require(['@/components/admin/admin-cabinet/main/main'], resolve),
            },
            {
              path: 'news',
              component: resolve => require(['@/components/admin/admin-cabinet/news/news'], resolve),
            },
            {
              path: 'activities',
              component: resolve => require(['@/components/admin/admin-cabinet/activities/activities'], resolve),
            },
            {
              path: 'places',
              component: resolve => require(['@/components/admin/admin-cabinet/places/places'], resolve),
            },
            {
              path: 'contacts',
              component: resolve => require(['@/components/admin/admin-cabinet/contacts/contacts'], resolve),
            },
            {
              path: 'personal',
              component: resolve => require(['@/components/admin/admin-cabinet/personal/personal'], resolve),
            },
            {
              path: 'documents',
              component: resolve => require(['@/components/admin/admin-cabinet/documents/documents'], resolve),
            }
          ]
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
