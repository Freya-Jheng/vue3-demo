<template>
    <div class="admin-home__content__news__management">
        <div class="admin-home__content__news__management__search">
            <select name="" id="" class="admin-home__content__news__management__search__category">
                <option value="選擇消息分類">選擇消息分類</option>
                <option value="婚姻">婚姻</option>
            </select>
            <button type="button" class="admin-home__content__news__management__search__button">
                <img src="../assets/search-icon-white.png" alt="search"
                    class="admin-home__content__news__management__search__button__icon">
                <span class="admin-home__content__news__management__search__button__text">搜尋</span>
            </button>
        </div>
        <div class="admin-home__content__news__management__display">
            <table class="admin-home__content__news__management__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">標題</th>
                        <th scope="col">分類</th>
                        <th scope="col">時間</th>
                        <th scope="col">處理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists " :key="list.id">
                        <td>{{ list.title }}</td>
                        <td>{{ list.category }}</td>
                        <td>{{ list.time }}</td>
                        <td>
                            <button type="button" class="check-btn"></button>
                            <button type="button" class="edit-btn"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-home__content__news__management {
    width: 80%;
    padding: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__search {
        width: 80%;
        display: flex;
        flex-direction: row;
        gap: 17px;

        select {
            width: 745px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.06em;
            color: var(--select-color);
        }

        button {
            width: 237px;
            height: 51px;
            background: var(--button-bg-color);
            border-radius: 5px;
            color: var(--sub-font-color);
            font-size: 14px;
            letter-spacing: 0.06em;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 15px;

            &__icon {
                width: 16px;
                height: 18px;
            }
        }
    }

    &__display {
        width: 100%;
        max-width: 999px;
        margin-top: 73px;

        table {
            width: 100%;
        }

        thead {
            width: 100%;
            border-bottom: 0.5px solid var(--input-icon-border);
        }

        th,
        td {
            text-align: center;
        }

        th {
            font-weight: 600;
            color: var(--table-font-color);
            padding-bottom: 16px;
        }

        td {
            width: 300px;
            height: 71px;
            line-height: 71px;
            border-bottom: 0.5px solid var(--input-icon-border);
        }

        button {
            width: 92px;
            height: 31px;
            border-radius: 5px;
            position: relative;
        }

        .edit-btn {
            background: var(--button-bg-color);

            &::after {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                content: '修改';
                color: var(--sub-font-color);
            }
        }

        .check-btn {
            background: var(--check-button-bg-color);
            margin-right: 25px;

            &::before {
                position: absolute;
                width: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                content: '檢視/處理';
                color: var(--sub-font-color);
            }
        }

    }
}
</style>

<script setup>
import { reactive } from 'vue';
const lists = reactive([
    {
        id: '1',
        title: '2021/12/12 師資訊練',
        category: '盟約夫婦日常',
        time: '2021/01/03',
    },
    {
        id: '2',
        title: '2021/12/12 師資訊練',
        category: '盟約夫婦日常',
        time: '2021/01/03',
    },
    {
        id: '3',
        title: '2021/12/12 師資訊練',
        category: '盟約夫婦日常',
        time: '2021/01/03',
    },
])
</script>