<template>
    <div class="admin-home__content__cooperate">
        <select name="" id="" class=" admin-home__content__cooperate__category">
            <option value="愛在家夫婦日營">愛在家夫婦日營</option>
            <option value="婚姻">婚姻</option>
        </select>
        <div class="admin-home__content__cooperate__display">
            <table class="admin-home__content__cooperate__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">時間</th>
                        <th scope="col">機構</th>
                        <th scope="col">地址</th>
                        <th scope="col">電話</th>
                        <th scope="col">電郵</th>
                        <th scope="col">聯絡人</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists " :key="list.id">
                        <td>{{ list.time }}</td>
                        <td>{{ list.place }}</td>
                        <td>{{ list.address }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.email }}</td>
                        <td>{{ list.contact }}</td>
                    </tr>
                </tbody>
            </table>
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

    select {
        width: 999px;
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

const lists = reactive([
    {
        id: '1',
        time: '『2021-05-15',
        place: '台中慕義堂',
        address: '台中市北區忠明路499號3樓',
        phone: '22056797',
        email: 'tsai661108@gmail.com',
        contact: '蔡逸文'
    },
    {
        id: '1',
        time: '『2021-05-15',
        place: '台中慕義堂',
        address: '台中市北區忠明路499號3樓',
        phone: '22056797',
        email: 'tsai661108@gmail.com',
        contact: '蔡逸文'
    },
    {
        id: '1',
        time: '『2021-05-15',
        place: '台中慕義堂',
        address: '台中市北區忠明路499號3樓',
        phone: '22056797',
        email: 'tsai661108@gmail.com',
        contact: '蔡逸文'
    }
])
</script>