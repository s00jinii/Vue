<template>
    <div :style="getStyle">
        {{content}}
        <input v-model="test" @change="handleChange"/>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: 'SjText',
    })
    export default class SjText extends Vue {
        @Prop({ required: true, default: "" })
        private content!: string

        @Prop({ required: false, default: "400" })
        private weight!: string



        private test: string = ''

        private handleChange(val: any){
            console.log('val :',val.target.value)
            this.$emit('onChange', val.target.value)
        }

        get getStyle(){
            return {
                'font-weight': this.weight
                'font-style':
            }
        }

    }
</script>

<style scoped>

</style>