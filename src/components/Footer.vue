<template>
    <div class="footer">
        <ul class="footer__categories">
            <li class="footer__categories__item">
                <router-link to="/home/news" class="footer__categories__item__link">
                    最新消息
                </router-link>
            </li>
            <li class="footer__categories__item">
                <router-link to="/home/story" class="footer__categories__item__link">
                    好文分享
                </router-link>
            </li>
            <li class="footer__categories__item">
                <router-link to="/home/camp" class="footer__categories__item__link">
                    參與營會
                </router-link>
            </li>
            <li class="footer__categories__item">
                <router-link to="/home/sponsor" class="footer__categories__item__link">
                    贊助我們
                </router-link>
            </li>
            <li class="footer__categories__item">
                <button data-toggle="modal" data-target="#churchModal" class="footer__categories__item__link">
                    教會專區
                </button>
            </li>
            <li class="footer__categories__item">
                <router-link to="/home/contact" class="footer__categories__item__link">
                    聯絡我們
                </router-link>
            </li>
        </ul>
        <div class="footer__logo">
            <img src="../assets/logo-black.png" alt="" class="footer__logo__image">
        </div>
        <div class="footer__inform">
            <div class="footer__inform__content">
                <span class="footer__inform__content__title">
                    台灣好僕人婚姻家庭服務協會
                </span>
                <span class="footer__inform__content__phone">
                    電話 / 0932-994-738
                </span>
                <span class="footer__inform__content__email">
                    Email / pupcan@gmail.com
                </span>
            </div>
            <div class="footer__inform__icons">
                <img class="footer__inform__icons__facebook" alt="facebook" src="../assets/facebook.png">
                <img class="footer__inform__icons__line" alt="line" src="../assets/line.png">
            </div>
        </div>
        <!-- church modal start-->
        <div class="modal fade" id="churchModal" tabindex="-1" aria-labelledby="churchModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="wrapper">
                        <router-link to="/home/poster/all" data-dismiss="modal" class="wrapper__circle design">
                            <img src="../assets/design.png" alt="" class="wrapper__circle__image">
                            <span class="wrapper__circle__text">海報設計</span>
                        </router-link>
                        <router-link to="/home/camp-apply" data-dismiss="modal" class="wrapper__circle cooperate">
                            <img src="../assets/join.png" alt="" class="wrapper__circle__image">
                            <span class="wrapper__circle__text">合作申請</span>
                        </router-link>
                        <router-link to="/home/videos" data-dismiss="modal" class="wrapper__circle videos">
                            <img src="../assets/videos.png" alt="" class="wrapper__circle__image">
                            <span class="wrapper__circle__text">宣傳影片</span>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
        <!-- church modal end-->
    </div>
</template>

<style scoped lang="scss">
.footer {
    @media (max-width: 768px) {
        display: none;
    }

    position: relative;
    width: 100%;
    height: 340px;
    font-size: 16px;
    color: var(--footer-font-color);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    &::after {
        position: absolute;
        top: 0;
        right: 50%;
        transform: translateX(50%);
        content: '';
        width: 1295.5px;
        height: 0px;
        border: 2px solid var(--footer-line-border);
    }

    &__categories {
        display: flex;
        flex-direction: row;
        gap: 37px;

        &__item {
            cursor: pointer;

            &__link {
                font-family: 500;
            }
        }

    }

    &__logo {
        &__image {
            width: 221px;
            height: 60px;
        }

    }

    &__inform {
        display: flex;
        flex-direction: row;
        align-items: center;

        &__content {
            display: flex;
            flex-direction: row;
            gap: 16px;
            margin-right: 24.75px;
        }

        &__icons {
            &__facebook {
                width: 10.5px;
                height: 19.25px;
                margin-right: 26.75px;
            }

            &__line {
                width: 28px;
                height: 27px;
            }

            &__facebook,
            &__line {
                cursor: pointer;
            }
        }
    }
}

#churchModal {

    .modal-dialog,
    .modal-content {
        z-index: 100;
        top: 90px;
        left: -5%;

        @media (max-width: 375px) {
            top: 15%;
            left: 10%;
        }
    }

    .modal-content {
        background-color: unset;
        border: unset;
    }
}

.wrapper {
    width: 200%;
    display: flex;
    flex-direction: row;
    gap: 59px;

    @media (max-width: 375px) {
        flex-direction: column;
        gap: 29px;
    }

    &__circle {
        position: relative;
        width: 193px;
        height: 193px;
        border: 2px solid var(--circle-border-color);
        border-radius: 50%;
        background-color: var(--circle-bg-color);
        cursor: pointer;

        @media (max-width: 375px) {
            width: 130px;
            height: 130px;
        }

        &__image,
        &__text {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            cursor: pointer;
        }

        &__text {
            width: 50px;
            height: 64px;
            line-height: 30px;
            letter-spacing: 0.07em;
            color: var(--sub-font-color);
            font-size: 22px;
            display: none;
        }

        &:hover {
            :nth-child(1) {
                display: none;
            }

            :nth-child(2) {
                display: block;
            }

            background-color: var(--circle-bg-color-hover);
        }
    }
}
</style>
