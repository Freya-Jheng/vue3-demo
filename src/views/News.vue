<template>
    <div class="news">
        <div class="news__banner">
            <div class="news__banner__text">
                <span class="news__banner__text__title">最新消息</span>
                <span class="news__banner__text__title-English">LATEST NEWS</span>
            </div>
        </div>
        <NavTab />
        <div class="news__content">
            <div v-for="story in stories" :key="story.id" class="news__content__card">
                <div class="news__content__card__left">
                    <span class="news__content__card__left__number">
                        <span v-if="story.id < 10">0</span>{{ story.id }}
                    </span>
                </div>
                <div class="news__content__card__right">
                    <span class="news__content__card__right__title">
                        {{ story.title }}
                    </span>
                    <span class="news__content__card__right__details">{{ story.time }}<span>{{ story.city
                    }}</span></span>
                </div>
            </div>
        </div>
        <Pagination />
    </div>
</template>

<style lang="scss" scoped>
.news {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/news-banner.png') no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;
        
        &__text {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            &__title {
                font-weight: 600;
                font-size: 0.5rem;
                letter-spacing: 0.07em;
                color: var(--news-title-color);

                @media (min-width: 600px) and (max-width: 1000px) {
                    font-size: calc(0.5rem + (1.3 - 1.2) * ((100vw - 600px) / (100 - 600)));
                }

                @media (min-width: 1024px) {
                    font-size: 1.33875rem;
                }
            }

            &__title-English {
                font-family: 'Padauk';
                font-style: normal;
                font-weight: 400;
                font-size: 0.9rem;
                letter-spacing: 0.01em;
                color: var(--news-English-title-color);

                @media (min-width: 600px) and (max-width: 1000px) {
                    font-size: calc(0.9rem + (1.3 - 1.2) * ((100vw - 600px) / (100 - 600)));
                }

                @media (min-width: 1024px) {
                    font-size: 2.38613125rem;
                }
            }
        }
    }
    &__content {
        width: 73%;
        margin-top: 6.3vw;
        max-width: 700px;
        display: grid;
        grid-auto-flow: column;
        grid-column-end: -1;
        grid-template-columns: repeat((2, 45%));
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 10%;
        align-items: space-between;

        &__card {
            height: 61px;
            max-height: 61px;
            display: flex;
            flex-direction: row;
            color: var(--news-title-color);

            &__left {
                font-size: 0.78rem;
                font-weight: 600;
                @media (min-width: 768px) {
                    font-size: 1.125rem;
                }

                &__number {
                    position: relative;
                    margin-right: 57px;
                    &::after {
                        position: absolute;
                        content: '';
                        top: 140%;
                        right: 50%;
                        transform: translateX(50%);
                        width: 0px;
                        height: 30px;
                        border: 0.5px solid var(--news-line-color);
                    }
                }
            }

            &__right {
                display: flex;
                flex-direction: column;

                &__title {
                    font-size: 0.88rem;
                    font-weight: 600;
                    margin-bottom: 4px;

                    @media (min-width: 768px) {
                        font-size: 1.125rem;
                    }
                }

                &__details {
                    font-size: 0.75rem;
                    font-weight: 300;
                    color: var(--main-font-color);

                    @media (min-width: 768px) {
                        font-size: 0.8125rem;
                    }
                }

            }
        }
    }
}
</style>

<script setup>
import NavTab from '../components/NavTab.vue'
import Pagination from '../components/Pagination.vue'
import { reactive } from 'vue';

let id = 1
const stories = reactive([
    {
        id: id++,
        title: '愛在家夫婦日營',
        time: '2021.10.30',
        city: '台中'
    },
    {
        id: id++,
        title: '愛在家夫婦日營',
        time: '2021.10.30',
        city: '台中'
    },
    {
        id: id++,
        title: '愛在家夫婦日營',
        time: '2021.10.30',
        city: '台中'
    },
    {
        id: id++,
        title: '愛在家夫婦日營',
        time: '2021.10.30',
        city: '台中'
    },
    {
        id: id++,
        title: '愛在家夫婦日營',
        time: '2021.10.30',
        city: '台中'
    },
    {
        id: id++,
        title: '愛在家夫婦日營',
        time: '2021.10.30',
        city: '台中'
    }
])
</script>
