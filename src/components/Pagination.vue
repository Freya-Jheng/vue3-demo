<template>
    <nav class="pagination">
        <ul class="pagination__pages">
            <li @click="updatePage" class="pagination__pages__previous item">
                <router-link to="" class="pagination__pages__previous__link">
                    <img src="../assets/previous-arrow.png" alt="previous"
                        class="previous pagination__pages__previous__link__image">
                </router-link>
            </li>
            <li v-for="item in 2" :class="['pagination__pages__page', {
                'active': currentPageNumber === item,
            }]">
                <a class="pagination__pages__page__link" href="#">{{ item }}</a>
            </li>
            <li @click="updatePage" class="pagination__pages__next item">
                <router-link to="" class="pagination__pages__next__link">
                    <img src="../assets/next-arrow.png" alt="" class="next pagination__pages__next__link__image">
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    &__pages {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 29px;
        margin: 12vh 0 14vh;

        &__page {
            &__link {
                color: var(--page-font-color);
            }
        }

        .active {
            .pagination__pages__page__link {
                color: var(--page-font-focus-color);
            }
        }

        .item {
            cursor: pointer;
        }
    }
}
</style>

<script setup>
import { ref } from 'vue'
let currentPageNumber = ref(1)
function updatePage(e) {
    let target = e.target
    if (target.classList.contains("previous") && currentPageNumber.value > 1) {
        currentPageNumber.value--
        console.log(target)
    } else if (target.classList.contains('next') && currentPageNumber.value < 2) {
        currentPageNumber.value++
        console.log(target)
    }
}

</script>