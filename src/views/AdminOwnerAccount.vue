<template>
    <div class="admin-home__content__account__owners">
        <div class="admin-home__content__account__owners__add">
            <button type="button" @click="modalResize" data-toggle="modal" data-target="#owner-add-account"
                class="admin-home__content__account__owners__add__button">＋</button>
            <span class="admin-home__content__account__owners__add__text">新增帳號</span>
        </div>
        <div class="admin-home__content__account__owners__display">
            <table class="admin-home__content__account__owners__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">帳號</th>
                        <th scope="col">姓名</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">權限</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists.value " :key="list.id">
                        <td>{{ list.account }}</td>
                        <td>{{ list.name }}</td>
                        <td>{{ list.email }}</td>
                        <td>
                            <div class="roles">
                                <span v-for="item in list.roleName ">{{ item }}</span>
                            </div>
                        </td>
                        <td>
                            <button type="button" @click="getIndividual(list.id), modalResize()" class="submit"
                                data-toggle="modal" data-target="#ownerAccounts"></button>
                            <button @click.prevent.stop="deleteIndividual(list.id)" type="submit" class="delete"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- edit modal start -->
    <div class="modal fade" id="ownerAccounts" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">編輯帳號</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="admin-teacher-account__edit-account">
                        <div class="admin-teacher-account__edit-account__account input">
                            <span>帳號</span>
                            <input v-model="individualList.account" type="text">
                        </div>
                        <div class="admin-teacher-account__edit-account__password input">
                            <span>姓名</span>
                            <input v-model="individualList.name" type="text">
                        </div>
                        <div class="admin-teacher-account__edit-account__checkpassword input">
                            <span>E-mail</span>
                            <input v-model="individualList.email" type="email">
                        </div>
                        <div class="admin-teacher-account__edit-account__remark input">
                            <span>權限</span>
                            <input v-model="individualList.roleName" type="text">
                        </div>
                        <div class="admin-teacher-account__edit-account__wrapper">
                            <button @click.prevent.stop="editIndividual()" type="submit"
                                class="admin-teacher-account__edit-account__wrapper__submit">修改</button>
                            <button type="button" class="admin-teacher-account__edit-account__wrapper__cancel"
                                data-dismiss="modal">取消</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- edit modal end -->

    <!-- add modal start -->
    <div class="modal fade" id="owner-add-account" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" :style="{ marginLeft: widthModal }">
            <div class="modal-content teacher-account">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">新增帳號</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent.stop="addIndividual" class="admin-teacher-account__edit-account add-owner">
                        <div class="admin-teacher-account__edit-account__account input">
                            <span>帳號</span>
                            <input v-model="newAccount.account" type="text">
                        </div>
                        <div class="admin-teacher-account__edit-account__password input">
                            <span>密碼</span>
                            <input v-model="newAccount.pwd" type="password">
                        </div>
                        <div class="admin-teacher-account__edit-account__remark input">
                            <span>姓名</span>
                            <input v-model="newAccount.name" type="text">
                        </div>
                        <div class="admin-teacher-account__edit-account__remark input">
                            <span>E-mail</span>
                            <input v-model="newAccount.email" type="email">
                        </div>
                        <div class="admin-teacher-account__edit-account__remark input">
                            <span>權限</span>
                            <input v-model="newAccount.roleName" type="text">
                            <ul>
                                <li>
                                    <span>帳戶管理</span>
                                    <input type="radio" name="" id="">
                                </li>
                                <li>
                                    最新營會
                                </li>
                                <li>
                                    好文分享
                                </li>
                                <li>
                                    課程管理
                                </li>
                                <li>
                                    聯絡我們
                                </li>
                                <li value="">
                                    表單申請
                                </li>
                                <li value="">
                                    影片管理
                                </li>
                            </ul>
                        </div>
                        <div class="admin-teacher-account__edit-account__wrapper">
                            <button type="submit"
                                class="admin-teacher-account__edit-account__wrapper__submit">新增</button>
                            <button type="button" class="admin-teacher-account__edit-account__wrapper__cancel"
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
import accountAPI from '../apis/accounts';
let widthModal = ref('');
const lists = reactive([])
const individualList = ref({
    id: '',
    account: '',
    name: '',
    email: '',
    roleName: [],
});
const newAccount = ref({
    account: '',
    name: '',
    email: '',
    roleName: [],
    pwd: '',
});

// functions
function modalResize() {
    let windowWidth = $(document.body).width();
    let width = (windowWidth - 800) / 2 + 'px';
    widthModal.value = width
};
async function getOwners() {
    try {
        const response = await accountAPI.getOwnerAccount();

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        lists.value = { ...response.data };
        console.log(lists.value)

        console.log(response.data)

    } catch (err) {
        console.log(err);
    }
};
async function getIndividual(id) {
    try {
        const response = await accountAPI.getIndividualOwner({ id });

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        const { account, name, roleName, email } = response.data
        individualList.value = {
            account,
            name,
            roleName,
            email,
            id
        }

        console.log(response.data)

    } catch (err) {
        console.log(err);
    }
};
async function editIndividual() {
    try {
        if (!individualList.value.account.trim() || !individualList.value.name.trim() || !individualList.value.email.trim()) {
            return alert('請填寫資料')
        }

        if (individualList.value.pwd !== individualList.value.checkedPwd) {
            return alert('密碼與確認密碼不一樣！')
        }

        const userDTO = {
            account: individualList.value.account,
            pwd: individualList.value.pwd,
            name: individualList.value.name,
            email: individualList.value.email,
        }
        const roleDTO = {
            roleName: [individualList.value.roleName],
        }

        const { data } = await accountAPI.editIndividualOwner({
            id: individualList.value.id,
            userDTO,
            roleDTO,
        })

        console.log(userDTO, roleDTO, 'from editing')

        if (data.statusCodeValue !== 200) {
            throw new Error(data.statusCode)
        }

        if (data.statusCodeValue === 200) {
            alert('修改成功！')
        }

        const response1 = await accountAPI.getOwnerAccount();

        if (response1.status !== 200) {
            throw new Error(response1.statusText);
        };

        lists.value = { ...response1.data };

    } catch (err) {
        console.log(err);
    }
};
async function addIndividual() {
    try {
        if (!newAccount.value.account.trim() || !newAccount.value.pwd.trim() || !newAccount.value.name.trim() || !newAccount.value.email.trim()) {
            return alert('請填寫資料！')
        }
        const userDTO = {
            account: newAccount.value.account,
            pwd: newAccount.value.pwd,
            name: newAccount.value.name,
            email: newAccount.value.email,
        }
        const roleDTO = {
            roleName: [newAccount.value.roleName],
        }

        console.log(userDTO, roleDTO)
        

        const response = await accountAPI.addIndividualOwner({
            userDTO,
            roleDTO
        })  


        console.log(response.data)

        if (data.statusCodeValue !== 200) {
            throw new Error(data.statusCode)
        }

        if (data.statusCodeValue === 200) {
            alert('新增成功')
        }

        const response1 = await accountAPI.getOwnerAccount();

        if (response1.status !== 200) {
            throw new Error(response1.statusText);
        };

        lists.value = { ...response1.data };

    } catch (err) {
        console.log(err)
    }
};
async function deleteIndividual(id) {
    try {
        const response = await accountAPI.deleteIndividualOwner({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        }

        alert('刪除成功')

        const response1 = await accountAPI.getOwnerAccount();

        if (response1.status !== 200) {
            throw new Error(response1.statusText);
        };

        lists.value = { ...response1.data };

    } catch (err) {
        console.log(err);
    }
}
getOwners()
</script>

<style lang="scss" scoped>
.admin-home__content__account__owners {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
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

    &__display {
        width: 100%;

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
            width: 300px;
            line-height: 71px;
            border-bottom: 0.5px solid var(--input-icon-border);
        }

        .roles {
            max-width: 350px;
            display: inline;
            // flex-flow: row wrap;
            text-align: center;
            padding: 0 6%;

            span {
                position: relative;
                text-align: left;
                // line-height: 30px;
                padding: 0 5px;

                &::after {
                    position: absolute;
                    right: 0%;
                    top: 50%;
                    transform: translateY(-50%);
                    content: '';
                    width: 2px;
                    height: 70%;
                    background-color: var(--select-color);
                }
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
    height: 750px;
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

.admin-teacher-account__edit-account {
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

.add-owner {
    overflow-y: scroll;
    button {
        margin-top: 50px;
    }
}
.add-owner::-webkit-scrollbar {
    display: none;
}
</style>