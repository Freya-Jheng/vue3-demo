<template>
    <div class="admin-contact">
        <select name="" id="" class="admin-contact__sort">
            <option value="選擇排列方式">選擇排列方式</option>
            <option value="依照時間">依照時間</option>
            <option value="依照檔案大小">依照檔案大小</option>
        </select>
        <div class="admin-contact__display">
            <table class="admin-contact__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">日期</th>
                        <th scope="col">姓名</th>
                        <th scope="col">電話</th>
                        <th scope="col">內容</th>
                        <th scope="col">附件</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.date }}</td>
                        <td>{{ list.name }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.name }}</td>
                        <td>{{ list.name }}</td>
                        <td>
                            <router-link :to="{ name: 'admin-individual-contact',params: {id: list.name}}">
                                <button type="button"></button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-contact {
    width: 80%;
    max-width: 1003px;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    position: relative;

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
        width: 100%;
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
                content: '檢視';
                color: var(--sub-font-color);
            }
        }
    }
}
</style>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import contactAPI from '../apis/contact';

const route = useRoute();
const lists = reactive([]);

// funcitons
async function getContacts () {
    try {
        const response = await contactAPI.get();

        if (response.status !== 200) {
            throw new Error (response.statusText);
        };

        console.log(response)

        // lists.value = {...response.data};
        
        // console.log('response from contact',lists.value);
    } catch (err) {
        console.log(err);
    }   
}

getContacts()
</script>