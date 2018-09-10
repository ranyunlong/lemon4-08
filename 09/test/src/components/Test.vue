<template>
    <div @click="$emit('click')" class="test">
        {{title}}
        {{num}}
        <slot />
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$parent)
        },
        props: {
            title: {
                type: String,
                required: true
            },
            num: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                hehe:'11'
            }
        }
    }
</script>

<style scoped>

</style>