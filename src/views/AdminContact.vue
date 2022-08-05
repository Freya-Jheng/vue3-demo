<template>
    <div class="admin-contact">
        <div class="admin-contact__display">
            <table class="admin-contact__display__table table-hover">
                <thead>
                    <tr>
                        <th scope="col">日期</th>
                        <th scope="col">姓名</th>
                        <th scope="col">電話</th>
                        <th scope="col">內容</th>
                        <th scope="col">附件</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="list in lists " :key="list.id">
                        <td>{{ list.date }}</td>
                        <td>{{ list.name }}</td>
                        <td>{{ list.phone }}</td>
                        <td>{{ list.content }}</td>
                        <!-- <td
                            @click.prevent.stop="base64ToArrayBuffer(list.file), saveByteArray('contactFile', fileBytes.value)">
                            <font-awesome-icon class="download" v-show="list.file.length > 0"
                                :icon="['fas', 'download']" />
                            <span v-show="list.file.length <= 0" >no file</span>
                        </td> -->
                        <td>
                            <button @click.prevent.stop="deleteContacts(list.id)" type="button"></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-contact {
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
        margin-top: 100px;

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

        .download {
            cursor: pointer;
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
}
</style>

<script setup>
import { reactive, ref } from 'vue';
import contactAPI from '../apis/contact';

const lists = ref([]);
const fileBytes = ref('');

// funcitons
function base64ToArrayBuffer(base64) {
    let binaryString = window.atob(base64);
    let binaryLen = binaryString.length;
    let bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    fileBytes.value = bytes;
}
function saveByteArray(reportName, byte) {
    var blob = new Blob([byte], { type: "application/pdf" });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
};
async function getContacts() {
    try {
        const response = await contactAPI.get();

        if (response.status !== 200) {
            throw new Error(response.statusText);
        };

        lists.value = response.data;

    } catch (err) {
        console.log(err);
    }
};

async function deleteContacts(id) {
    try {
        const response = await contactAPI.deleteContact({ id });

        if (response.status !== 200) {
            throw new Error(response.status);
        } else if (response.status === 200) {
            alert('確定刪除？')
        };

    } catch (err) {
        console.log(err);
    }
}

getContacts()
</script>