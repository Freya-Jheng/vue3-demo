<template>
    <div class="admin-home__content__news__management">
        <div class="admin-home__content__news__management__search">
            <select name="" id="" class="admin-home__content__news__management__search__category">
                <option value="選擇消息分類">選擇營會類別</option>
                <option value="婚姻">婚姻</option>
            </select>
            <button type="button" class="admin-home__content__news__management__search__button">
                <img src="../assets/search-icon-white.png" alt="search"
                    class="admin-home__content__news__management__search__button__icon">
                <span class="admin-home__content__news__management__search__button__text">搜尋</span>
            </button>
        </div>
        <div class="admin-home__content__news__management__display">
            <table class="admin-home__content__news__management__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">日期</th>
                        <th scope="col">標題</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.date }}</td>
                        <td>{{ list.title }}</td>
                        <td>
                            <button @click="getCamp(list.id), modalResize()" type="button" data-toggle="modal"
                                data-target="#editCamps" class="edit-btn"></button>
                            <button @click.prevent.stop="deleteCamp(list.id)" type="button" class="check-btn"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- edit modal start -->
    <div class="modal fade" id="editCamps" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="editCampsLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editCampsLabel">編輯營隊</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="admin-home__content__news__announce">
                        <select v-model="editCamp.campId" name="" id=""
                            class="admin-home__content__news__announce__category">
                            <option value="">選擇消息分類</option>
                            <option v-for="tag in GsFamily.campTags" :value="tag.id" :key="tag.id">{{ tag.tag }}
                            </option>
                        </select>
                        <div class="admin-home__content__news__announce__date">
                            <input v-model="editCamp.date" type="date">
                        </div>
                        <input type="text" v-model="editCamp.title" class="admin-home__content__news__announce__title"
                            placeholder="標題">
                        <quill-editor v-model:content="editCamp.content" placeholder="請輸入內容..." theme="snow"
                            toolbar="essential" style="height: 463px;" class="quill" />
                        <button type="submit">儲存</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- edit modal end -->

</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref, reactive } from 'vue';
import campAPI from '../apis/camp';
import { useGsFamily } from '../stores/gsfamily';
const GsFamily = useGsFamily();
GsFamily.getTags()

const lists = reactive([]);
const widthModal = ref('');
const editCamp = ref({
    id:'',
    title: '',
    campId:'',
    campTagId:'',
    date: '',
    content: '',
})

// functions
function modalResize() {
    let windowWidth = $(document.body).width();
    let width = (windowWidth - 800) / 2 + 'px';
    widthModal.value = width
};

async function getCamps() {
    try {
        const response = await campAPI.getAllCamps();

        if (response.status !== 200) {
            throw new Error(response.status);
        }

        lists.value = { ...response.data };

    } catch (err) {
        console.log(err)
    }
};

async function deleteCamp(id) {
    try {
        const response = await campAPI.deleteCamp({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else if (response.status === 200) {
            alert('刪除成功')
        }

        const response1 = await campAPI.getAllCamps();

        if (response1.status !== 200) {
            throw new Error(response.status);
        }

        lists.value = { ...response1.data };
    } catch (err) {
        console.log(err);
    }
};

async function getCamp(campId) {
    try {
        let re = /-/gi;
        const quill = document.querySelector('.quill');
        const response = await campAPI.getIndividualCamp({ campId });

        if (response.status !== 200) {
            throw new Error (response.status);
        };

        const {id, title, content, campTag, date} = response.data;

        editCamp.value = {
            id,
            title,
            content,
            campId: campTag.id,
            campTagId: campTag.tag,
            date,
        }

        console.log(response.data)
        console.log(editCamp.value)
    } catch(err) {
        console.log(err);
    }
}
getCamps()
</script>

<style lang="scss" scoped>
.admin-home__content__news__management {
    width: 100%;
    padding: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__search {
        width: 80%;
        display: flex;
        flex-direction: row;
        gap: 17px;

        select {
            width: 745px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.06em;
            color: var(--select-color);
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
            margin-right: 25px;

            &::after {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                content: '編輯';
                color: var(--sub-font-color);
            }
        }

        .check-btn {
            background: var(--check-button-bg-color);

            &::before {
                position: absolute;
                width: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                content: '刪除';
                color: var(--sub-font-color);
            }
        }

    }
}

// modal
.modal-dialog {
    display: inline-block;
    width: auto;
}

.modal-content {
    width: 800px;
    height: 900px;
    overflow-y: scroll;
}

.modal-header {
    font-size: 20px;
    font-weight: 500;
    color: var(--table-font-color);
    padding-bottom: 50px;
    position: relative;

    h5 {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        border-bottom: 3.5px solid var(--table-font-color);
    }
}

.admin-home__content__news__announce {
    width: 80%;
    height: 100%;
    display: inline;
    margin: 30px 0 0 0px;
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

