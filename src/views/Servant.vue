<template>
    <div class="servant">
        <div class="servant__banner">
            <div class="servant__banner__text">
                <span class="servant__banner__text__title">遇見好僕人</span>
                <span class="servant__banner__text__title-English">GOOD SERVANT IN GOD</span>
            </div>
        </div>
        <div class="servant__top">
            <div class="servant__top__text-wrapper">
                <span class="servant__top__text-wrapper__span">由一群夫婦關心社會婚姻家庭的人士所組成成員包括</span>
                <h5 class="servant__top__text-wrapper__h5">企業主 ｜ 專業人士 ｜ 醫生 ｜ 教授 ｜ 牧師 ｜ 高階主管</h5>
                <span class="servant__top__text-wrapper__span">透過專業的訓練，將正確的婚姻家庭經營方式，
                    <br> 提供增強夫婦婚姻幸福感與家庭成就感。
                </span>
            </div>
        </div>
        <div class="servant__middle">
            <div class="servant__middle__left"></div>
            <div class="servant__middle__right">
                <p class="servant__middle__right__text">
                    我們方式是將盟約日營｜愛在家的營會，精簡為一天的課程，搭配３６週｜１０週夫婦個別的錦囊妙計，不但使得婚姻家庭持續親密感，亦可使親子關係溝通更無礙。
                </p>
            </div>
        </div>
        <div class="servant__bottom">
            <div class="servant__bottom__title">
                <span class="servant__bottom__title__text">
                    <span>好僕人婚姻</span>
                    <br>
                    家庭服務協會組織架構
                </span>
            </div>
            <div class="servant__bottom__structure">
                <div class="row">
                    <div class="col-12 text-wrapper">
                        <span class="job-title">常務監事</span>
                        <span class="job-num">1位</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6  right-line"></div>
                    <div class="col-6"></div>
                </div>
                <div class="row">
                    <div class="col-6 right-line"></div>
                    <div class="col-6"></div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-4 p-0">
                        <div class="halved-height "></div>
                        <div class="halved-height top-line left-line"> </div>
                    </div>
                    <div class="col-2 text-wrapper" style="display: flex; flex-direction: column;">
                        <span class="job-title">常務理事</span>
                        <span class="job-num">3位</span>
                    </div>
                    <div class="col-4 p-0">
                        <div class="halved-height "></div>
                        <div class="halved-height top-line right-line"> </div>
                    </div>
                    <div class="col-1"></div>
                </div>
                <div class="row">
                    <div class="col-1 "></div>
                    <div class="col-5 right-line left-line"></div>
                    <div class="col-5 right-line"></div>
                    <div class="col-1"></div>
                </div>
                <div class="row">
                    <div class="col-2 text-wrapper">
                        <span class="job-title">理監事會</span>
                        <span class="job-num">12位</span>
                    </div>
                    <div class="col-4 right-line"></div>
                    <div class="col-4"></div>
                    <div class="col-2 text-wrapper">
                        <span class="job-title">協會顧問</span>
                        <span class="job-num">2位</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 p-0">
                        <div class="halved"></div>
                        <div class="halved"></div>
                    </div>
                    <div class="col-3 p-0">
                        <div class="halved left-line top-line"></div>
                        <div class="halved top-line right-line"></div>
                    </div>
                    <div class="col-3 p-0">
                        <div class="halved top-line"></div>
                        <div class="halved top-line"></div>
                    </div>
                    <div class="col-3 p-0">
                        <div class="halved left-line"></div>
                        <div class="halved"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-2 third"><span class="job-title">協會會員</span></div>
                    <div class="col-4"><span class="job-title">師資群</span></div>
                    <div class="col-2"><span class="job-title">贊助人</span></div>
                    <div class="col-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.servant {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;

    @media (min-width: 768px) {
        font-size: 0.8rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.125rem;
    }

    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/servant-banner.png') no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;

        &__text {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            margin: 0 auto;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            &__title {
                width: 100%;
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
                width: 100%;
                font-family: 'Padauk';
                font-style: normal;
                font-weight: 400;
                font-size: 0.9rem;
                letter-spacing: 0.01em;
                color: var(--sub-font-color);

                @media (min-width: 600px) and (max-width: 1000px) {
                    font-size: calc(0.9rem + (1.3 - 1.2) * ((100vw - 600px) / (100 - 600)));
                }

                @media (min-width: 1024px) {
                    font-size: 2.38613125rem;
                }
            }
        }
    }

    &__top {
        width: 100%;
        height: 55vmin;
        position: relative;
        background-image: url('../assets/servant-section1-banner.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

        @media (min-width: 768px) {
            height: 70vmin;
        }

        @media (min-width: 1024px) {
            height: 75vmin;
        }

        &__text-wrapper {
            position: absolute;
            right: 50%;
            top: 50%;
            transform: translate(50%, -50%);
            margin: auto;
            width: 95%;
            height: 50%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;

            &__span {
                width: 100%;
            }

            &__h5 {
                width: 100%;
                font-size: 0.86rem;
                margin: 10px 0 23px;

                @media (min-width: 768px) {
                    margin: 45px 0 70px;
                    font-size: 1rem;
                }

                @media (min-width: 1024px) {
                    margin: 69px 0 82px;
                    font-size: 2.1875rem;
                }
            }
        }
    }

    &__middle {
        width: 100%;
        height: 35vmin;
        display: flex;
        flex-direction: row;

        @media (min-width: 768px) {
            height: 50vmin;
        }

        @media (min-width: 1024px) {
            height: 60vmin;
        }

        &__left {
            width: 51%;
            height: 100%;
            background-image: url('../assets/servant-section2-banner.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }

        &__right {
            width: 49%;
            height: 100%;
            background-color: var(--section-bg-color);
            position: relative;

            &__text {
                position: absolute;
                right: 50%;
                top: 50%;
                transform: translate(50%, -50%);
                width: 90%;
                max-width: 379px;
                line-height: 15px;
                text-align: justify;

                @media (min-width: 768px) {
                    line-height: 25px;
                }

                @media (min-width: 1024px) {
                    line-height: 34px;
                }
            }
        }
    }

    &__bottom {
        width: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 768px) {
            margin-top: 100px;
        }

        @media (min-width: 1024px) {
            margin-top: 133px;
        }

        &__title {
            width: 100%;
            text-align: center;
            position: relative;

            &::after {
                position: absolute;
                content: '';
                width: 11%;
                max-width: 93px;
                height: 0px;
                top: 110%;
                right: 50%;
                transform: translateX(50%);
                border: 2px solid var(--news-line-color);

                @media (min-width: 768px) {
                    top: 130%;
                    border: 3px solid var(--news-line-color);
                }
            }

            &__text {
                font-weight: 600;
                font-size: 0.85rem;
                line-height: 30px;
                letter-spacing: 0.04em;

                @media (min-width: 768px) {
                    font-size: 1.3rem;
                    line-height: 38px;
                }

                @media (min-width: 1024px) {
                    font-size: 1.8125rem;
                    line-height: 47px;
                }

                span {
                    color: var(--subtitle-color);
                }
            }
        }

        &__structure {
            width: 90%;
            max-width: 1065px;
            margin: 60px 0 50px;
            font-size: 0.5rem;
            font-weight: 500;
            text-align: center;

            @media (min-width: 768px) {
                width: 90%;
                margin: 100px 0 95px;
                font-size: 1rem;
            }

            @media (min-width: 1024px) {
                margin: 144px 0 137px;
                font-size: 1.5rem;
            }
        }
    }
}

.row {
    min-width: 375px;
}
.right-line {
    border-right: 5px var(--structure-border-color) solid;
    height: 3em
}

.left-line {
    border-left: 5px var(--structure-border-color) solid;
    height: 3em
}

.top-line {
    border-top: 5px var(--structure-border-color) solid;
}

.bottom-line {
    border-bottom: 5px var(--structure-border-color) solid;
}

.halved {
    width: 50%;
    float: left;
}

.halved-height {
    height: 50%;
}

.text-wrapper {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.job-num {
    color: var(--sub-num-color);
}
.job-title {
    margin-top: 5px;
}
.job-title,
.job-num {
    font-weight: 500;
    font-size: 0.5rem;
    line-height: 10px;

    @media screen and (min-width: 768px) {
        font-size: 1.25rem;
        line-height: 15px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
        line-height: 33px;
    }
}
</style>