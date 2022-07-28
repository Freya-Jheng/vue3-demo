<template>
    <div class="admin-courses">
        <div class="admin-courses__display">
            <table class="admin-courses__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">課程名稱</th>
                        <th scope="col">課程類別</th>
                        <th scope="col">檔案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.name }}</td>
                        <td>{{ list.category }}</td>
                        <td>{{ list.idg}}</td>
                        <td>
                            <button type="button" @click.prevent.stop="deleteCourse(list.id)"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <input v-model="addStatus" type="checkbox" id="checkbox">
        <label for="checkbox"></label>
        <form @submit.prevent.stop="addCourses" v-show="addStatus"
        class=" admin-courses__add-videos">
            <div class="admin-courses__add-videos__name input">
                <span>課程名稱</span>
                <input v-model="currentCourse.name" type="text" name="" id="">
            </div>
            <div class="admin-courses__add-videos__category input">
                <span>課程類別</span>
                <input v-model="currentCourse.category" type="text" name="" id="">
            </div>
            <div class="admin-courses__add-videos__file input">
                <input type="file" @change="previewFile">
            </div>
            <div class="admin-courses__add-videos__wrapper">
                <button type="submit" class="admin-courses__add-videos__wrapper__submit">新增</button>
                <button type="button" @click="cancelAdding"
                    class="admin-courses__add-videos__wrapper__cancel">取消</button>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
.admin-courses {
    width: 80%;
    max-width: 1003px;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    position: relative;

    &__display {
        width: 100%;
        max-width: 1000px;
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
                content: '刪除';
                color: var(--sub-font-color);
            }
        }

    }

    label {
        position: relative;
        margin-top: 30px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;

        &::after {
            position: absolute;
            content: '+';
            font-size: 20px;
            top: 50%;
            right: 50%;
            transform: translate(50%, -55%);
        }
    }

    input[type='checkbox'] {
        display: none;

        &:hover,
        &:checked~label {
            background-color: var(--button-bg-color);
            color: var(--sub-font-color);
        }
    }

    &__add-videos {
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
            margin-top: 43px;
        }
    }
}
</style>

<script setup>
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { list } from 'postcss';
import { reactive, ref } from 'vue';
import coursesAPI from '../apis/courses';

const addStatus = ref(false);
const currentCourse = reactive({
    id:'',
    name: '',
    category: '',
    file: ''
})
const lists = reactive([]);

// functions
function cancelAdding() {
    addStatus.value = false;
};
function addCourse () {
    lists.push(currentCourse);
};
function deleteCourse (id) {
    lists.forEach((item, index) => {
        if (item.id === id) {
            lists.splice(index, 1);
        };
    });
};
function previewFile (e) {
    currentCourse.file = e.target.files[0].name;
};
async function getCourses () {
    try {
        const response = await coursesAPI.getCourses();

        if (response.status !== 200) {
            throw new Error (response.statusText);
        }
        lists.value = response.data;
        
    } catch (err) {
        console.log(err)
    }
}
async function addCourses (name, file) {
    try {
        if(!currentCourse.name || !currentCourse.file ) {
            return alert('請輸入資料')
        }

        const response = await coursesAPI.addCourses({
            name: currentCourse.name,
            file: currentCourse.file
        });

        console.log(response)

        if (response.status !== 200){
            throw new Error (response.statusText)
        }

    } catch (err) {
        console.log(err);
    }
}
getCourses()
</script>