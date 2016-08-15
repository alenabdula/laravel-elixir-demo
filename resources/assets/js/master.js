'use strict';

window.Vue = require('vue');

/**
 *  Example Vue component.
 */
Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: 'body'
});