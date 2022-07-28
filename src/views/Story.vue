<template>
    <div class="stories">
        <div class="stories__banner">
            <div class="stories__banner__text">
                <span class="stories__banner__text__title">好文分享</span>
                <span class="stories__banner__text__title-English">CORE VALUE</span>
            </div>
        </div>
        <NavTab />
        <div class="stories__content">
            <div v-for="story in stories" :key="story.id" class="stories__content__card">
                <div class="stories__content__card__left">
                    <!-- <img src="../assets/story-image.png" alt="image" class="stories__content__card__left__image"> -->
                </div>
                <div class="stories__content__card__right">
                    <h6 class="stories__content__card__right__title">
                        {{ story.title }}
                    </h6>
                    <span class="stories__content__card__right__description">
                        {{ story.description }}
                    </span>
                    <a href="" class="stories__content__card__right__button">
                        <span class="">READ MORE</span>
                        <img src="../assets/right-arrow.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stories {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;

    @media (min-width: 768px) {
        font-size: 0.65rem;
    }

    @media (min-width: 1024px) {
        font-size: 0.8125rem;
    }

    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/stories-banner.png') no-repeat;
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
        width: 80%;
        height: 100vh;
        margin-top: 5vw;
        margin-bottom: 130px;
        margin-bottom: 50vh;

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
                background-image: url('../assets/story-image.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
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
}
</style>


<script setup>
import NavTab from '../components/NavTab.vue';
import { reactive } from 'vue'

let id = 0
const stories = reactive([
    {
        id: id++,
        // 直接寫成數字就可以了
        title: '拾回的眼光',
        image: '../assets/story-image.png',
        description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
    },
    {
        id: id++,
        title: '拾回的眼光',
        image: '',
        description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
    },
    {
        id: id++,
        title: '拾回的眼光',
        image: '',
        description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
    },
    {
        id: id++,
        title: '拾回的眼光',
        image: '',
        description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
    },
    {
        id: id++,
        title: '拾回的眼光',
        image: '',
        description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
    },
    {
        id: id++,
        title: '拾回的眼光',
        image: '',
        description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
    },
])
</script>