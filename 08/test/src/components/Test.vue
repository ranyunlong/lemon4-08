<template>
    <div>
        <img :src="img">
    </div>
</template>

<script>

    import Img from '../assets/logo.png'

    export default {
        data() {
            return {
                img: Img
            }
        }
    }
</script>

<style>

</style>