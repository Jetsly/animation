<template>
    <div class="header">
        <a href="javascript:;" class="logo">{{title}}</a>
        <span class="slogan"> {{slogan}} </span>
    </div>
</template>
<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from 'vue-property-decorator'
    @Component
    export default class ToolsHeader extends Vue {
        title: string
        type: string
    }
</script>
<style lang="scss">
    .header {
        height: 50px;
        line-height: 50px;
        border-bottom: #DDD 1px solid;
        padding-left: 10px;
        .logo {
            font-size: 20px;
            color: #f34e5c;
        }
        .slogan {
            font-size: 12px;
            color: #b1b1b1;
        }
    }
</style>