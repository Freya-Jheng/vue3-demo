<template>
    <div class="courses">
        <div class="courses__banner">
            <div class="courses__banner__text">
                <span class="courses__banner__text__title">課程專區</span>
                <span class="courses__banner__text__title-English">ALL COURSES</span>
            </div>
        </div>
        <div class="courses__content">
            <Searchbar v-model="searchKeyword" :searchFunction="searchCourses" />
            <div class="courses__content__cards">
                <div v-for="video in courses.value" :key="video.id" class="courses__content__cards__card">
                    <div class="courses__content__cards__card__top">
                        <img src="../assets/courses-cover.png" alt="cover"
                            class="courses__content__cards__card__top__cover">
                        <a href="main.js" download="main.js" class="courses__content__cards__card__top__download">
                            <span>下載</span></a>
                    </div>
                    <div class="courses__content__cards__card__bottom">
                        <h5 class="courses__content__cards__card__bottom__title">{{ video.name }}
                            <span style="margin-left: 5px;">{{ video.date }}</span>
                        </h5>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.courses {
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
        background: url('../assets/courses-banner.png') no-repeat;
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

                    &:hover {
                        &::after {
                            position: absolute;
                            top: 0;
                            right: 0;
                            content: '';
                            width: 100%;
                            height: 100%;
                            background-color: rgba(187, 187, 187, 0.9);
                            mix-blend-mode: normal;
                        }

                        :nth-child(2) {
                            opacity: 1;
                        }
                    }

                    &__cover {
                        position: absolute;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                        width: 81.9%;
                        height: 80%;
                        background-color: var(--videos-bg-color);
                    }

                    &__download {
                        width: 45%;
                        max-width: 210.71px;
                        height: 20%;
                        background-color: var(--button-color);
                        border: 1px solid var(--button-border);
                        border-radius: 42.3529px;
                        color: var(--sub-font-color);
                        position: absolute;
                        z-index: 5;
                        top: 50%;
                        right: 50%;
                        transform: translate(50%, -50%);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        opacity: 0;
                        cursor: pointer;

                        span {
                            position: relative;

                            @media (min-width: 768px) {
                                font-size: 0.75rem;

                                &::after {
                                    position: absolute;
                                    left: 250%;
                                    content: url('../assets/arrow.png');
                                }
                            }

                            @media (min-width: 1024px) {
                                font-size: 0.99rem;
                            }
                        }

                    }

                }

                &__bottom {
                    width: 100%;
                    height: 28.5%;
                    display: flex;
                    flex-direction: row;

                    &__title {
                        margin: auto;
                        font-weight: 500;

                        @media (min-width: 768px) {
                            font-size: 0.8rem;
                        }

                        @media (min-width: 1024px) {
                            font-size: 1.5rem;
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
import { reactive, ref } from 'vue';
import frontCoureseAPI from '../front-page-apis/courses';

let id = 0;
const courses = reactive([]);
const copyCourse = reactive([]);
const searchKeyword = ref('');

// functions
function searchCourses() {
    const newC = [];

    if (!searchKeyword.value.trim()) {
        courses.value = copyCourse.value;
        searchKeyword.value = '';
        return alert('請輸入課程名稱！');
    };

    courses.value = copyCourse.value;
    courses.value.forEach((list) => {
        if (list.name === searchKeyword.value) {
            newC.push(list)
        }
    });
    courses.value = newC
};
async function getAllFrontCourses() {
    try {
        const response = await frontCoureseAPI.getAllCourses();

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        courses.value = response.data;
        copyCourse.value = response.data;

    } catch (err) {
        console.log(err);
    }
};
getAllFrontCourses();
</script>