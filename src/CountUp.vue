<template>
    <span>{{ value }}</span>
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

        ready(){
            new counter.Counter(this.$el, this.start, this.value, {
                duration: this.duration,
                deciamals: this.decimal,
                autostart: true,
            })
        },

        watch: {
            value(val, old) {
                new counter.Counter(this.$el, old, val, {
                    duration: this.duration,
                    deciamals: this.decimal,
                    autostart: true,
                })
            },
        },
    }
</script>
