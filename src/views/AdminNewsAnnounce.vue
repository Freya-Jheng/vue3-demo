<template>
    <form @submit.prevent.stop="addCamp()" class="admin-home__content__news__announce">
        <select v-model="newCamp.campTagId" name="" id="" class="admin-home__content__news__announce__category">
            <option value="">選擇營會分類</option>
            <option v-for="tag in GsFamily.campTags" :value="tag.id" :key="tag.id">{{ tag.tag }}</option>
        </select>
        <div class="admin-home__content__news__announce__date">
            <input v-model="newCamp.date" type="date">
        </div>
        <input type="text" v-model="newCamp.title" class="admin-home__content__news__announce__title" placeholder="標題">
        <quill-editor v-model:content="newCamp.content" content-type="text" placeholder="請輸入內容..." theme="snow"
            toolbar="essential" style="height: 463px;" class="quill" />
        <button type="submit">發布營會</button>
    </form>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import campAPI from '../apis/camp';
import { reactive } from 'vue';
import { useGsFamily } from '../stores/gsfamily';
const GsFamily = useGsFamily();
const now = new Date();
let formatted_date = '';
const newCamp = reactive({
    title: '',
    campTagId: '',
    date: '',
    content: '',
})

GsFamily.getTags()

// functions
function formatDate(date) {
    if ((date.getMonth() + 1) < 10) {
        formatted_date = date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + date.getDate();
    } else if ((date.getMonth() + 1) >= 10) {
        formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
};

async function addCamp() {
    try {
        formatDate(now);

        if (!newCamp.title.trim() || !newCamp.date.trim() || !newCamp.content.trim()) {
            return alert('請填寫資料！')
        }

        if (newCamp.date < formatted_date) {
            return alert(`日期需要在${ formatted_date }之後`);
        };

        let re = /-/gi;
        const quill = document.querySelector('.quill')
        const response = await campAPI.addNewCamp({
            title: newCamp.title,
            campTagId: newCamp.campTagId,
            date: newCamp.date,
            content: newCamp.content,
        });

        if (response.data.statusCodeValue !== 200) {
            throw new Error(response.data.statusCode)
        }

        if (response.data.statusCodeValue === 200) {
            alert('新增成功！請前往管理消息區瀏覽')
        }

        // const now = new Date();
        // let formatted_date = '';

        // const formatDate = (date) => {
        //     if ((date.getMonth() + 1) < 10) {
        //         formatted_date = date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + date.getDate();
        //     } else if ((date.getMonth() + 1) >= 10) {
        //         formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        //     }
        // }

        newCamp.campTagId = '';
        newCamp.date = '';
        newCamp.title = '';
        quill.textContent = '';
    } catch (err) {
        console.log(err);
    }
};
</script>

<style scoped lang="scss">
.admin-home__content__news__announce {
    width: 80%;
    height: 100%;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    position: relative;

    select,
    input[type='text'],
    input[type='date'] {
        width: 100%;
        height: 52px;
        border: 0.5px solid var(--input-icon-border);
        border-radius: 5px;
        padding: 0 15px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.06em;
        color: var(--select-color);
        margin-bottom: 16px;
    }

    button {
        position: absolute;
        right: 0;
        width: 237px;
        height: 51px;
        background: #EB8B69;
        border-radius: 5px;
        color: var(--sub-font-color);
        text-align: center;
        margin-top: 27px;
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
}
</style>

