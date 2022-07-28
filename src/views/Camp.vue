<template>
    <div class="join-camp">
        <div class="join-camp__banner">
            <div class="join-camp__banner__text">
                <span class="join-camp__banner__text__title">好僕人婚姻家庭服務協會</span>
                <span class="join-camp__banner__text__title-English">GOOD SERVANT FAMILY IN TAIWAN</span>
            </div>
        </div>
        <div class="join-camp__content">
            <div class="join-camp__content__title">個人申請營會表格</div>
            <div class="join-camp__content__guide">
                <h5 class="join-camp__content__guide__sub-title sub-title">＊必填：</h5>
                <ul class="join-camp__content__guide__content">
                    <li v-for="guide in guides" :key="guide.id" class="join-camp__content__guide__content__item">
                        {{ guide.id }}.{{ guide.content }}
                    </li>
                </ul>
            </div>
            <div class="join-camp__content__form">
                <h5 class="join-camp__content__form__sub-title sub-title">＊請選擇營會類別：</h5>
                <form class="join-camp__content__form__content">
                    <div class="join-camp__content__form__content__categories">
                        <div class="join-camp__content__form__content__categories__first">
                            <input type="checkbox" id="first-input"
                                class="join-camp__content__form__content__categories__first__input" />
                            <label class="join-camp__content__form__content__categories__first__label"
                                for="first-input">
                            </label>
                            <span class="join-camp__content__form__content__categories__first__text">盟約夫婦日營</span>
                        </div>
                        <div class="join-camp__content__form__content__categories__second">
                            <input type="checkbox" id="second-input"
                                class="join-camp__content__form__content__categories__second__input" />
                            <label class="join-camp__content__form__content__categories__second__label"
                                for="second-input">
                            </label>
                            <span class="join-camp__content__form__content__categories__second__text">愛在家夫婦日營</span>
                        </div>
                    </div>
                    <div class="join-camp__content__form__content__inform">
                        <div class="join-camp__content__form__content__inform__date wrapper">
                            <span class="join-camp__content__form__content__inform__date__title title">
                                參加營會的日期:
                            </span>
                            <div class="join-camp__content__form__content__inform__date__outer">
                                <img src="../assets/date-icon.png" alt="" class="" />
                                <input class="join-camp__content__form__content__inform__date__outer__input input"
                                    type="text" placeholder="" onfocus="(this.type='date')"
                                    onblur="if(this.value==''){this.type='text'}">
                            </div>
                        </div>
                        <div class="join-camp__content__form__content__inform__name wrapper">
                            <span class="join-camp__content__form__content__inform__name__title title">
                                姓名
                            </span>
                            <input class="join-camp__content__form__content__inform__name__input input" type="text">
                        </div>
                        <div class="join-camp__content__form__content__inform__phone wrapper">
                            <span class="join-camp__content__form__content__inform__phone__title title">
                                電話
                            </span>
                            <input class="join-camp__content__form__content__inform__phone__input input" type="tel">
                        </div>
                        <div class="join-camp__content__form__content__inform__email wrapper">
                            <span class="join-camp__content__form__content__inform__email__title title">
                                電郵
                            </span>
                            <input class="join-camp__content__form__content__inform__email__input input" type="email">
                        </div>
                    </div>
                    <button class="join-camp__content__form__content__submit" type="submit">
                        <span>送出</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

let id = 1
const guides = reactive([
    {
        id: id++,
        content: '報名時請注意是夫妻關係且要一起，不可單獨參加。'
    },
    {
        id: id++,
        content: '報名繳費後，營會活動如無法參加，請於三天前來信告知，否則視同放棄，不可退費。'
    },
    {
        id: id++,
        content: '因地區不同，費用有些差異，詳請洽協會。'
    },
])
</script>

<style lang="scss" scoped>
.join-camp {
    width: 100%;
    margin-top: 36px;
    background-color:rgba(196, 196, 196, 0.1);
    @media (min-width: 768px) {
        padding-bottom: 172px;
    }
    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/join-camp-banner.png') no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;

        &__text {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            min-width: 235px;
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
        max-width: 588px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.5rem;

        @media (min-width: 768px) {
            font-size: 0.75rem;
        }

        ;

        @media (min-width: 1024px) {
            font-size: 0.945rem;
        }

        ;

        &__title {
            width: 100%;
            margin: 4.5vw 0 5.6vw;
            font-size: 1.19rem;
            font-weight: 600;
            text-align: center;
            color: var(--camp-title-color);

            @media (min-width: 768px) {
                font-size: 1.7rem;
            }

            ;

            @media (min-width: 1024px) {
                font-size: 2.26rem;
            }

            ;

        }

        &__guide {
            width: 95%;

            @media(min-width: 768px) {
                width: 100%;
            }

            &__content {
                width: 100%;
                height: 20vw;
                max-height: 126px;
                margin-top: 3vw;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                text-align: justify;
            }
        }

        &__form {
            width: 95%;
            margin-top: 3.5vw;

            @media (min-width: 768px) {
                width: 100%;
                margin-top: 5vw;
            }

            ;

            @media (min-width: 1024px) {
                margin-top: 57px;
            }

            &__content {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                &__categories {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 12vw;
                    margin: 4vw 0 8vw;
                    font-size: 0.52rem;

                    @media (min-width: 768px) {
                        font-size: 0.75rem;
                        margin: 2vw 0 4vw;
                    }

                    ;

                    @media (min-width: 1024px) {
                        font-size: 1rem;
                        margin: 2vw 0 4vw;
                    }

                    ;

                    &__first,
                    &__second {
                        display: flex;
                        align-items: center;
                        gap: 7px;
                    }


                    label {
                        width: 10px;
                        height: 10px;
                        border: 0.883673px solid #373737;
                        border-radius: 50%;
                        cursor: pointer;

                        &:hover,
                        &:focus {
                            outline: 0.883673px solid #373737;
                            border: 2px solid var(--sub-font-color);
                            background-color: var(--main-font-color);
                        }

                        @media (min-width: 768px) {
                            width: 13px;
                            height: 13px;
                        }

                        @media (min-width: 1024px) {
                            width: 15.02px;
                            height: 15.02px;
                        }
                    }

                    input[type="checkbox"] {
                        display: none;
                    }
                }

                &__inform {
                    width: 100%;
                    font-size: 0.6rem;

                    @media (min-width: 768px) {
                        font-size: 0.8rem;
                    }

                    ;

                    @media (min-width: 1024px) {
                        font-size: 1.056rem;
                    }

                    ;

                    .wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;

                        span {
                            margin: 18px 0 5px;
                            margin-top: 5px;
                            line-height: 10px;

                            @media (min-width: 768px) {
                                margin-top: 13px;
                                line-height: 26px;
                            }

                            @media (min-width: 1024px) {
                                margin-top: 19px;
                                line-height: 36.92px;
                            }
                        }

                        input {
                            width: 100%;
                            height: 30px;
                            border: 0.5px solid var(--input-border-color);

                            @media (min-width: 768px) {
                                height: 35px;
                            }

                            @media (min-width: 1024px) {
                                height: 38px;
                            }

                        }
                    }

                    &__date {
                        width: 100%;

                        &__outer {
                            width: 100%;
                            position: relative;

                            img {
                                width: 1rem;
                                height: 1rem;
                                position: absolute;
                                top: 50%;
                                left: 3%;
                                transform: translate(0, -50%)
                            }
                        }

                    }
                }

                &__submit {
                    width: 24vw;
                    height: 7vw;
                    margin: 5vh 0 2vw;
                    background: var(--story-button-color);
                    border-radius: 36.8627px;
                    color: var(--sub-font-color);
                    text-align: center;

                    span {
                        position: relative;

                        &::after {
                            top: 0;
                            position: absolute;
                            content: url('../assets/arrow.png');

                            @media (min-width: 768px) {
                                left: 200%;
                            }
                        }

                    }

                    @media (min-width: 768px) {
                        width: 183.39px;
                        height: 47px;
                    }
                }
            }

        }

        .sub-title {
            font-size: 0.59rem;
            font-weight: 600;
            color: var(--camp-subtitle-color);

            @media (min-width: 768px) {
                font-size: 0.8rem;
            }

            ;



            @media (min-width: 1024px) {
                font-size: 1.125rem;
            }

            ;


        }
    }
}

input[type="date"] {
    position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
}
</style>