<template>
    <img :src="'./images/vue-js.svg'" alt="Logo">
    <h1>Vue JS Electron using Laravel Mix Js</h1>
    <Instructions/>
</template>

<script>
import Instructions from './components/instructions.vue'
export default {
    name: 'HelloWorld',
    components:{
        Instructions: Instructions
    },
    data() {
        return {
        };
    }
};
</script>

<style>
img{
    width: 300px;
    height: auto;
    margin: auto;
}
</style>