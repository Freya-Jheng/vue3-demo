<template>
    <div class="app__home__nav">
        <router-link to="/" class="app__home__nav__logo">
            <img class="app__home__nav__logo__image" src="../assets/family-logo.png" alt="logo">
            <div class="app__home__nav__logo__text">
                <span :style="route.name === 'root' || color" class="app__home__nav__logo__text__top">
                    好僕人家庭
                </span>
                <span :style="route.name === 'root' || color" class="app__home__nav__logo__text__bottom">
                    Good Servant Family
                </span>
            </div>
        </router-link>

        <input type="checkbox" class="app__home__nav__checkbox" id="nav-checkbox">
        <label for="nav-checkbox" class="app__home__nav__label">
            <font-awesome-icon :icon="['fas', 'bars']" class="app__home__nav__label__icon" />
        </label>
        <div class="app__home__nav__left">
            <ul class="app__home__nav__left__items">
                <li class="app__home__nav__left__items__item">
                    <router-link to="/home/news" class="item app__home__nav__left__items__item__link">
                        最新消息
                    </router-link>
                </li>
                <li class="app__home__nav__left__items__item">
                    <router-link to="/home/story" class="item app__home__nav__left__items__item__link">
                        好文分享
                    </router-link>
                </li>
                <li class="select app__home__nav__left__items__item">
                    <span class="item app__home__nav__left__items__item__link">
                        好僕人介紹
                    </span>
                    <div class="options">
                        <router-link to="/home/about" class="options__link">
                            決策與使命
                        </router-link>
                        <br>
                        <router-link to="/home/servant" class="options__link">
                            遇見好僕人
                        </router-link>
                    </div>
                </li>
                <li class="select app__home__nav__left__items__item">
                    <span class="item app__home__nav__left__items__item__link">
                        參與營會
                    </span>
                    <div class="options">
                        <router-link to="/home/camp-individual" class="options__link">
                            個人申請
                        </router-link>
                        <br>
                        <router-link to="/home/camp-group" class="options__link">
                            團隊申請
                        </router-link>
                    </div>
                </li>
                <li class="select app__home__nav__left__items__item">
                    <span class="item app__home__nav__left__items__item__link">
                        聯絡與奉獻
                    </span>
                    <div class="options">
                        <router-link to="/home/contact" class="options__link">
                            聯絡我們
                        </router-link>
                        <br>
                        <router-link to="/home/sponsor" class="options__link">
                            支持我們
                        </router-link>
                    </div>
                </li>
            </ul>
            <div class="app__home__nav__left__specials">
                <button data-toggle="modal" data-target="#churchModal1" type=" button"
                    class="app__home__nav__left__specials__church">
                    教會專區
                </button>
                <button v-if="route.name !== 'courses'" data-toggle="modal" data-target="#teacherModal" type="button"
                    class="app__home__nav__left__specials__teacher">
                    師資專區
                </button>
                <button @click.prevent.stop="frontLogout()" v-else="route.name === 'courses'" type="button"
                    class="app__home__nav__left__specials__teacher">
                    登出
                </button>
            </div>
        </div>
    </div>
    <!-- church modal start-->
    <div class="modal fade" id="churchModal1" tabindex="-1" aria-labelledby="churchModalLabel" aria-hidden="true">
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
    <!-- teacher modal start -->
    <div class="modal fade" id="teacherModal" tabindex="-1" aria-labelledby="teachaerModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent.stop="frontLogin" class="teacher-modal__content modal-body">
                    <div class="teacher-modal__content__header">
                        <span class="teacher-modal__content__header__text">
                            師資專區
                        </span>
                    </div>
                    <div class="teacher-modal__content__inputs">
                        <div class="teacher-modal__content__inputs__account">
                            <img src="../assets/account.png" alt="account"
                                class="teacher-modal__content__inputs__account__image">
                            <input type="text" placeholder="帳號" class="teacher-modal__content__inputs__account__input"
                                v-model="teacherLogin.account">
                        </div>
                        <div class="teacher-modal__content__inputs__password">
                            <img src="../assets/password.png" alt="password"
                                class="teacher-modal__content__inputs__password__image">
                            <input type="password" placeholder="密碼"
                                class="teacher-modal__content__inputs__password__input" v-model="teacherLogin.password">
                        </div>
                    </div>
                    <div class="teacher-modal__content__footer">
                        <button type="submit" class="btn">登入
                            <img class="arrow" src="../assets/arrow.png" alt="">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- teacher modal end -->
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import authorizationAPI from '../apis/authorlization';

let color = 'color: #000000'
const router = useRouter();
const route = useRoute();
const teacherLogin = reactive({
    account: '',
    password: '',
});
// functions
async function frontLogin() {
    try {
        if(!teacherLogin.account.trim() || !teacherLogin.password.trim() ) {
            return alert('請輸入帳號密碼！')
        }

        const modalBackdrop = document.querySelector('.modal-backdrop');
        const modal = document.querySelector('#teacherModal');
        const response = await authorizationAPI.logIn({
            account: teacherLogin.account,
            password: teacherLogin.password,
        });
        
        localStorage.setItem('token', response.data);
        modal.remove();
        modalBackdrop.remove();
        router.push({ name:'courses'});
    } catch (err) {
        console.log(err);
    }
};

async function frontLogout() {
    try {
        const response = await authorizationAPI.logOut();
        if (response.status !== 200) {
            console.log(response)
            throw new Error(response.data.message);
        };

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        localStorage.removeItem('token');
        router.back(-1);
    } catch(err) {
        console.log(err);
    }
}

</script>

<style lang="scss" scoped>
.app__home__nav {
    width: 100%;
    min-width: 375px;
    padding-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    position: relative;

    @media (min-width: 768px) {
        padding-top: 37.43px;
        font-size: 16px;
    }

    &__logo {
        padding-left: 10px;
        min-width: 300px;
        display: flex;
        flex-direction: row;
        gap: 8px;
        cursor: pointer;

        @media (min-width: 768px) {
            padding-left: 55px;
        }

        &__image {
            width: 42px;
            height: 39.15px;

            @media (min-width: 768px) {
                width: 52px;
                height: 49.15px;
            }
        }

        &__text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            color: var(--sub-font-color);

            &__top {
                font-size: 20px;

                @media (min-width: 768px) {
                    font-size: 28px;
                }
            }
        }
    }

    &__checkbox {
        display: none;

        &:checked~.app__home__nav__left {
            transform: scale(1, 1);
            transition: transform 0.5s;
        }
    }

    &__label {
        padding-right: 30px;

        &__icon {
            font-size: 25px;
            cursor: pointer;

            @media screen and (min-width: 1024px) {
                display: none;
            }
        }

        @media screen and (min-width: 1024px) {
            display: none;
        }
    }

    &__left {
        position: absolute;
        top: 100%;
        z-index: 1;
        width: 100%;
        height: 45vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--sub-font-color);
        transform: scale(1, 0);
        transform-origin: top;

        @media screen and (min-width: 1024px) {
            position: unset;
            top: unset;
            z-index: 0;
            height: unset;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            gap: 30px;
            transform: scale(1, 1);
            transform-origin: unset;
            background-color: unset;
            padding-right: 116px;
        }

        &__items {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;

            @media screen and (min-width: 1024px) {
                flex-direction: row;
                gap: 0px;
                margin-bottom: 0px;
            }

            &__item {
                cursor: pointer;

                @media screen and (min-width: 1024px) {
                    margin-left: 37px;
                }
            }
        }

        &__specials {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: var(--button-color);

            @media screen and (min-width: 1024px) {
                display: unset;
                flex-direction: unset;
                align-items: unset;
                justify-content: unset;
            }

            &__church,
            &__teacher {
                border: 1px solid var(--button-color);
                border-radius: 5px;
                padding: 5px 10px 6px;
                cursor: pointer;

                @media (min-width: 768px) {
                    padding: 6px 12px 7px;
                }
            }

            &__teacher {
                margin-left: 27px;
            }
        }
    }

    // select 
    .select {
        @media screen and (min-width: 1024px) {
            position: relative;
        }

        &:hover,
        &:active {
            :nth-child(2) {
                display: block;
                transform: scale(1, 1);
                transform-origin: top;
            }
        }

        .options {
            width: 100%;
            text-align: center;
            line-height: 20px;
            margin-top: 5px;
            display: none;
            transform: scale(1, 0);


            @media (min-width: 768px) {
                font-size: 12.5px;
            }

            @media screen and (min-width: 1024px) {
                all: unset;
                position: absolute;
                width: 100%;
                font-size: 15.7px;
                top: 125%;
                left: 0;
                height: 3.5vw;
                transform: scale(1, 0);
                font-size: 10px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                line-height: 20px;
            }

            .options__link {
                @media screen and (min-width: 768px) {
                    font-size: 12.5px;
                }

                @media screen and (min-width: 1024px) {
                    font-size: 15.7px;
                }
            }

        }
    }
}

// church modal start
#churchModal1 {

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

    // .modal-back

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

// church modal end 

// teacher modal start
#teacherModal {

    .modal-dialog,
    .modal-content {
        width: 360px;
        height: 265px;
        top: 70px;
        right: 0.25%;

        @media (min-width: 768px) {
            width: 438px;
            height: 328px;
            right: 0;
        }
    }
}

.teacher-modal__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 31px;
    font-size: 13.59px;
    color: var(--main-font-color);


    &__header {
        &__text {
            font-size: 17.12px;
        }
    }

    &__inputs {
        display: flex;
        flex-direction: column;
        gap: 10.68px;

        input {
            width: 70%;
            height: 100%;
            padding-left: 16.5px;

            &::placeholder {
                font-family: 'Roboto';
                color: var(--input-icon-border);
            }
        }

        img {
            padding: 0 19.5px;
        }

        &__account,
        &__password {
            position: relative;
            width: 340px;
            height: 45.62px;
            border: 0.485322px solid var(--input-border);
            border-radius: 2.91193px;
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (min-width: 768px) {
                width: 350.4px;
            }

            &::after {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 55px;
                content: '';
                width: 1px;
                height: 33.49px;
                background-color: var(--input-icon-border);
            }
        }
    }

    &__footer {
        .btn {
            position: relative;
            font-size: 11.78px;
            font-weight: 600;
            width: 130.27px;
            height: 30.05px;
            color: var(--sub-font-color);
            background: var(--button-bg-color);
            border-radius: 31.4118px;

            @media (min-width: 768px) {
                width: 156.27px;
                height: 40.05px;
            }

            .arrow {
                position: absolute;
                right: 26.31px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
}

// teacher modal end
</style>
