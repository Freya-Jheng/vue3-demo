<template>
    <div class="admin-individual-blog">
        <form @submit.prevent.stop="saveChange" v-for="item in individualList" :key="item.id"
            class="admin-individual-blog__form">
            <div class="admin-individual-blog__form__title input">
                <span>標題</span>
                <input v-model="item.title" type="text" name="" id="">
            </div>
            <div class="admin-individual-blog__form__institution input">
                <span>機構</span>
                <input v-model="item.place" type="text" name="" id="">
            </div>
            <div class="admin-individual-blog__form__category input">
                <span>分類</span>
                <input v-model="item.category" type="text" name="" id="">
            </div>
            <div class="admin-individual-blog__form__time input">
                <span>時間</span>
                <input v-model="item.time" type="date">
            </div>
            <div class="admin-individual-blog__form__status input">
                <span>狀態</span>
                <select v-model="item.status" class="admin-individual-blog__form__remark__select">
                    <option value="審核通過">審核通過</option>
                    <option value="審核未通過">審核未通過</option>
                </select>
            </div>
            <div class="admin-individual-blog__form__content input">
                <span>文章內容</span>
                <textarea v-model="item.content" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="wrapper">
                <button @click.prevent.stop="goBack" type="button"
                    class="admin-individual-blog__form__button back">返回</button>
                <button type="submit" class="admin-individual-blog__form__button save">儲存修改</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.admin-individual-blog {
    width: 80%;
    max-width: 1003px;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    position: relative;

    &__form {

        input,
        textarea,
        select {
            max-width: 1003px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.06em;
            color: var(--select-color);
            padding-left: 15px;
            background-color: var(--sub-font-color);
        }

        textarea {
            height: auto;
        }

        .input {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 23px;

            span {
                margin-left: 15px;
            }
        }

        input[type='date'] {
            width: 100%;

            &:focus-visible {
                &::-webkit-datetime-edit-fields-wrapper {
                    opacity: 1;
                }
            }

            &::-webkit-datetime-edit {
                margin-left: 50px;
            }

            &::-webkit-datetime-edit-fields-wrapper {
                opacity: 1;

                &:focus,
                &:active {
                    opacity: 1;
                }
            }

            &::-webkit-calendar-picker-indicator {
                position: absolute;
                opacity: 1;
                display: block;
                width: 20px;
                height: 20px;
                background-image: url('../assets/calender-icon.png');
                cursor: pointer;
            }
        }

        button {
            width: 237px;
            height: 51px;
            background: var(--button-bg-color);
            border-radius: 5px;
            color: var(--sub-font-color);
            text-align: center;
            margin-top: 43px;
        }

        .save {
            background-color: var(--check-button-bg-color);
        }

        .wrapper {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            display: flex;
            flex-direction: row;
            gap: 10%;
        }
    }
}
</style>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
const router = useRouter();
const route = useRoute();
const individualList = reactive({});
const lists = reactive([
    {
        id: '1',
        title: '『節儉』起家',
        place: 'test',
        category: '婚姻與跟進訣竅',
        time: '2021-01-03',
        status: '審核未通過',
        content: 'hvqhwlifhglrifglihrglflwa',
    },
    {
        id: '2',
        title: '『節儉』起家',
        place: 'test',
        category: '婚姻與跟進訣竅',
        time: '2021-01-03',
        status: '審核通過',
        content: 'hvqhwlifhglrifglihrglflwa',
    },
    {
        id: '3',
        title: '『節儉』起家',
        place: 'test',
        category: '婚姻與跟進訣竅',
        time: '2021-01-03',
        status: '審核通過',
        content: 'hvqhwlifhglrifglihrglflwa',
    },
])

// functions
function goBack() {
    router.go(-1);
};

function renderIndividualList() {
    const currentId = route.params.id;
    lists.forEach((item) => {
        if (item.id === currentId) {
            individualList.value = { ...item }
        }
    });
};
function saveChange () {
    router.go(-1);
}
renderIndividualList()
</script>