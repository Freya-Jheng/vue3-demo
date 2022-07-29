<template>
    <div class="admin-home__content__cooperate">
        <div class="admin-home__content__cooperate__navbar">
            <router-link :to="{ name: 'cooperate-individual' }" :class="{ active: router.path }"
                class="admin-home__content__cooperate__navbar__link">
                個人申請
            </router-link>
            <router-link :to="{ name: 'cooperate-team' }" class="admin-home__content__cooperate__navbar__link">團隊申請
            </router-link>
            <router-link :to="{ name: 'cooperate-church' }" class="admin-home__content__cooperate__navbar__link">教會申請
            </router-link>
        </div>
        <div class="admin-home__content__cooperate__content">
            <router-view />
        </div>
    </div>
</template>

<style scoped lang="scss">
.admin-home__content__cooperate {
    width: 100%;
    height: 100%;
    padding: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__navbar {
        width: 90%;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        gap: 30px;
        border-bottom: 3px solid var(--input-icon-border);

        .active {
            color: var(--table-font-color);

            &::after {
                position: absolute;
                top: 100%;
                left: 0;
                content: '';
                width: 100%;
                height: 3px;
                background-color: var(--table-font-color);
            }
        }

        &__link {
            width: 150px;
            text-align: center;
            padding-bottom: 10px;
            cursor: pointer;
            position: relative;

            &:hover,
            &:focus {
                color: var(--table-font-color);

                &::after {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 3px;
                    background-color: var(--table-font-color);
                }
            }
        }
    }

    .active {
        color: var(--table-font-color);

        &::after {
            position: absolute;
            top: 100%;
            left: 0;
            content: '';
            width: 100%;
            height: 3px;
            background-color: var(--table-font-color);
        }
    }
}
</style>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>