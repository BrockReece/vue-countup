<template>
    <span>{{ value }}</span>
</template>

<script>
    require('countup')
    
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
            return {
                countUp: new CountUp(this.$el,
                    this.start,
                    this.value,
                    this.decimal,
                    this.duration,
                    this.options
                ),
            }
        },

        ready(){
            this.countUp.start()
        },

        watch: {
            value(val) {
                this.countUp.update(val)
            },
        },
    }
</script>
