<template>
    <div class="cooperate-church">
        <div class="cooperate-church__selects">
            <select name="" id="" class="cooperate-church__selects__camp-category">
                <option value="愛在家夫婦日營">選擇營會類別</option>
                <option value="婚姻">婚姻</option>
            </select>
            <select name="" id="" class=" cooperate-church__selects__date-category">
                <option value="愛在家夫婦日營">選擇營會日期</option>
                <option value="婚姻">婚姻</option>
            </select>
        </div>
        <div class="cooperate-church__display">
            <table class="cooperate-church__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">類型</th>
                        <th scope="col">人數</th>
                        <th scope="col">時間</th>
                        <th scope="col">團隊或機構名稱</th>
                        <th scope="col">聯絡人</th>
                        <th scope="col">電話</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists " :key="list.id">
                        <td>{{ list.time }}</td>
                        <td>{{ list.place }}</td>
                        <td>{{ list.address }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.time }}</td>
                        <td>{{ list.place }}</td>
                        <td>{{ list.address }}</td>
                        <td>{{ list.phone }}</td>
                        <td><button type="button" class="delete"></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
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


<style lang="scss" scoped>
.cooperate-church {
    width: 100%;
    height: 100%;
    margin-top: 50px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__selects {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__display {
        width: 90%;
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

        .delete {
            position: relative;
            background-color: var(--check-button-bg-color);

            &::after {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                content: '刪除';
                color: var(--sub-font-color);
            }
        }
    }

    select {
        width: 47.5%;
        height: 52px;
        border: 0.5px solid var(--input-icon-border);
        border-radius: 5px;
        padding-left: 17px;
        cursor: pointer;
        font-size: 14px;
        letter-spacing: 0.06em;
        color: var(--select-color);
    }

}
</style>