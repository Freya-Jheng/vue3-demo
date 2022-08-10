<template>
    <div class="poster__content">
        <div class="poster__content__top">
            <h5 class="poster__content__top__title">愛在家</h5>
            <div class="poster__content__top__cards cards">
                <div v-for="poster in posters1" @click="moveToEditing(poster.id)" :key="poster.id"
                    class="poster__content__top__cards__card card">
                    <img :src="poster.path" alt="poster" class="poster__content__top__cards__card__image">
                    <span class="poster__content__top__cards__card__title">{{ poster.title }}</span>
                </div>
            </div>
        </div>
        <div class="poster__content__bottom">
            <h5 class="poster__content__bottom__title">盟約日營</h5>
            <div class="poster__content__bottom__cards cards">
                <div v-for="poster in posters2" @click="moveToEditing(poster.id)" :key="poster.id"
                    class="poster__content__bottom__cards__card card">
                    <img :src="poster.path" alt="poster" class="poster__content__bottom__cards__card__image">
                    <span class="poster__content__bottom__cards__card__title">{{ poster.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const posters1 = reactive([
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
])
const posters2 = reactive([
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
])

function moveToEditing(posterId) {
    router.push({ path: `editing/${posterId}` });
};
</script>

<style lang="scss" scoped>
.poster__content {
    width: 90%;
    max-width: 1149px;
    margin: 20px 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
        margin: 35px 0 60px;
        gap: 45px;
    }

    @media (min-width: 1024px) {
        margin: 50px 0 122.91px;
        gap: 60px;
    }

    h5 {
        font-weight: 600;
        font-size: 0.7rem;
        color: var(--poster-title-color);
        margin-bottom: 10px;

        @media (min-width: 768px) {
            font-size: 0.7rem;
            margin-bottom: 15px;
        }

        @media (min-width: 1024px) {
            font-size: 1.6875rem;
            margin-bottom: 20px;
        }
    }

    .cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 47.5%);
        row-gap: 2.5vh;
        column-gap: 5%;

        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 30%);
        }
    }

    .card {
        border: 1px solid var(--border-color);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        @media (min-width: 768px) {
            border-radius: 4px;
        }

        &:hover {
            background-color: var(--poster-hover-bg);

            :nth-child(2) {
                &::after {
                    display: block;
                }
            }
        }

        img {
            width: 71.35%;
            margin: 10px 0;

            @media (min-width: 768px) {
                margin: 16px 0;
            }

            @media (min-width: 1024px) {
                margin: 22px 0;
            }
        }

        span {
            width: 100%;
            height: 20%;
            border-top: 1px solid var(--border-color);
            padding: 19px 0;
            font-family: 'Padauk';
            font-weight: 400;
            letter-spacing: 0.01em;
            color: var(--poster-sub-title);
            text-align: center;
            position: relative;

            &::after {
                position: absolute;
                top: 50%;
                right: 5%;
                transform: translateY(-50%);
                content: url('../assets/Vector.png');
                display: none;

                @media (min-width: 768px) {
                    right: 10%;
                }

                @media (min-width: 1024px) {
                    right: 15%;
                }
            }

            @media (min-width: 768px) {
                font-size: 0.818rem;
            }

            @media (min-width: 1024px) {
                font-size: 1.136rem;
            }
        }
    }

}
</style>