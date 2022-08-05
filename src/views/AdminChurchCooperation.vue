<template>
    <div class="cooperate-church">
        <div class="cooperate-church__selects">
            <select name="" id="" class="cooperate-church__selects__camp-category">
                <option value="">選擇營會類別</option>
                <option v-for="tag in GsFamily.campTags" :key="tag.id" :value="tag.id">{{ tag.tag }}</option>
            </select>
            <select name="" id="" class=" cooperate-church__selects__date-category">
                <option value="">選擇營會日期</option>
                <option v-for="date in dates.value" :key="date.id" :value="date">{{ date }}</option>
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
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.campTag.id }}</td>
                        <td>{{ list.numbers }}</td>
                        <td>{{ list.date }}</td>
                        <td>{{ list.churchName }}</td>
                        <td>{{ list.name }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.email }}</td>
                        <td>{{ list.address }}</td>
                        <td><button @click.prevent.stop="deleteChurchs(list.id)" type="button" class="delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import cooperateAPI from '../apis/cooperate.js';
import { useGsFamily } from '../stores/gsfamily.js';

const lists = reactive([]);
const dates = reactive([]);
const GsFamily = useGsFamily();

GsFamily.getTags();

// functions
async function getChurchs() {
    try {
        const response = await cooperateAPI.getAllChurch();

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        lists.value = response.data;

        lists.value.forEach((list) => {
            dates.push(list.date);
        });

        dates.value = dates.filter((element, index, arr) => {
            return arr.indexOf(element) === index;
        });

    } catch (err) {
        console.log(err);
    }
};

async function deleteChurchs(id) {
    try {
        const response = await cooperateAPI.deleteChurch({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('刪除成功！')
        };

        getChurchs();

    } catch (err) {
        console.log(err);
    }
}

getChurchs();
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