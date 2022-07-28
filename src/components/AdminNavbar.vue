<template>
    <div class="admin-nav">
        <router-link to="/admin/home/blog" class="admin-nav__logo">
            <img class="admin-nav__logo__image" src="../assets/family-logo.png" alt="logo">
            <div class="admin-nav__logo__text">
                <span class="admin-nav__logo__text__top">
                    好僕人家庭
                </span>
                <span class="admin-nav__logo__text__bottom">
                    Good Servant Family
                </span>
            </div>
        </router-link>
        <div class="admin-nav__items">
            <router-link :to="item.path" v-for="item in items" :key="item.id" :class="{active: router.path}" class="admin-nav__items__item">
                <li class="admin-nav__items__item__link">
                    {{ item.title }}
                </li>
            </router-link>
        </div>
        <button @click.prevent.stop="logOut" type="button">登出</button>
    </div>
</template>

<style lang="scss" scoped>
.admin-nav {
    width: 16%;
    height: 100vh;
    background-color: var(--admin-navbar-bg);
    position: relative;

    &__logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        background-color: var(--sub-font-color);
        padding: 25px 0;

        &__image {
            width: 52px;
            height: 49.15px;
        }

        &__text {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            &__top {
                font-size: 28px;
            }
        }
    }

    &__items {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 57px;
        letter-spacing: 0.04em;

        .active {
            background-color: var(--admin-nav-item-bg-color);

            :nth-child(1) {
                color: var(--sub-font-color);
            }
        }

        &__item {
            width: 100%;
            text-align: center;
            cursor: pointer;

            &:hover,
            &:focus,
            &:active {
                background-color: var(--admin-nav-item-bg-color);

                :nth-child(1) {
                    color: var(--sub-font-color);
                }
            }
        }

    }

    button {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        width: 70%;
        max-width: 237px;
        height: 51px;
        background: var(--button-bg-color);
        border-radius: 5px;
        color: var(--sub-font-color);
        text-align: center;
        margin-top: 27px;
    }
}
</style>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import authorityAPI from '../apis/authorlization';

const router = useRouter();
const items = reactive([
    {
        id: '1',
        title: '好文分享',
        path: '/admin/home/blog'
    },
    {
        id: '2',
        title: '最新營會',
        path: '/admin/home/news'
    },
    {
        id: '3',
        title: '影片管理',
        path: '/admin/home/camp'
    },
    {
        id: '4',
        title: '表單申請',
        path: '/admin/home/cooperate'
    },
    {
        id: '5',
        title: '帳戶管理',
        path: '/admin/home/account/teachers'
    },
    {
        id: '6',
        title: '聯絡我們',
        path: '/admin/home/contact'
    },
    {
        id: '7',
        title: '課程管理',
        path: '/admin/home/courses'
    },
])

// functions 
async function logOut() {
    try {
        const response = await authorityAPI.logOut();
        if (response.status !== 200) {
            console.log(response)
            throw new Error(response.data.message);
        }
        
        localStorage.removeItem('token');
        router.push('/admin/login');
    } catch (err) {
        console.log(err);
    }
}
</script>