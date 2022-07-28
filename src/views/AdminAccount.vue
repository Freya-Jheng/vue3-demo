<template>
    <div class="admin-home__content__account">
        <div class="admin-home__content__account__navbar">
            <router-link :to="{ name: 'account-teachers' }" class="admin-home__content__account__navbar__link">
                師資列表
            </router-link>
            <router-link :to="{ name: 'account-owners' }" class="admin-home__content__account__navbar__link">後台使用者列表
            </router-link>
        </div>
        <div class="admin-home__content__account__search">
            <input type="text" class="admin-home__content__account__navbar__search__input" placeholder="搜尋帳號或是備註">
            <button type="button" class="admin-home__content__account__navbar__search__button">搜尋</button>
        </div>
        <div class="admin-home__content__account__content">
            <router-view />
        </div>
    </div>
</template>

<style scoped lang="scss">
.admin-home__content__account {
    width: 90%;
    margin: 50px 0 0 60px;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.06em;
    color: var(--select-color);

    &__navbar {
        width: 100%;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        gap: 30px;
        border-bottom: 3px solid var(--input-icon-border);

        .active {
            color: var(--table-font-color);

            &::after {
                position: absolute;
                top: 100%;
                left: 0;
                content: '';
                width: 100%;
                height: 3px;
                background-color: var(--table-font-color);
            }
        }

        &__link {
            width: 150px;
            text-align: center;
            padding-bottom: 10px;
            cursor: pointer;
            position: relative;

            &:hover,
            &:focus {
                color: var(--table-font-color);

                &::after {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 3px;
                    background-color: var(--table-font-color);
                }
            }
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

    // select,
    // input {
    //     width: 493px;
    //     height: 52px;
    //     border: 0.5px solid var(--input-icon-border);
    //     border-radius: 5px;
    //     font-size: 14px;
    //     line-height: 19px;
    //     letter-spacing: 0.06em;
    //     color: var(--select-color);
    //     padding-left: 15px;
    // }

    // input {
    //     width: 1003px;
    // }

    // .input {
    //     display: flex;
    //     flex-direction: column;
    //     gap: 10px;
    //     margin-top: 23px;

    //     span {
    //         margin-left: 15px;
    //     }
    // }

    // &__search {
    //     display: flex;
    //     flex-direction: row;
    //     gap: 17px;
    // }

    // button {
    //     position: absolute;
    //     right: 50%;
    //     transform: translateX(50%);
    //     width: 237px;
    //     height: 51px;
    //     background: var(--button-bg-color);
    //     border-radius: 5px;
    //     color: var(--sub-font-color);
    //     text-align: center;
    //     margin-top: 43px;
    // }
}
</style>