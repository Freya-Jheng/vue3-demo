<template>
    <div class="individual-story">
        <div class="individual-story__text">
            <span class="individual-story__text__date">{{ article.date }}</span>
            <br>
            <span class="individual-story__text__title">{{ article.title }}</span>
        </div>
        <div class="individual-story__content">
            {{ article.content }}
        </div>
    </div>
</template>

<script setup>
import frontArticleAPI from '../front-page-apis/article';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const article = ref([]);
const route = useRoute();

// functions
async function getArticle() {
    const currentId = route.params.id;
    const response = await frontArticleAPI.getArticle({
        id: currentId,
    });

    if (response.status !== 200) {
        throw new Error(response.status);
    };

    article.value = response.data;
}

getArticle();
</script>

<style lang="scss" scoped>
.individual-story {
    width: 60%;
    min-width: 365px;
    height: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3rem;

    @media (min-width: 768px) {
        margin-top: 6rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.33875rem;
        margin-top: 10rem;
    }

    &__text {
        width: 100%;
        position: relative;
        padding-bottom: 15px;

        &__date {
            font-size: 0.01rem;

            @media (min-width: 768px) {
                font-size: 0.5rem;
            }

            @media (min-width: 1024px) {
                font-size: 1rem;
            }
        }

        &__title {
            font-size: 0.9rem;
            font-weight: 600;
            line-height: 25px;
            color: var(--news-title-color);

            @media (min-width: 768px) {
                font-size: 1rem;
            }

            @media (min-width: 1024px) {
                font-size: 1.33875rem;
            }
        }

        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            background-color: var(--border-color);
            top: 100%;
            left: 0;
        }
    }

    &__content {
        width: 100%;
        text-align: justify;
        padding-top: 15px;
    }
}
</style>