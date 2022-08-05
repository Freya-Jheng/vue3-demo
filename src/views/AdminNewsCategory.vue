<template>
    <div class="admin-home__news-tags">
        <div class="admin-home__news-tags__add">
            <button @click="modalResize()" data-toggle="modal" data-target="#add-tag" type="button"
                class="admin-home__news-tags__add__button">＋</button>
            <span class="admin-home__news-tags__add__text">新增營隊類別</span>
        </div>
        <div class="admin-home__news-tags__display">
            <table class="admin-home__news-tags__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">類別名稱</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" tag in GsFamily.campTags " :key="tag.id">
                        <td>{{ tag.tag }}</td>
                        <td>
                            <button @click="getIndividual(tag.id), modalResize()" type="button" class="submit"
                                data-toggle="modal" :data-id="tag.id" data-target="#staticBackdrop"></button>
                            <button @click.prevent.stop="deleteIndividual(tag.id)" type="submit"
                                class="delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- edit modal start -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">編輯類別</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="editIndividual()" class=" news-tag-modal__edit-account">
                        <div class="news-tag-modal__edit-account__account input">
                            <span>類別名稱</span>
                            <input v-model="individualTag.tag" type="text">
                        </div>
                        <div class="news-tag-modal__edit-account__wrapper">
                            <button type="submit" class="news-tag-modal__edit-account__wrapper__submit">儲存</button>
                            <button type="button" class="news-tag-modal__edit-account__wrapper__cancel"
                                data-dismiss="modal">取消</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- edit modal end -->

    <!-- add modal start -->
    <div class="modal fade" id="add-tag" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">新增營隊類別</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="addIndividual" class="news-tag-modal__edit-account">
                        <div class="news-tag-modal__edit-account__account input">
                            <span>類別名稱</span>
                            <input v-model="newTag" type="text">
                        </div>
                        <div class="news-tag-modal__edit-account__wrapper">
                            <button type="submit" class="news-tag-modal__edit-account__wrapper__submit">新增</button>
                            <button type="button" class="news-tag-modal__edit-account__wrapper__cancel"
                                data-dismiss="modal">取消</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- add modal end -->
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useGsFamily } from '../stores/gsfamily';
import campAPI from '../apis/camp';

const GsFamily = useGsFamily();
GsFamily.getTags();
const lists = reactive([]);
const individualTag = ref({
    tag: '',
    id: '',
});
const newTag = ref('');
const widthModal = ref('');

// functions
function modalResize() {
    let windowWidth = $(document.body).width();
    let width = (windowWidth - 800) / 2 + 'px';
    widthModal.value = width
};
async function getIndividual(id) {
    try {
        const response = await campAPI.getTag({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        individualTag.value = { ...response.data }

    } catch (err) {
        console.log(err);
    }
};
async function addIndividual() {
    try {
        if (!newTag.value.trim()) {
            return alert('請輸入營隊名稱！')
        }
        const response = await campAPI.addTag({
            tag: newTag.value
        });
        if (response.status !== 200) {
            throw new Error(response.status);
        } else if (response.status === 200) {
            alert('新增成功');
        }
        GsFamily.getTags();

        newTag.value = '';

    } catch (err) {
        console.log(err);
    }
};
async function deleteIndividual(tagId) {
    try {
        const response = await campAPI.deleteTag({ tagId });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else if (response.status === 200) {
            alert('確認刪除');
        }

        GsFamily.getTags();
    } catch (err) {
        console.log(err);
    }
};
async function editIndividual() {
    try {
        const response = await campAPI.editTag({
            tagId: individualTag.value.id,
            tag: individualTag.value.tag
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else if (response.status === 200) {
            alert('修改成功');
        }

        GsFamily.getTags();

    } catch (err) {
        console.log(err);
    }
}
</script>

<style lang="scss" scoped>
.admin-home__news-tags {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    padding: 80px 0 0 60px;
    color: var(--select-color);
    cursor: pointer;

    &__add {
        width: 100%;
        margin-bottom: 5%;

        &:hover {
            font-weight: 500;

            :nth-child(1) {
                color: var(--sub-font-color);
                background-color: var(--button-bg-color);
            }
        }

        button {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            text-align: center;
            font-size: 16px;
        }

        span {
            margin-left: 20px;
        }
    }

    &__display {
        width: 90%;

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
            border-radius: 5px;
        }

        .submit {
            position: relative;
            background: var(--button-bg-color);
            margin-right: 10px;

            &::after {
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                content: '編輯';
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
}

// Modal
.modal-dialog {
    display: inline-block;
    width: auto;
}

.modal-content {
    width: 800px;
    height: 500px;
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

.news-tag-modal__edit-account {
    max-width: 1003px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    input {
        max-width: 1003px;
        height: 52px;
        border: 0.5px solid var(--input-icon-border);
        border-radius: 5px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.06em;
        color: var(--select-color);
        padding-left: 15px;
    }

    input[type="file"] {
        padding-top: 13px;
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



    &__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;

        &__submit {
            background: var(--button-bg-color);
        }

        &__cancel {
            background-color: var(--check-button-bg-color);
        }
    }

    button {
        width: 237px;
        height: 51px;
        border-radius: 5px;
        color: var(--sub-font-color);
        text-align: center;
        margin-top: 100px;
    }
}
</style>