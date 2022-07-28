<template>
    <div class="admin-home__content__camp__management">
        <div class="admin-home__content__camp__management__search">
            <select v-model="category"
                class="select admin-home__content__camp__management__search__service">
                <option value="" selected="selected">選擇營會類別</option>
                <option value="太空營隊">太空營隊</option>
                <option value="超人營隊">超人營隊</option>
            </select>
            <select v-model="date" class="select admin-home__content__camp__management__search__category">
                <option value="" selected="selected">選擇營會日期</option>
                <option value="2022/07/08">2022/07/08</option>
                <option value="2022/07/10">2022/07/10</option>
            </select>
        </div>
        <div class="admin-home__content__camp__management__display">
            <table class="admin-home__content__camp__management__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">參加者姓名</th>
                        <th scope="col">電話</th>
                        <th scope="col">電郵</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists " :key="list.id">
                        <td>{{ list.name }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped lang="scss">
.admin-home__content__camp__management {
    width: 80%;
    max-width: 1003px;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    position: relative;

    &__search {
        display: flex;
        flex-direction: row;
        gap: 17px;
    }

    select {
        width: 493px;
        height: 52px;
        border: 0.5px solid var(--input-icon-border);
        border-radius: 5px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.06em;
        color: var(--select-color);
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
import { reactive, ref, watch } from 'vue';
const category = ref('');
const date = ref('');
const filter = reactive([]);

const lists = reactive([
    {
        id: '1',
        name: '好僕人1',
        phone: '0222222222',
        email: 'abcde11111@gmail.com',
        category: '超人營隊',
        time: '2022/07/08',
    },
    {
        id: '2',
        name: '好僕人2',
        phone: '0222222222',
        email: 'abcde11111@gmail.com',
        category: '超人營隊',
        time: '2022/07/08',
    },
    {
        id: '3',
        name: '好僕人3',
        phone: '0222222222',
        email: 'abcde11111@gmail.com',
        category: '超人營隊',
        time: '2022/07/08',
    },
    {
        id: '4',
        name: '蠟筆小新',
        phone: '022229999',
        email: 'abcde11111@gmail.com',
        category: '太空營隊',
        time: '2022/07/10',
    },
    {
        id: '5',
        name: '新之助',
        phone: '022229999',
        email: 'abcde11111@gmail.com',
        category: '太空營隊',
        time: '2022/07/10',
    },
    {
        id: '6',
        name: '桃太郎',
        phone: '022229999',
        email: 'abcde11111@gmail.com',
        category: '太空營隊',
        time: '2022/07/10',
    },
    
])
// functions
function handleSearch () {
    filter.value = lists.filter((item) => {
        (item.category === category.value) || (item.time === date.value);
    })

    console.log(filter);
}

watch(date , () => {
    console.log(date.value)
});
watch(category, () => {
    console.log(category.value)
})

</script>