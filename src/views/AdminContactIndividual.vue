<template>
    <div class="admin-individual-contact">
        <form v-for="item in individualList" :key="item.id" class="admin-individual-contact__form">
            <div class="admin-individual-contact__form__name input">
                <span>姓名</span>
                <input v-model="item.name" disabled type="text" name="" id="">
            </div>
            <div class="admin-individual-contact__form__password input">
                <span>電話</span>
                <input v-model="item.phone" type="text" disabled name="" id="">
            </div>
            <div class="admin-individual-contact__form__remark input">
                <span>地址</span>
                <input v-model="item.address" type="text" disabled name="" id="">
            </div>
            <div class="admin-individual-contact__form__remark input">
                <span>聯繫內容</span>
                <textarea v-model="item.message" name="" id="" disabled cols="30" rows="10"></textarea>
            </div>
            <div class="admin-individual-contact__form__remark input">
                <span>附件</span>
                <input v-model="item.file" type="text" disabled name="" id="">
            </div>
            <button @click.prevent.stop="goBack" type="submit"
                class="admin-individual-contact__form__button">返回</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.admin-individual-contact {
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
        textarea {
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

        button {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            width: 237px;
            height: 51px;
            background: var(--button-bg-color);
            border-radius: 5px;
            color: var(--sub-font-color);
            text-align: center;
            margin-top: 43px;
        }
    }
}
</style>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
const test = ref('dcavcgvawkvckgva');
const router = useRouter();
const route = useRoute();
const individualList = reactive({});
const lists = reactive([
    {
        id: '1',
        name: 'tes1',
        phone: '09xxxxxxxx',
        address: '台中市xxxxxxx',
        message: '想請教.....',
        file: 'file',
    },
    {
        id: '2',
        name: 'te21',
        phone: '09xxxxxxxx',
        address: '台中市xxxxxxx',
        message: '想請教.....',
        file: 'file3',
    },
    {
        id: '3',
        name: 'tes1',
        phone: '09xxxxxxxx',
        address: '台北市xxxxxxx',
        message: '想請教.....',
        file: 'file9',
    },
    {
        id: '4',
        name: 'tes1',
        phone: '09xxxxxxxx',
        address: '台中市xxxxxxx',
        message: '想請教.....',
        file: 'file',
    },
    {
        id: '5',
        name: 'tes1',
        phone: '09xxxxxxxx',
        address: '台南市xxxxxxx',
        message: '想請教.....',
        file: 'file',
},]);


// functions
function goBack() {
    router.go(-1);
};

function renderIndividualList() {
    const currentId = route.params.id;
    lists.forEach((item) => {
        if (item.id === currentId) {
            individualList.value = {...item}
        }
    });
}
renderIndividualList()
</script>