<template>
    <div class="videos">
        <div class="videos__banner">
            <div class="videos__banner__text">
                <span class="videos__banner__text__title">宣傳影片</span>
                <span class="videos__banner__text__title-English">ALL VIDEOS</span>
            </div>
        </div>
        <div class="videos__content">
            <Searchbar />
            <div class="videos__content__cards">
                <div v-for="video in videos" :key="video.id" class="videos__content__cards__card">
                    <div class="videos__content__cards__card__top">
                        <div class="videos__content__cards__card__top__cover"></div>
                        <img src="../assets/videos-icon.png" alt="" class="videos__content__cards__card__top__icon">
                    </div>
                    <div class="videos__content__cards__card__bottom">
                        <h5 class="videos__content__cards__card__bottom__title">{{ video.title }}</h5>
                        <a href="main.js" download="main.js"
                            class="videos__content__cards__card__bottom__download">下載</a>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.videos {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;

    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/videos-banner.png') no-repeat;
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

                @media (min-width: 768px) {
                    font-size: 1rem;
                }

                @media (min-width: 1024px) {
                    font-size: 1.33875rem;
                }
            }

            &__title-English {
                font-family: 'Padauk';
                font-style: normal;
                font-weight: 400;
                font-size: 1.09rem;
                letter-spacing: 0.01em;
                color: var(--news-English-title-color);

                @media (min-width: 768px) {
                    font-size: 1.5rem;
                }

                @media (min-width: 1024px) {
                    font-size: 2.38613125rem;
                }
            }
        }
    }

    &__content {
        width: 90%;
        max-width: 1021.33px;
        margin-top: 25px;

        &__cards {
            width: 100%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(2, 47.5%);
            column-gap: 5%;
            row-gap: 10%;
            margin-top: 15px;

            @media (min-width: 768px) {
                margin-top: 24.5px;
            }

            @media (min-width: 1024px) {
                margin: 34px 0 65px;
            }

            &__card {
                width: 100%;
                height: 30.35vw;
                max-width: 493.33px;
                max-height: 352px;
                border: 0.877805px solid var(--border-color);
                border-radius: 3.51122px;

                &__top {
                    width: 100%;
                    height: 71.5%;
                    position: relative;
                    border-bottom: 0.877805px solid var(--border-color);

                    &__cover {
                        position: absolute;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                        width: 81.9%;
                        height: 80%;
                        background-color: var(--videos-bg-color);
                    }

                    &__icon {
                        position: absolute;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                        width: 18.77px;
                        height: 13.65px;

                        @media (min-width: 768px) {
                            width: 38.77px;
                            height: 33.65px;
                        }

                        @media (min-width: 1024px) {
                            width: 58.77px;
                            height: 53.65px;
                        }
                    }
                }

                &__bottom {
                    width: 100%;
                    height: 28.5%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    text-align: center;

                    @media (min-width: 768px) {
                        position: relative;
                        justify-content: unset;
                        align-items: unset;
                    }

                    &__title {
                        font-family: 'Padauk';
                        font-weight: 400;
                        letter-spacing: 0.01em;
                        margin: auto;

                        @media (min-width: 768px) {
                            font-size: 0.8rem;
                        }

                        @media (min-width: 1024px) {
                            font-size: 1.22rem;
                        }

                    }

                    &__download {
                        width: 30%;
                        max-width: 109px;
                        height: 60%;
                        background-color: var(--button-color);
                        border: 1px solid var(--button-border);
                        border-radius: 42.3529px;
                        color: var(--sub-font-color);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;

                        @media (min-width: 768px) {
                            position: absolute;
                            width: 25%;
                            right: 3.5%;
                            top: 50%;
                            transform: translateY(-50%);
                            font-size: 0.75rem;

                            &::after {
                                content: url('../assets/arrow.png');
                                margin-left: 15px;
                            }
                        }

                        @media (min-width: 1024px) {
                            width: 109px;
                            height: 54px;
                            font-size: 0.99rem;
                        }
                    }
                }
            }
        }
    }
}
</style>

<script setup>
import Searchbar from '../components/Searchbar.vue';
import Pagination from '../components/Pagination.vue';
import { reactive } from 'vue';

let id = 0;
const videos = reactive([
    {
        id: id++,
        title: '好僕人宣傳影片',
    },
    {
        id: id++,
        title: '好僕人宣傳影片',
    },
    {
        id: id++,
        title: '好僕人宣傳影片',
    },
    {
        id: id++,
        title: '好僕人宣傳影片',
    },
])
</script>