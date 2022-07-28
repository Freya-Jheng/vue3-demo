<template>
    <div class="admin-home__content__blog__categories">
        <div class="admin-home__content__blog__categories__search">
            <select name="" id="" class="admin-home__content__blog__categories__search__status">
                <option value="選擇審核狀態">選擇審核狀態</option>
                <option value="審核通過">審核通過</option>
                <option value="審核未通過">審核未通過</option>
            </select>
            <select name="" id="" class="admin-home__content__blog__categories__search__article">
                <option value="選擇文章類別">選擇文章類別</option>
                <option v-for="item in articleCategories" :key="item.id" :value="item.name">{{ item.name }}</option>
            </select>
            <select name="" id="" class="admin-home__content__blog__categories__search__article">
                <option value="選擇作者">選擇作者</option>
                <option v-for="item in writers" :key="item.id" :value="item.name">{{ item.name }}</option>
            </select>
            <button type="button" class="admin-home__content__blog__categories__search__button">
                <img src="../assets/search-icon-white.png" alt="search"
                    class="admin-home__content__blog__categories__search__button__icon">
                <span class="admin-home__content__blog__categories__search__button__text">搜尋</span>
            </button>
        </div>
        <div class="admin-home__content__blog__categories__display">
            <table class="admin-home__content__blog__categories__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">標題</th>
                        <th scope="col">機構</th>
                        <th scope="col">分類</th>
                        <th scope="col">時間</th>
                        <th scope="col">狀態</th>
                        <th scope="col">處理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists " :key="list.id">
                        <td>{{ list.title }}</td>
                        <td>{{ list.writer }}</td>
                        <td>{{ list.category }}</td>
                        <td>{{ list.time }}</td>
                        <td>{{ list.status }}</td>
                        <td>
                            <router-link
                                :to="{ name: 'individual-blog', params: { id: list.id } }">
                                <button type="button"></button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
.admin-home__content__blog__categories {
    width: 100%;
    height: 100%;
    padding: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__search {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        gap: 17px;


        select {
            width: 237px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
            padding-left: 17px;
            line-height: 52px;
            cursor: pointer;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.06em;
            color: var(--select-color);
        }

        &__button {
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
        width: 80%;
        max-width: 1000px;
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
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.06em;
            color: var(--table-font-color);
            padding-bottom: 16px;
        }

        td {
            height: 71px;
            line-height: 71px;
            border-bottom: 0.5px solid var(--input-icon-border);
        }

        button {
            width: 92px;
            height: 31px;
            background: var(--button-bg-color);
            border-radius: 5px;
            position: relative;

            &::after {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                content: '修改';
                color: var(--sub-font-color);
            }
        }
    }

}
</style>

<script setup>
import { reactive } from 'vue';
import articlesAPI from '../apis/articles';
import { useRouter } from 'vue-router';

const router = useRouter();
const articleCategories = reactive([
    {
        id: '1',
        name: '婚姻與跟進訣竅',
    }
])
const writers = reactive([
    {
        id: '1',
        name: 'test',
    },
    {
        id: '1',
        name: 'test1',
    },
])
const lists = reactive([
    {
        id: '1',
        title: '『節儉』起家',
        writer: 'test',
        category: '婚姻與跟進訣竅',
        time: '2021/01/03',
        status: '審核未通過',
    },
    {
        id: '2',
        title: '『節儉』起家',
        writer: 'test',
        category: '婚姻與跟進訣竅',
        time: '2021/01/03',
        status: '審核通過',
    },
    {
        id: '3',
        title: '『節儉』起家',
        writer: 'test',
        category: '婚姻與跟進訣竅',
        time: '2021/01/03',
        status: '審核通過',
    },
])

// functions
async function getArticles() {
    try {
        const response = await articlesAPI.getArticles();
        console.log(response);
    } catch (err) {
        console.log(err)
    }
}
getArticles()
</script>