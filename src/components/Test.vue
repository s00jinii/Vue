<template>
    <div class="test1">
        <h4>1</h4>
        <h4>2</h4>
        <h4>3</h4>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Test extends Vue {
        
    }
</script>

<style scoped>
.test1{
    display: flex;
    justify-content: space-around;
}

</style>