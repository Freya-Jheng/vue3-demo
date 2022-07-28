<template>
    <form class="admin-home__content__news__category">
        <div class="admin-home__content__news__category__search">
            <select name="" id="" class="admin-home__content__news__category__search__service">
                <option value="選擇服務">選擇服務</option>
                <option value="婚姻">婚姻</option>
            </select>
            <select name="" id="" class="admin-home__content__news__category__search__category">
                <option value="選擇編輯分類">選擇編輯分類</option>
                <option value="婚姻">婚姻</option>
            </select>
        </div>
        <div class="admin-home__content__news__category__title">
            <span>名稱</span>
            <input type="text" />
        </div>
        <button class="admin-home__content__news__category__button" type="submit">刪除分類</button>
    </form>
</template>

<style lang="scss" scoped>
.admin-home__content__news__category {
    width: 80%;
    max-width: 1003px;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    position: relative;

    &__search {
        display: flex;
        flex-direction: row;
        gap: 17px;
    }

    select {
        width: 493px;
        height: 52px;
        border: 0.5px solid var(--input-icon-border);
        border-radius: 5px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.06em;
        color: var(--select-color);
    }

    &__title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 15px 0 35px 0;

        input {
            width: 1003px;
            height: 52px;
            border: 0.5px solid var(--input-icon-border);
            border-radius: 5px;
        }
    }

    &__button {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        width: 237px;
        height: 51px;
        background: var(--button-bg-color);
        border-radius: 5px;
        color: var(--sub-font-color);
        text-align: center;
        margin: 0 auto;
    }
}
</style>