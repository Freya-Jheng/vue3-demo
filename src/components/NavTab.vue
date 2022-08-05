<template>
    <div class="navTab">
        <ul class="navTab__items">
            <li class="navTab__items__item">
                所有營會
            </li>
            <li v-for="item in navTabs.value" :key="item.id" class="navTab__items__item">
                {{item.tag}}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import frontCampAPI from '../front-page-apis/camp';

const navTabs = reactive([]);

// functions
async function getAllTags() {
    try {
        const response = await frontCampAPI.getAllTags();

        if (response.status !== 200) {
            throw new Error(response.status);
        };
        
        navTabs.value = response.data;
    } catch(err) {
        console.log(err);
    }
}

getAllTags();
</script>

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