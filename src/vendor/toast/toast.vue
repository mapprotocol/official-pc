<template>
    <div v-if="show" class="wrap">{{text}}</div>
</template>

<style scoped>
    .wrap{
        font-size: 14px;
        position: fixed;
        left: 50%;
        top:50%;
        background: white;
        padding: 10px;
        border-radius: 5px;
        transform: translate(-50%,-50%);
        max-width: 90%;
        color: black;
        font-weight: bold;
        z-index: 22222;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    }
</style>
