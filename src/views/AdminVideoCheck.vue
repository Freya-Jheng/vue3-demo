<template>
    <div class="admin-home__video">
        <div class="admin-home__video__search">
            <input v-model="searchKeyword" type="text" placeholder="搜尋影片名稱" class="admin-home__video__search__input">
            <button @click.prevent.stop="searchVideos" type="button" class="admin-home__video__search__button">
                <img src="../assets/search-icon-white.png" alt="search" class="admin-home__video__search__button__icon">
                <span class="admin-home__video__search__button__text">搜尋</span>
            </button>
        </div>
        <div class="admin-home__video__add">
            <button @click="modalResize()" data-toggle="modal" data-target="#add-video" type="button"
                class="admin-home__video__add__button">＋</button>
            <span class="admin-home__video__add__text">新增影片</span>
        </div>
        <div class="admin-home__video__display">
            <table class="admin-home__video__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">影片名稱</th>
                        <th scope="col">縮圖</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.name }}</td>
                        <td>
                            <div class="cover-image-dispay">
                                <img v-if="!list.imageBytes" src="../assets/default-image.png" alt="">
                                <img v-if="list.imageBytes" :src="list.imageBytes" alt="">
                            </div>
                        </td>
                        <td>
                            <button @click="getVideo(list.id), modalResize()" type="button" class="submit"
                                data-toggle="modal" data-target="#edit-videos"></button>
                            <button @click.prevent.stop="deleteVideos(list.id)" type="button" class="delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- edit modal start -->
    <div class="modal fade" id="edit-videos" data-backdrop="static" data-keyboard="false" tabindex="-1"
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
                    <form @submit.prevent.stop="editVideoDto" class="course-management">
                        <div class="course-management__name input">
                            <span>影片名稱</span>
                            <input v-model="editVideo.name" type="text">
                        </div>
                        <label for="edit-cover-image" class="course-management__picture input">
                            <span>圖片</span>
                            <img v-if="!editVideo.imageBytes" src="@/assets/default-image.png" alt="cover-image"
                                class="cover-image">
                            <img v-if="editVideo.imageBytes" :src="editVideo.imageBytes" alt="" class="cover-image">
                        </label>
                        <input @change="handleImageChange($event)" type="file" id="edit-cover-image" accept="image/*"
                            style="display: none;">
                        <div class="course-management__file input">
                            <span>上傳檔案</span>
                            <input @change="handleFileChange($event)" type="file" name="image" id="image"
                                accept="video/*">
                        </div>
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
    <div class="modal fade" id="add-video" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="add-videoLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="add-videoLabel">新增影片</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="addVideosDto" class="course-management">
                        <div class="course-management__name input">
                            <span>影片名稱</span>
                            <input v-model="newName" type="text">
                        </div>
                        <label for="add-cover-image" class="course-management__picture input">
                            <span>圖片</span>
                            <img v-if="!newFileCoverImage" src="@/assets/default-image.png" alt="cover-image-default"
                                class="cover-image">
                            <img v-if="newFileCoverImage" :src="newFileCoverImage" alt="" class="cover-image">
                        </label>
                        <input @change="handleImageChange($event)" id="add-cover-image" type="file" accept="image/*"
                            style="display: none;">
                        <div class="course-management__file input">
                            <span>上傳檔案</span>
                            <input @change="handleFileChange($event)" type="file" accept="video/*">
                        </div>
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
import { reactive, ref } from 'vue';
import videoAPI from '../apis/video';

const lists = reactive([]);
const newName = ref('');
const editVideo = ref({});
const widthModal = ref('');
const searchKeyword = ref('');
const copyLists = reactive([]);
const newFile = reactive([]);
const editFile = reactive({});
const newFileImage = reactive([]);
const newFileCoverImage = ref('');



// functions
function modalResize() {
    let windowWidth = $(document.body).width();
    let width = (windowWidth - 800) / 2 + 'px';
    widthModal.value = width
};
function searchVideos() {
    if (!searchKeyword.value.trim()) {
        lists.value = copyLists.value;
        return alert('請輸入搜尋關鍵字！');
    };

    let listsAfterSearch = [];
    lists.value = copyLists.value

    lists.value.forEach((list) => {
        if (list.name === searchKeyword.value) {
            listsAfterSearch.push(list)
        };
    });

    lists.value = listsAfterSearch;
};
function handleImageChange($event) {
    const { files } = $event.target;
    newFileImage.value = files[0];
    let imageURL = window.URL.createObjectURL(files[0]);

    if ($event.target.id === 'add-cover-image') {
        newFileCoverImage.value = imageURL;
    } else if ($event.target.id === 'edit-cover-image') {
        editVideo.value.imageBytes = imageURL;
    };
};
function handleFileChange($event) {
    const { files } = $event.target;

    newFile.value = files[0];
};
async function getVideos() {
    try {
        const response = await videoAPI.getAllVideos();

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        lists.value = response.data;
        copyLists.value = response.data;

    } catch (err) {
        console.log(err);
    };
};
async function addVideosDto() {
    try {
        if (!newName.value.trim()) {
            return alert('請輸入影片名稱！');
        };

        if (!newFile.value) {
            return alert('請上傳影片！');
        };

        const response = await videoAPI.addVideoDto({
            name: newName.value,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        }

        let currentId = response.data;

        addVideoFile(currentId);
        addVideoImage(currentId);

        newName.value = '';

    } catch (err) {
        console.log(err);
    }
};
async function addVideoFile(id) {
    try {
        const response = await videoAPI.addVideoFile({
            id,
            file: newFile.value,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('新增影片成功！');
        };

        getVideos();

        newFile.value = '';
    } catch (err) {
        console.log(err);
    };
};
async function addVideoImage(id) {
    try {
        const response = await videoAPI.addVideoImage({
            id,
            file: newFileImage.value,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('新增成功！');
        };

        getVideos();

        newFileCoverImage.value = '';
        newFileImage.value = '';
    } catch (err) {
        console.log(err);
    };
};
async function deleteVideos(id) {
    try {
        const response = await videoAPI.deleteVideo({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('刪除成功！')
        };

        getVideos();
    } catch (err) {
        console.log(err);
    };
};
async function getVideo(id) {
    try {
        const response = await videoAPI.getVideo({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        editVideo.value = response.data;

    } catch (err) {
        console.log(err);
    };
};
async function editVideoDto() {
    try {
        if (!editVideo.value.name.trim()) {
            return alert('請輸入影片名稱！')
        };
        const id = editVideo.value.id;
        const response = await videoAPI.editVideosDto({
            id,
            name: editVideo.value.name
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        addVideoFile(id);
        addVideoImage(id);

        getVideos();

    } catch (err) {
        console.log(err);
    }
}

getVideos();

</script>

<style scoped lang="scss">
.admin-home__video {
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


        input {
            width: 50%;
            max-width: 999px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
            padding-left: 17px;
            line-height: 52px;
            cursor: pointer;
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
        cursor: pointer;
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