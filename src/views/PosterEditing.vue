<template>
    <div class="poster-editing">
        <div v-for="item in currentPoster" class="poster-editing__cover">
            <h5 class="poster-editing__cover__title">{{ item.title }}</h5>
            <img :src="item.path" alt="" class="poster-editing__cover__image" />
            <canvas id="posterCanva" class="poster-canva"></canvas>
        </div>
        <form class="poster-editing__form">
            <div class="poster-editing__form__item wrapper">
                <span class="poster-editing__form__item__title title">
                    日期
                </span>
                <div class="poster-editing__form__item__outer">
                    <input v-model="newPoster.date" class="poster-editing__form__item__outer__input date input"
                        type="date" placeholder="" />
                </div>
            </div>
            <div class="poster-editing__form__item">
                <span class="poster-editing__form__item__title">時間</span>
                <input v-model="newPoster.time" type="text" class="poster-editing__form__item__input">
            </div>
            <div class="poster-editing__form__item">
                <span class="poster-editing__form__item__title">費用</span>
                <input v-model="newPoster.price" type="number" class="poster-editing__form__item__input">
            </div>
            <div class="poster-editing__form__item">
                <span class="poster-editing__form__item__title">地點</span>
                <input v-model="newPoster.place" type="text" class="poster-editing__form__item__input">
            </div>
            <div class="poster-editing__form__item">
                <span class="poster-editing__form__item__title">請洽</span>
                <input v-model="newPoster.contactor" type="text" class="poster-editing__form__item__input">
            </div>
            <button type="submit" class="poster-editing__form__download">
                <a href="../assets/截圖 2022-08-04 下午7.30.04.png" download class="poster-editing__form__download__button">
                    下載
                </a>
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import frontPostAPI from '../front-page-apis/poster';

const route = useRoute();
const a = ref('poster1')
const currentPoster = reactive({});
const posters = reactive([
    {
        id: 1,
        title: '愛在家夫婦日營',
        path: '/src/assets/poster1.png',
    },
    {
        id: 2,
        title: '愛在家夫婦日營',
        path: '/src/assets/poster2.png',
    },
    {
        id: 3,
        title: '愛在家夫婦日營',
        path: '/src/assets/poster3.png',
    },
    {
        id: 4,
        title: '愛在家夫婦日營',
        path: '/src/assets/poster4.png',
    },
    {
        id: 5,
        title: '愛在家夫婦日營',
        path: '/src/assets/poster5.png',
    },
    {
        id: 6,
        title: '愛在家夫婦日營',
        path: '/src/assets/poster6.png',
    }
]);
const newPoster = reactive({
    date: '',
    time: '',
    price: 0,
    place: '',
    contactor: '',
})

// functions
function renderPoster() {
    const currentPosterId = route.params.id;

    posters.forEach((poster) => {
        if (poster.id === Number(currentPosterId)) {
            currentPoster.value = poster;
        };
    });
};

function drawPoster() {
    let canvas = document.getElementById('posterCanva');
    // let context = canvas.getContext('2d');

};

drawPoster();

async function addPoster() {
    try {
        const response = await frontPostAPI.addPoster({
            date: newPoster.date,
            time: newPoster.time,
            price: newPoster.price,
            place: newPoster.place,
            contactor: newPoster.contactor,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        console.log(response);
    } catch (err) {
        console.log(err);
    };
}

renderPoster();
</script>

<style scoped lang="scss">
.poster-editing {
    width: 90%;
    max-width: 968px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 35px 0 30px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin: 54px 0 87px;
        gap: 35.5px;
    }

    @media screen and (min-width: 1024px) {
        margin: 70px 0 346px;
        gap: 61px;
    }

    &__cover {
        width: 70%;
        max-width: 569px;
        text-align: center;
        position: relative;

        @media screen and (min-width: 768px) {
            width: 60%;
        }

        &__title {
            font-weight: 500;
            font-size: 0.648rem;
            margin-bottom: 18.5px;

            @media screen and (min-width: 768px) {
                font-size: 1.008rem;
                margin-bottom: 27.75px;

            }

            @media screen and (min-width: 1024px) {
                font-size: 1.368rem;
                margin-bottom: 37px;
            }
        }

        &__image {
            width: 100%;
        }

        #posterCanva {
            position: absolute;
            top: 35px;
            right: 0;
            width: 100%;
            height: 100%;
            border: 1px solid red;
            // background-color: pin;
        }
    }

    &__form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 23px;
        margin-bottom: 30px;

        @media screen and (min-width: 768px) {
            width: 40%;
            margin-bottom: 0px;
            gap: 34.5px;
        }

        @media screen and (min-width: 1024px) {
            gap: 46px;
        }

        &__item {
            width: 100%;
            max-width: 309px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            input {
                width: 100%;
                height: 20px;
                border: 0.5px solid var(--input-border-color);

                @media screen and (min-width: 768px) {
                    height: 29px;
                }

                @media screen and (min-width: 1024px) {
                    height: 38px;
                }
            }

            span {
                width: 100%;
                line-height: 18px;

                @media screen and (min-width: 768px) {
                    line-height: 27.5px;
                    font-size: 0.778rem;
                }

                @media screen and (min-width: 1024px) {
                    line-height: 37px;
                    font-size: 1.055rem;
                }
            }

            &__outer {
                display: flex;
                width: 100%;

                input[type='date'] {
                    width: 100%;

                    &:focus-visible {
                        &::-webkit-datetime-edit-fields-wrapper {
                            opacity: 1;
                        }
                    }

                    &::-webkit-datetime-edit {
                        position: relative;
                        display: flex;
                        flex-direction: row-reverse;
                        justify-content: center;
                    }

                    &::-webkit-datetime-edit-fields-wrapper {
                        opacity: 0;

                        &:focus,
                        &:active {
                            opacity: 1;
                        }
                    }

                    &::-webkit-calendar-picker-indicator {
                        position: absolute;
                        opacity: 1;
                        display: block;
                        width: 2%;
                        height: 2%;
                        margin-left: 0.5%;
                        background-image: url('../assets/date-icon.png');
                    }
                }

            }
        }

        &__download {
            width: 100%;
            max-width: 309px;
            display: flex;
            justify-content: flex-end;
            padding: 0;

            &__button {
                width: 50%;
                max-width: 183.39px;
                height: 27px;
                background-color: var(--button-color);
                background: var(--poster-button-color);
                border-radius: 36.8627px;
                color: var(--sub-font-color);
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (min-width: 768px) {
                    position: relative;
                    height: 37px;
                    font-size: 0.682rem;

                    &::after {
                        position: absolute;
                        content: url('../assets/arrow.png');
                        right: 10%;
                    }
                }

                @media (min-width: 1024px) {
                    height: 47px;
                    font-size: 0.864rem;
                }
            }
        }

    }
}
</style>