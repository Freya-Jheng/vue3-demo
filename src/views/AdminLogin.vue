<template>
    <div class="admin-login">
        <form @submit.prevent.stop="handleLogin" class="admin-login__content">
            <div class="admin-login__content__header">
                <span class="admin-login__content__header__text">
                    後台管理系統
                </span>
            </div>
            <div class="admin-login__content__inputs">
                <div class="admin-login__content__inputs__account">
                    <img src="../assets/account.png" alt="account" class="admin-login__content__inputs__account__image">
                    <input v-model="account" type="text" placeholder="帳號"
                        class="admin-login__content__inputs__account__input">
                </div>
                <div class="admin-login__content__inputs__password">
                    <img src="../assets/password.png" alt="password"
                        class="admin-login__content__inputs__password__image">
                    <input v-model="password" type="password" placeholder="密碼"
                        class="admin-login__content__inputs__password__input">
                </div>
            </div>
            <div class="admin-login__content__footer">
                <div>
                    <button type="submit" data-dismiss="modal" class="btn">登入
                        <img class="arrow" src="../assets/arrow.png" alt="">
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import authorlizationApi from '../apis/authorlization';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const account = ref('');
const password = ref('');
const router = useRouter();

async function handleLogin() {
    try {
        if (!account.value.trim()) {
            return alert('請輸入帳號！');
        } else if (!password.value.trim()) {
            return alert('請輸入密碼！')
        }
        
        const response = await authorlizationApi.logIn({
            account: account.value,
            password: password.value
        });

        if (response.status !== 200) {
            throw new Error(response.statusText)
        }

        localStorage.setItem('token', response.data);
        router.push('/admin/home/blog');
    } catch (err) {
        console.log(err)
        alert('請檢查帳號或密碼！')
    }
}
</script>

<style scoped lang="scss">
.admin-login {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/admin-login-bg-image.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;

    &__content {
        width: 95%;
        max-width: 475.38px;
        height: 50%;
        max-height: 363px;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -53%);
        background-color: rgba(254, 254, 254, 0.86);
        ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 31px;
        font-size: 13.59px;
        color: var(--main-font-color);

        &__header {
            &__text {
                font-size: 1.07rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                color: var(--admin-login-title-color);

                @media screen and (min-width: 768px) {
                    font-size: 1.2326rem;
                }

                @media screen and (min-width: 1024px) {
                    font-size: 1.3953rem;
                }
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
}
</style>