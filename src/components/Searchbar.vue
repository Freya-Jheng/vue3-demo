<template>
    <div class="contain">
        <div class="searchbar">
<<<<<<< HEAD
            <input :value="modelValue" placeholder="Search..." type="text" class="searchbar__input"
                @input="updateValue($event.target.value)">
            <button @click="searchFunction" type="button">
                <img src="../assets/searchbar-icon.png" alt="" class="searchbar__icon" />
            </button>
=======
            <input :value="modelValue" placeholder="Search..." type="text" class="searchbar__input" @input="updateValue">
            <img src="../assets/searchbar-icon.png" alt="" class="searchbar__icon">
>>>>>>> 5b0e0ebba115ca36bc5e5ec541d856c307815a9b
        </div>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get: () => {
        return modelValue.value
    }
})


const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
}

</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    searchFunction: {
        type: Function,
    }
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
    get: () => {
        return modelValue.value
    }
})
const updateValue = (value) => {
    emit('update:modelValue', value);
}

</script>


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

        &:focus,
        &:hover {
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