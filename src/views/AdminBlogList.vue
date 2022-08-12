<template>
    <div class="admin-home__content__blog__lists">
        <div class="admin-home__content__blog__lists__search">
            <select v-model="seachId" name="" id="" class="admin-home__content__blog__lists__search__article">
                <option value="">選擇文章類別</option>
                <option v-for="item in GsFamily.articaleTags" :key="item.id" :value="item.id">{{ item.tag }}</option>
            </select>
            <button @click.prevent.stop="searchArticle" type="button"
                class="admin-home__content__blog__lists__search__button">
                <img src="../assets/search-icon-white.png" alt="search"
                    class="admin-home__content__blog__lists__search__button__icon">
                <span class="admin-home__content__blog__lists__search__button__text">搜尋</span>
            </button>
        </div>
        <div class="admin-home__content__blog__lists__add">
            <button @click="modalResize()" data-toggle="modal" data-target="#add-articles" type="button"
                class="admin__course__add__button">＋</button>
            <span class="admin__course__add__text">新增文章</span>
        </div>
        <div class="admin-home__content__blog__lists__display">
            <table class="admin-home__content__blog__lists__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">日期</th>
                        <th scope="col">標題</th>
                        <th scope="col">圖片</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.date }}</td>
                        <td>{{ list.title }}</td>
                        <td>
                            <div class="cover-image-dispay">
                                <img :src="list.fileBytes" alt="" />
                                <img v-if="list.fileBytes.length === 0" src="../assets/default-image.png" alt="">
                            </div>
                        </td>
                        <td>
                            <button @click="getArticle(list.id), modalResize()" type="button" class="submit"
                                data-toggle="modal" data-target="#edit-articles"></button>
                            <button @click.prevent.stop="deleteArticle(list.id)" type="button" class="delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- edit modal start -->
    <div class="modal fade" id="edit-articles" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="edut-articlesLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="edut-articlesLabel">修改課程</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="editFileDto" class="course-management">
                        <div class="course-management__name input">
                            <span>標題</span>
                            <input v-model="editArticle.title" type="text">
                        </div>
                        <select v-model="editArticle.articleTagId" class="course-management__category select" name=""
                            id="">
                            <option value="">選擇文章類別</option>
                            <option v-for="item in GsFamily.articaleTags" :key="item.id" :value="item.id"> {{ item.tag
                            }}
                            </option>
                        </select>
                        <div class="course-management__picture input">
                            <span>圖片</span>
                            <img v-if="!editArticle.fileBytes" src="@/assets/default-image.png" alt="cover-image"
                                class="cover-image">
                            <img :src="editArticle.fileBytes" alt="cover-image" class="cover-image">
                        </div>
                        <div class="course-management__file input">
                            <span>上傳檔案</span>
                            <input @change="handleFileSubmitChange($event)" type="file" name="image" id="image">
                        </div>
                        <div class="course-management__keyword input">
                            <span>關鍵字</span>
                            <input v-model="editArticle.keywords" type="text">
                        </div>
                        <div class="course-management__narrative input">
                            <span>敘述 </span>
                            <input v-model="editArticle.narrative" type="text">
                        </div>
                        <quill-editor v-model:content="editArticle.content" placeholder="請輸入內容..." theme="snow"
                            toolbar="essential" style="height: 463px;" class="quill" />
                        <div class="course-management__wrapper">
                            <button type="submit" class="course-management__wrapper__submit">儲存</button>
                            <button type="button" class="course-management__wrapper__cancel"
                                data-dismiss="modal">取消</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- edit modal end -->

    <!-- add modal start -->
    <div class="modal fade" id="add-articles" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="add-articlesLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="add-articlesLabel">新增文章</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="addArticles" enctype="multipart/form-data" class="course-management">
                        <div class="course-management__name input">
                            <span>標題</span>
                            <input v-model="newArticle.title" type="text">
                        </div>
                        <select name="article-tags" v-model="newArticle.articleTagId"
                            class="course-management__category select">
                            <option value="">選擇文章類別</option>
                            <option v-for="item in GsFamily.articaleTags" :key="item.id" :value="item.id"> {{ item.tag
                            }}
                            </option>
                        </select>
                        <div class="course-management__picture input">
                            <span>圖片</span>
                            <img v-if="fileCover.length <= 0" src="@/assets/default-image.png" alt="cover-image"
                                class="cover-image">
                            <img v-else="fileCover.length > 0" :src="fileCover" alt="cover-image" class="cover-image">
                        </div>
                        <div class="course-management__file input">
                            <span>上傳檔案</span>
                            <input @change="handleFileChange($event)" type="file">
                        </div>
                        <div class="course-management__keyword input">
                            <span>關鍵字</span>
                            <input v-model="newArticle.keywords" type="text">
                        </div>
                        <div class="course-management__narrative input">
                            <span>敘述 </span>
                            <input v-model="newArticle.narrative" type="text">
                        </div>
                        <quill-editor v-model:content="newArticle.content" content-type="text" placeholder="請輸入內容..."
                            theme="snow" toolbar="essential" style="height: 463px;" class="quill" />
                        <div class="course-management__wrapper">
                            <button type="submit" class="course-management__wrapper__submit">新增</button>
                            <button type="button" class="course-management__wrapper__cancel"
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
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive, ref } from 'vue';
import articlesAPI from '../apis/articles';
import { useGsFamily } from '../stores/gsfamily';

const GsFamily = useGsFamily();
GsFamily.getArticleTags();
const lists = reactive([]);
const newArticle = reactive({
    title: '',
    articleTagId: '',
    date: Date(),
    content: '',
    keywords: '',
    narrative: ''
});
const editArticle = ref({
    articleTagId: 0,
    articleTag: '',
    content: '',
    date: '',
    fileBytes: '',
    id: '',
    keywords: '',
    narrative: '',
    title: '',
});
const newFiles = reactive([]);
const editFiles = reactive([]);
const fileCover = ref('');
const widthModal = ref('');
const seachId = ref('');
let formatted_date = '';

// functions
function modalResize() {
    let windowWidth = $(document.body).width();
    let width = (windowWidth - 800) / 2 + 'px';
    widthModal.value = width
};
function formatDate(date) {
    if ((date.getMonth() + 1) < 10) {
        formatted_date = date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + date.getDate();
    } else if ((date.getMonth() + 1) >= 10) {
        formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
};
function handleFileChange($event) {
    const { files } = $event.target;

    newFiles.value = files;

    if (files.length <= 0) {
        fileCover.value = '';
    } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        fileCover.value = imageURL;
    }
};
function handleFileSubmitChange($event) {
    const { files } = $event.target;

    editFiles.value = files;

    if (files.length < 0) {
        editArticle.fileBytes = '';
    } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        editArticle.value.fileBytes = imageURL;
    };
};
async function getArticles() {
    try {
        const response = await articlesAPI.getArticles();

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        lists.value = response.data;

    } catch (err) {
        console.log(err)
    }
};
async function getArticle(articleId) {
    try {
        const response = await articlesAPI.getArticle({
            id: articleId,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        const { articleTagView, content, date, fileBytes, id, keywords, narrative, title } = response.data;
        editArticle.value = {
            articleTagId: articleTagView.id,
            articleTag: articleTagView.tag,
            content: content,
            date: date,
            fileBytes: fileBytes,
            id: id,
            keywords: keywords,
            narrative: narrative,
            title: title,
        };

    } catch (err) {
        console.log(err);
    };
};
async function deleteArticle(id) {
    try {
        const response = await articlesAPI.deleteArticle({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('刪除成功！');
        };

        getArticles();
    } catch (err) {
        console.log(err);
    }
};
async function searchArticle(id) {
    try {
        const response = await articlesAPI.searchArticleByTagId({
            tagId: seachId.value,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        lists.value = response.data;
    } catch (err) {
        console.log(err);
    }
};
async function addArticles() {
    try {
        let now = new Date();
        formatDate(now);

        const response = await articlesAPI.addArticleDto({
            title: newArticle.title,
            articleTagId: newArticle.articleTagId,
            date: formatted_date,
            content: newArticle.content,
            keywords: newArticle.keywords,
            narrative: newArticle.narrative
        });

        const currentId = response.data;

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        addFile(currentId);

        getArticles();

        newArticle.title = '';
        newArticle.articleTagId = 0;
        formatted_date = '';
        newArticle.content = '';
        newArticle.keywords = '';
        newArticle.narrative = '';
        fileCover.value = '';

    } catch (err) {
        console.log(err);
    }
};
async function addFile(id) {
    try {

        const fileA = newFiles.value;

        const response = await articlesAPI.addArticleFile({
            id,
            file: fileA[0]
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else if (response.status === 200) {
            alert('新增成功');
        };

        newFiles.value = '';


        getArticles();

    } catch (err) {
        console.log(err);
    }
};
async function editFileDto() {
    try {

        if (!editArticle.value.title.trim()) {
            return alert('請填寫資料！')
        };

        if (editArticle.value.articleTagId === 0) {
            return alert('請選擇文章類別');
        };

        const response = await articlesAPI.editArticleDto({
            id: editArticle.value.id,
            title: editArticle.value.title,
            articleTagId: editArticle.value.articleTagId,
            date: editArticle.value.date.replaceAll('/', '-'),
            content: editArticle.content,
            keywords: editArticle.value.keywords,
            narrative: editArticle.value.narrative,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('修改成功！')
        };

        const currentId = response.data;

        editFile(currentId);

        getArticles();

    } catch (err) {
        console.log(err);
    };
};
async function editFile(id) {
    try {

        const response = await articlesAPI.editArticleFile({
            id,
            file: editFiles.value[0],
        })

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('修改成功！');
        };

    } catch (err) {
        console.log(err);
    }
};



getArticles();
</script>

<style scoped lang="scss">
.admin-home__content__blog__lists {
    width: 100%;
    height: 100%;
    padding: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__search {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        gap: 17px;


        select {
            width: 50%;
            max-width: 999px;
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

        &__button {
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

    &__add {
        width: 100%;
        margin-top: 50px;

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
        width: 100%;
        margin-top: 73px;

        table {
            width: 90%;
        }

        thead {
            width: 100%;
            border-bottom: 0.5px solid var(--input-icon-border);
        }

        th,
        td {
            text-align: center;
            position: relative;
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
            width: 25%;
            height: 71px;
            line-height: 71px;
            border-bottom: 0.5px solid var(--input-icon-border);
        }

        .cover-image-dispay {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            padding: 0;
            margin: 0 auto;
            width: 130px;
            height: 65px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
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
    height: 800px;
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

.modal-body {
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
}

.course-management {
    width: 100%;
    max-width: 1003px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    input,
    select {
        width: 100%;
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

    select {
        margin-top: 23px;
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

    &__narrative {
        margin-bottom: 30px;
    }

    .cover-image {
        border: 0.5px solid var(--input-icon-border);
        width: 370px;
        height: 300px;
        object-fit: contain;
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
        margin-top: 50px;
    }
}
</style>