<template>
    <span v-into-vue.once="inVue">{{ value }}</span>
</template>

<script>
    const counter = require('countup-coffee')

    export default{
        props: {
            start: {
                default: 0,
            },
            value: {
                required: true,
            },
            decimal: {
                default: 0,
            },
            duration: {
                default: 2.5,
            },
            options: {},
        },

        data() {
            counter: {},
        },

        ready() {
            this.counter = new counter.Counter(this.$el, this.start, this.value, {
                duration: this.duration,
                deciamals: this.decimal,
            })
        },

        methods: {
            inVue() {
                this.counter.start()
            },
        },

        watch: {
            value(val, old) {
                this.counter = new counter.Counter(this.$el, old, val, {
                    duration: this.duration,
                    deciamals: this.decimal,
                    autostart: true,
                })
            },
        },
    }
</script>
