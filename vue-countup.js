var CountUp = require('./src/CountUp.vue');

module.exports = {
    install: function (Vue, options) {
        Vue.component('count-up', CountUp);
    },
}
