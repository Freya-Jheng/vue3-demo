<template>
    <!-- <NavTab /> -->
    <div class="navTab">
        <ul class="navTab__items" id="tags">
            <li @click="searchByTagId($event)" class="navTab__items__item">
                所有消息
            </li>
            <li @click="searchByTagId($event)" v-for="item in GsFamily.frontArticlesTag" :value="item.id" :key="item.id"
                class="navTab__items__item">
                {{ item.tag }}
            </li>
        </ul>
    </div>
    <div class="stories__content">
        <div v-for="story in articles.value" :key="story.id" class="stories__content__card">
            <div class="stories__content__card__left">
                <img :src="story.fileBytes" alt="">
            </div>
            <div class="stories__content__card__right">
                <h6 class="stories__content__card__right__title">
                    {{ story.title }}
                </h6>
                <span class="stories__content__card__right__description">
                    {{ story.content }}
                </span>
                <router-link :to="{ name: 'individual-story', params: { id: story.id } }"
                    class="stories__content__card__right__button">
                    <span class="">READ MORE</span>
                    <img src="../assets/right-arrow.png" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGsFamily } from '../stores/gsfamily';
import frontArticleAPI from '../front-page-apis/article';
import { reactive, ref } from 'vue';

const GsFamily = useGsFamily();
const articles = reactive([]);
const copyArticles = reactive([]);

GsFamily.getAllFrontArticles();
GsFamily.getAllFrontArticleTags();

// functions
function searchByTagId($event) {
    const e = $event.target;
    const macthArticles = [];

    articles.value = copyArticles.value;
    articles.value.forEach((article) => {
        if (article.articleTagView.id === e.value) {
            macthArticles.push(article);
        }
    });

    articles.value = macthArticles;

    if (macthArticles.length === 0 && e.value !== 0) {
        return alert('目前沒有該營會的項目！');
    }

    if (e.value === 0) {
        articles.value = copyArticles.value;
    }
};

async function getFrontArticles() {
    try {
        const response = await frontArticleAPI.getAllArticles();

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        articles.value = response.data;
        copyArticles.value = response.data;

    } catch (err) {
        console.log(err);
    }
}
getFrontArticles();
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

.stories__content {
    width: 80%;
    height: 100vh;
    margin-top: 5vw;
    margin-bottom: 130px;
    margin-bottom: 50vh;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 39.25vw);
        grid-template-rows: repeat(3, 21.98vw);
        align-items: space-between;
        grid-gap: 1.5vw 1.5vw;
    }

    &__card {
        width: 80vw;
        height: 48vw;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;

        @media (min-width: 768px) {
            width: unset;
            height: unset;
            margin-bottom: unset;
        }

        &__left {
            width: 49%;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &__right {
            width: 51%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color: var(--story-bg-color);

            &__title {
                font-size: 0.9rem;
                font-weight: 600;
                line-height: 25px;
                color: var(--news-title-color);

                @media (min-width: 768px) {
                    font-size: 1rem;
                }

                @media (min-width: 1024px) {
                    font-size: 1.125rem;
                }
            }

            &__description {
                width: 90%;
                max-width: 215px;
                margin: 0 3px;
                text-align: justify;
                line-height: 12.5px;

                @media (min-width: 768px) {
                    line-height: 23px;
                }
            }

            &__button {
                width: 55.5%;
                height: 12.3%;
                font-size: 0.5rem;
                cursor: pointer;
                color: var(--sub-font-color);
                background-color: var(--story-button-color);
                border-radius: 28.2353px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                @media (min-width: 768px) {
                    width: 49.5%;
                    font-size: 0.556rem;
                }

                @media (min-width: 1024px) {
                    width: 49.5%;
                    font-size: 0.656rem;
                }

                span {
                    @media (min-width: 768px) {
                        margin-right: 8px;
                    }
                }

                img {
                    display: none;

                    @media (min-width: 768px) {
                        display: block;
                    }
                }
            }

        }
    }
}
</style>