<template>
    <div class="cooperate-individual">
        <div class="cooperate-individual__selects">
            <select v-model="searchKeywords.campTagId" name="" id=""
                class=" cooperate-individual__selects__camp-category">
                <option value="">選擇營會類別</option>
                <option v-for="tag in GsFamily.campTags" :key="tag.id" :value="tag.id">{{ tag.tag }}</option>
            </select>
            <select v-model="searchKeywords.date" name="" id="" class="cooperate-individual__selects__date-category">
                <option value="">選擇營會日期</option>
                <option v-for="list in dates.value " :key="list.id" :value="list">{{ list }}</option>
            </select>
            <button @click.prevent.stop="searchDataByCampId" type="button"
                class="cooperate-individual__selects__button">
                <img src="../assets/search-icon-white.png" alt="search"
                    class="cooperate-individual__selects__button__icon">
                <span class="cooperate-individual__selects__button__text">搜尋</span>
            </button>
        </div>
        <div class="cooperate-individual__display">
            <table class="cooperate-individual__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">日期</th>
                        <th scope="col">姓名</th>
                        <th scope="col">電話</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.date }}</td>
                        <td>{{ list.campTag.id }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.email }}</td>
                        <td><button @click.prevent.stop="deleteIndividuals(list.id)" type="button"
                                class="delete"></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import cooperateAPI from '../apis/cooperate';
import { useGsFamily } from '../stores/gsfamily';

const GsFamily = useGsFamily();
const router = useRouter();
const lists = reactive([]);
const dates = reactive([]);
const searchKeywords = reactive({
    campTagId: '',
    date: '',
})
GsFamily.getTags();


// functions
async function getIndividuals() {
    try {
        const response = await cooperateAPI.getAllIndividual();

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
async function deleteIndividuals(id) {
    try {
        const response = await cooperateAPI.deleteIndividual({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('刪除成功！');
        };

        getIndividuals();

    } catch (err) {
        console.log(err);
    }
};
async function searchData() {
    try {
        const personDTO = {
            campTagId: searchKeywords.campTagId,
            date: searchKeywords.date.replaceAll("/", "-"),
        }

        const response = await cooperateAPI.getIndividualByTimeCampId({
            personDTO,
        })

        console.log(response);
    } catch (err) {
        console.log(err);
    }
};
async function searchDataByCampId() {
    try {
        const response = await cooperateAPI.getIndividualByCampId({
            campTagId: searchKeywords.campTagId,
        });

        console.log(response);
    } catch (err) {
        console.log(err);
    };
}

getIndividuals();
</script>


<style lang="scss" scoped>
.cooperate-individual {
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
        gap: 10px;
        justify-content: space-between;
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