<template>
    <div class="page-home">
        home: {{title}}
        <Header />
        <main>
            <h1>主体</h1>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    import testMixins from '../mixins/test';
    export default {
        mixins: [testMixins],
        components: {
            Header,
            Footer
        }
    }
</script>

<style>

</style>