<template>
    <div class="contain">
        <div class="searchbar">
            <input placeholder="Search..." type="text" class="searchbar__input">
            <img src="../assets/searchbar-icon.png" alt="" class="searchbar__icon">
        </div>
    </div>
</template>

<style scoped lang="scss">
.contain {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.searchbar {
    width: 40vw;
    max-width: 356px;
    border-bottom: 0.5px solid #BBBBBB;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding-bottom: 10px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 15px;
    }

    &__input {
        &:focus, &:hover {
            all: unset;
        }
    }

    &__icon {
        width: 12.5px;
        height: 12.5px;

        @media (min-width: 768px) {
            width: 17.5px;
            height: 17.5px;
        }

        @media (min-width: 1024px) {
            width: 23.5px;
            height: 23.5px;
        }
    }
}
</style>