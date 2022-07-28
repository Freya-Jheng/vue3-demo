<template>
    <div class="navTab">
        <ul class="navTab__items">
            <li
            v-for="item in navTabs"
            :key="item.id" 
            class="navTab__items__item">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.navTab {
    width: 90%;
    max-width: 569px;
    margin-top: 8%;
    font-size: 0.7rem;
    font-weight: 600;
    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
    &__items {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        &__item {
            width: 30%;
            max-width: 145px;
            height: 35px;
            border-radius: 30px;
            text-align: center;
            line-height: 35px;
            cursor: pointer;
            &:hover {
                background-color: var(--button-color);
                color: var(--sub-font-color);
            }
        }
    }
}
</style>

<script setup>
import { reactive } from 'vue';
let id = 0
const navTabs = reactive([
    {
        id: id++,
        title: '所有消息'
    },
    {
        id: id++,
        title: '盟約夫婦日常'
    },
    {
        id: id++,
        title: '愛在家夫婦日常'
    }
])
</script>