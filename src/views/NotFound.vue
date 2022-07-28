<template>
<div class="not-found">
    <h1>ERROR 404</h1>
    <h2>Cannot find this page!</h2>
</div>
</template>


<style lang="scss" scoped>
.not-found {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 50px;
    margin-top: 20vh;
    h1 {
        color: red;
        font-weight: 500;
    }
}
</style>