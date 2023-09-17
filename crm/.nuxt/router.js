import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _81e0fdb4 = () => interopDefault(import('..\\pages\\activities.vue' /* webpackChunkName: "pages/activities" */))
const _babb5302 = () => interopDefault(import('..\\pages\\addannouncement.vue' /* webpackChunkName: "pages/addannouncement" */))
const _41e2a098 = () => interopDefault(import('..\\pages\\addcontact.vue' /* webpackChunkName: "pages/addcontact" */))
const _0fd0e904 = () => interopDefault(import('..\\pages\\addcsv.vue' /* webpackChunkName: "pages/addcsv" */))
const _a7a093d8 = () => interopDefault(import('..\\pages\\addlead.vue' /* webpackChunkName: "pages/addlead" */))
const _7bfd37e3 = () => interopDefault(import('..\\pages\\announcements.vue' /* webpackChunkName: "pages/announcements" */))
const _1e953872 = () => interopDefault(import('..\\pages\\asset.vue' /* webpackChunkName: "pages/asset" */))
const _29a2b63c = () => interopDefault(import('..\\pages\\assets.vue' /* webpackChunkName: "pages/assets" */))
const _82dd99ea = () => interopDefault(import('..\\pages\\createasset.vue' /* webpackChunkName: "pages/createasset" */))
const _17c8e97d = () => interopDefault(import('..\\pages\\editasset.vue' /* webpackChunkName: "pages/editasset" */))
const _67c35b2c = () => interopDefault(import('..\\pages\\viewagents.vue' /* webpackChunkName: "pages/viewagents" */))
const _83bead1e = () => interopDefault(import('..\\pages\\viewcontacts.vue' /* webpackChunkName: "pages/viewcontacts" */))
const _d6295d2e = () => interopDefault(import('..\\pages\\viewleads.vue' /* webpackChunkName: "pages/viewleads" */))
const _722de0a9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _21d3cdbb = () => interopDefault(import('..\\pages\\admin\\_dashboard.vue' /* webpackChunkName: "pages/admin/_dashboard" */))
const _26f55494 = () => interopDefault(import('..\\pages\\client\\_client_id.vue' /* webpackChunkName: "pages/client/_client_id" */))
const _242f469e = () => interopDefault(import('..\\pages\\editclient\\_client_id.vue' /* webpackChunkName: "pages/editclient/_client_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activities",
    component: _81e0fdb4,
    name: "activities"
  }, {
    path: "/addannouncement",
    component: _babb5302,
    name: "addannouncement"
  }, {
    path: "/addcontact",
    component: _41e2a098,
    name: "addcontact"
  }, {
    path: "/addcsv",
    component: _0fd0e904,
    name: "addcsv"
  }, {
    path: "/addlead",
    component: _a7a093d8,
    name: "addlead"
  }, {
    path: "/announcements",
    component: _7bfd37e3,
    name: "announcements"
  }, {
    path: "/asset",
    component: _1e953872,
    name: "asset"
  }, {
    path: "/assets",
    component: _29a2b63c,
    name: "assets"
  }, {
    path: "/createasset",
    component: _82dd99ea,
    name: "createasset"
  }, {
    path: "/editasset",
    component: _17c8e97d,
    name: "editasset"
  }, {
    path: "/viewagents",
    component: _67c35b2c,
    name: "viewagents"
  }, {
    path: "/viewcontacts",
    component: _83bead1e,
    name: "viewcontacts"
  }, {
    path: "/viewleads",
    component: _d6295d2e,
    name: "viewleads"
  }, {
    path: "/",
    component: _722de0a9,
    name: "index"
  }, {
    path: "/admin/:dashboard?",
    component: _21d3cdbb,
    name: "admin-dashboard"
  }, {
    path: "/client/:client_id?",
    component: _26f55494,
    name: "client-client_id"
  }, {
    path: "/editclient/:client_id?",
    component: _242f469e,
    name: "editclient-client_id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
