<template>
    <form class="admin-home__content__camp__check">
        <div class="search">
            <select name="" id="" class="admin-home__content__camp__check__service">
                <option value="選擇服務">選擇服務</option>
                <option value="婚姻">婚姻</option>
            </select>
            <select name="" id="" class=" admin-home__content__camp__check__name">
                <option value="選擇編輯營會">選擇編輯營會</option>
                <option value="婚姻">婚姻</option>
            </select>
        </div>
        <div class="admin-home__content__camp__check__date">
            <span>舉辦營會日期：</span>
            <input type="date" name="" id="">
        </div>
        <div class="admin-home__content__camp__check__category">
            <span>舉辦營會分類：</span>
            <select name="" id="">
                <option value=""></option>
                <option value="婚姻">婚姻</option>
            </select>
        </div>
        <button type="submit" class="admin-home__content__camp__check__button">刪除</button>
    </form>
</template>

<style lang="scss" scoped>
.admin-home__content__camp__check {
    width: 80%;
    max-width: 1003px;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);
    position: relative;

    select,
    input {
        height: 52px;
        border: 0.5px solid var(--input-icon-border);
        border-radius: 5px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.06em;
        color: var(--select-color);
    }

    .search {
        display: flex;
        flex-direction: row;
        gap: 17px;
    }

    &__service,
    &__name {
        width: 493px;
    }

    &__date,
    &__category {
        display: flex;
        flex-direction: column;
        margin-top: 23px;
        gap: 10px;

        span {
            margin-left: 15px;
        }
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

        &::-webkit-datetime-edit-fields-wrapper {
            opacity: 0;

            &:focus,
            &:active {
                opacity: 1;
            }
        }

        &::-webkit-calendar-picker-indicator {
            position: absolute;
            opacity: 1;
            display: block;
            width: 20px;
            height: 20px;
            margin-left: 19px;
            background-image: url('../assets/calender-icon.png');
            cursor: pointer;
        }
    }

    button {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        width: 237px;
        height: 51px;
        background: var(--button-bg-color);
        border-radius: 5px;
        color: var(--sub-font-color);
        text-align: center;
        margin-top: 43px;
    }
}
</style>