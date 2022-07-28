<template>
    <form class="admin-home__content__news__announce">
        <select name="" id="" class="admin-home__content__news__announce__category">
            <option value="選擇消息分類">選擇消息分類</option>
            <option value="婚姻">婚姻</option>
        </select>
        <input type="text" class="admin-home__content__news__announce__title" placeholder="標題">
        <QuillEditor placeholder="請輸入內容..." theme="snow" toolbar="essential" style="height: 463px;" />
        <div id="toolbar"></div>
        <div id="editor"></div>
        <button type="submit">發布消息</button>
    </form>
</template>

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
    input[type='text'] {
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
}
</style>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

var quill = new Quill('#editor', {
    modules: {
        toolbar: {
            container: '#toolbar',  // Selector for toolbar container
            
        }
    }
});

</script>
