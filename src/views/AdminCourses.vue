<template>
    <div class="admin__course">
        <div class="admin__course__search">
            <input v-model="searchKeyword" type="text" class="admin__course__navbar__search__input"
                placeholder="搜尋課程名稱">
            <button @click="searchVideos" type="button" class="admin__course__navbar__search__button">搜尋</button>
        </div>
        <div class="admin__course__add">
            <button @click="modalResize()" data-toggle="modal" data-target="#add-courses" type="button"
                class="admin__course__add__button">＋</button>
            <span class="admin__course__add__text">新增課程</span>
        </div>
        <div class="admin__course__display">
            <table class="admin__course__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">課程名稱</th>
                        <th scope="col">圖片</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" list in lists.value " :key="list.id">
                        <td>{{ list.name }}</td>
                        <td>
                            <div class="cover-image-dispay">
                                <img v-if="!list.imageLocation" src="@/assets/default-image.png" alt="cover-image" />
                                <img :src="list.imageLocation" alt="">
                            </div>
                        </td>
                        <td>
                            <button @click="getCourse(list.id), modalResize()" type="button" class="submit"
                                data-toggle="modal" :data-id="list.id" data-target="#edit-courses"></button>
                            <button @click="deleteIndividual(list.id)" type="button" class="delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- edit modal start -->
    <div class="modal fade" id="edit-courses" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="edit-coursesLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="edit-coursesLabel">編輯課程</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="editCourses(editCourse.id)" class=" course-management">
                        <div class="course-management__name input">
                            <span>課程名稱</span>
                            <input v-model="editCourse.name" type="text">
                        </div>
                        <label for="edit-cover-picture" class="course-management__picture input">
                            <span>圖片</span>
                            <img v-if="!editCourse.imageLocation" src="@/assets/default-image.png" alt="cover-image"
                                class="cover-image">
                            <img v-if="editCourse.imageLocation" :src="editCourse.imageLocation" alt="add-cover-picture"
                                class="cover-image">
                        </label>
                        <input @change="handleFormImage($event)" type="file" name="edit-cover-picture"
                            id="edit-cover-picture" accept="image/png, image/jpeg" style="display: none;">
                        <div class="course-management__file input">
                            <span>上傳檔案</span>
                            <input @change="handleFormFile($event)" type="file" name="image" id="image" accept=".pdf">
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
    <div class="modal fade" id="add-courses" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="add-coursesLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="add-coursesLabel">新增課程</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="addCoursesDto" class="course-management">
                        <div class="course-management__name input">
                            <span>課程名稱</span>
                            <input v-model="newCourseName" type="text">
                        </div>
                        <label for="new-cover-picture" class="course-management__picture input">
                            <span>圖片</span>
                            <img v-if="fileCover.length === 0" src="@/assets/default-image.png" alt="cover-image"
                                class="cover-image">
                            <img v-if="fileCover.length !== 0" :src="fileCover" alt="add-cover-picture"
                                class="cover-image">
                        </label>
                        <input @change="handleFormImage($event)" type="file" id="new-cover-picture" name="cover-picture"
                            accept="image/png, image/jpeg" style="display: none;">
                        <div class="course-management__file input">
                            <span>上傳檔案</span>
                            <input @change="handleFormFile($event)" type="file" name="image" id="image" accept=".pdf">
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
import coursesAPI from '../apis/courses';

const lists = reactive([]);
const copyLists = reactive([]);
const editCourse = ref({});
const newCourseName = ref('');
const now = new Date();
const widthModal = ref('');
let formatted_date = '';
const newFiles = reactive([]);
const newFilesImage = reactive([]);
const fileCover = ref('');
const searchKeyword = ref('');

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
function handleFormImage($event) {
    const { files } = $event.target;

    newFilesImage.value = files[0];

    if ($event.target.id === 'edit-cover-picture') {
        if (files.length <= 0) {
            editCourse.value.imageLocation = '';
        } else if (files.length >= 0) {
            const imageURL = window.URL.createObjectURL(files[0]);
            editCourse.value.imageLocation = imageURL;
        }
    } else if ($event.target.id === 'new-cover-picture') {
        if (files.length <= 0) {
            fileCover.value = '';
        } else if (files.length >= 0) {
            const imageURL = window.URL.createObjectURL(files[0]);
            fileCover.value = imageURL;
        }
    }
};
function searchVideos() {
    let listsAfterSearch = [];

    if (!searchKeyword.value.trim()) {
        lists.value = copyLists.value;
        return alert('請輸入搜尋關鍵字！');
    };

    lists.value = copyLists.value

    lists.value.forEach((list) => {
        if (list.name === searchKeyword.value) {
            listsAfterSearch.push(list);
        };
    });

    lists.value = listsAfterSearch;
};
function handleFormFile($event) {
    const { files } = $event.target;
    newFiles.value = files;
};
async function getAllCourses() {
    try {
        const response = await coursesAPI.getCourses();

        if (response.status !== 200) {
            throw new Error(response.statusText);
        };

        lists.value = response.data;
        copyLists.value = response.data;

    } catch (err) {
        console.log(err)
    }
};
async function getCourse(id) {
    try {
        const response = await coursesAPI.getCourse({
            id
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        editCourse.value = response.data;

    } catch (err) {
        console.log(err);
    }
};
async function editCourses(id) {
    try {
        if (!editCourse.value.name.trim()) {
            return alert('請輸入課程名稱！');
        };

        const response = await coursesAPI.editCoursesDto({
            id,
            name: editCourse.value.name,
            date: editCourse.value.date.replaceAll('/', '-'),
        });


        if (response.status !== 200) {
            throw new Error(response.status);
        };

        addCoursesFile(id);
        addCoursesImage(id);

    } catch (err) {
        console.log(err);
    }
};
async function addCoursesDto() {
    try {
        const fileLength = newFiles.value.length;

        if (!newCourseName.value.trim()) {
            return alert('請填寫課程名稱！');
        };

        if (fileLength === 0) {
            return alert('請選擇要上傳的檔案！');
        };

        formatDate(now);

        const response = await coursesAPI.addCoursesDto({
            name: newCourseName.value,
            date: formatted_date,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        const currentId = response.data;

        addCoursesFile(currentId);
        addCoursesImage(currentId);

        newCourseName.value = '';
        newFiles.value = '';

    } catch (err) {
        console.log(err);
    };
};
async function addCoursesFile(id) {
    try {

        const response = await coursesAPI.addCoursesFile({
            id,
            file: newFiles.value[0],
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        getAllCourses();

    } catch (err) {
        console.log(err);
    };
};
async function addCoursesImage(id) {
    try {

        const response = await coursesAPI.addCoursesImage({
            id,
            file: newFilesImage.value,
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('新增成功！');
        };

        getAllCourses();

    } catch (err) {
        console.log(err);
    };
};
async function deleteIndividual(id) {
    try {
        const response = await coursesAPI.deletCourses({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else {
            alert('刪除成功！');
        };

        getAllCourses();

    } catch (err) {
        console.log(err);
    }
};

getAllCourses();

</script>

<style lang="scss" scoped>
.admin__course {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    padding: 0 0 0 50px;
    cursor: pointer;

    &__add {
        width: 100%;
        margin-bottom: 3%;

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

    &__search {
        margin: 5% 0;

        input {
            width: 493px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.06em;
            color: var(--select-color);
            padding-left: 15px;
            margin-right: 10px;

            &:focus {
                outline: unset;
                border: 0.5px solid var(--button-bg-color);
            }
        }

        button {
            width: 200px;
            height: 51px;
            background: var(--button-bg-color);
            border-radius: 5px;
            color: var(--sub-font-color);
            text-align: center;
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
            width: 30%;
            text-align: center;
            position: relative;
        }

        .cover-image-dispay {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            padding: 0;
            margin: 0 auto;
            width: 130px;
            height: 70px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
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

.course-management {
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