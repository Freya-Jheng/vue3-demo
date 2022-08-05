<template>
    <div class="contact">
        <div class="contact__title">
            <span>聯絡我們</span>
            CONTACT US
        </div>
        <div class="contact__content">
            <form class="contact__content__form">
                <div class="contact__content__form__item">
                    <span class="contact__content__form__item__title">姓名</span>
                    <input v-model="newContact.name" type="text" class="contact__content__form__item__input">
                </div>
                <div class="contact__content__form__item">
                    <span class="contact__content__form__item__title">電話</span>
                    <input v-model="newContact.phone" type="text" class="contact__content__form__item__input">
                </div>
                <div class="contact__content__form__item">
                    <span class="contact__content__form__item__title">地址</span>
                    <input type="text" class="contact__content__form__item__input">
                </div>
                <div class="contact__content__form__item">
                    <span class="contact__content__form__item__title">內容</span>
                    <textarea v-model="newContact.content" name="" id="" cols="30" rows="10"
                        class="contact__content__form__item__textarea"></textarea>
                </div>
                <div class="contact__content__form__item file">
                    <span class="contact__content__form__item__title">上傳附件</span>
                    <input @change="handleFileSubmit($event)" type="file" name="" id="file"
                        class="contact__content__form__item__input" style="display: none;">
                    <label class="contact__content__form__item__label" for="file">
                        選擇檔案
                    </label>
                    <span class="contact__content__form__item__placeholder">{{ fileName }}</span>
                </div>
                <button type="submit" class="contact__content__form__submit">
                    提交表單
                </button>
            </form>
            <div class="contact__content__QR-code">
                <img src="../assets/QRCode.png" alt="" class="contact__content__QR-code__image">
                <div class="contact__content__QR-code__text">
                    <span>
                        台灣好僕人婚姻家庭服務協會
                        <br>
                        陳證安
                        <br>
                        E-mail：pupcan@gmail.com
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import frontContactAPI from '../front-page-apis/contact';
import { ref, reactive } from 'vue';

const newContact = reactive({
    id: '',
    name: '',
    phone: '',
    date: '',
    content: '',
})
const fileName = ref('尚未選取檔案');
const formData = reactive([]);

// function
function handleFileSubmit($event) {
    const file = $event.target.files[0];

    fileName.value = file.name;
    formData.value = file;
};

async function postContact() {
    try {

        const dto = newContact;
        const response = await frontContactAPI.postContact({
            dto: dto,
            file: formData.value,
        });

        console.log(response, 'front-contact');

        if (response.status !== 200) {
            throw new Error(response.status)
        };

    } catch (err) {
        console.log(err);
    }
}
</script>

<style lang="scss" scoped>
.contact {
    width: 100%;
    margin-top: 10vw;
    padding: 40px 3% 140px;
    background-color: rgba(196, 196, 196, 0.1);
    font-size: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        margin-top: 7vw;
        padding: 95px 3% 190px;
    }

    @media (min-width: 1024px) {
        margin-top: 3vw;
        padding: 142px 3% 245px;
    }


    &__title {
        width: 100%;
        max-width: 862px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 1rem;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: var(--contact-title-color);
        margin-bottom: 15px;

        @media (min-width: 768px) {
            line-height: 30px;
            font-size: 1.8rem;
        }

        @media (min-width: 1024px) {
            line-height: 56px;
            font-size: 2.386rem;
        }

        span {
            font-size: 0.8rem;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0.07em;
            color: var(--subtitle-color);

            @media (min-width: 768px) {
                font-size: 1rem;
            }

            @media (min-width: 1024px) {
                font-size: 1.339rem;
            }
        }
    }

    &__content {
        width: 100%;
        max-width: 862px;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }

        &__form {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;

            @media (min-width: 768px) {
                width: 70%;
            }

            &__item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                &__title {
                    line-height: 26px;
                    position: relative;

                    @media (min-width: 768px) {
                        font-size: 0.9rem;
                        line-height: 30px;
                    }

                    @media (min-width: 1024px) {
                        font-size: 1.056rem;
                        line-height: 37px;
                    }

                    &::after {
                        position: absolute;
                        top: 0;
                        content: '*';
                        color: var(--icon-color);
                    }
                }

                &__input {
                    width: 100%;
                    height: 28px;

                    @media (min-width: 768px) {
                        height: 38px;
                    }
                }

                &__textarea {
                    height: 208px;
                }

                &__input,
                &__textarea {
                    width: 100%;
                    max-width: 506px;
                    background-color: inherit;
                    border: 0.5px solid #373737;
                }

                &__label {
                    width: 60px;
                    height: 25px;
                    text-align: center;
                    line-height: 25px;
                    background-color: var(--sub-font-color);
                    border: 0.5px solid rgba(0, 0, 0, 0.56);
                    cursor: pointer;

                    @media (min-width: 768px) {
                        width: 85px;
                        height: 27px;
                        line-height: 27px;
                    }
                }

                &__label,
                &__placeholder {
                    @media (min-width: 768px) {
                        font-size: 0.9rem;
                    }

                    @media (min-width: 1024px) {
                        font-size: 1.125rem;
                    }
                }
            }

            .file {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                gap: 12px;
                align-items: center;

                @media (min-width: 768px) {
                    gap: 16px;
                }

                @media (min-width: 1024px) {
                    gap: 35px;
                }
            }

            &__submit {
                position: absolute;
                top: 100%;
                right: 0;
                width: 30vw;
                max-width: 183.39px;
                height: 27px;
                background: var(--story-button-color);
                border-radius: 36.8627px;
                color: var(--sub-font-color);
                text-align: center;
                margin-top: 22px;

                &::after {
                    content: url('../assets/arrow.png');

                    @media (min-width: 768px) {
                        margin-left: 20px;
                    }

                    @media (min-width: 1024px) {
                        margin-left: 31.45px;
                    }
                }

                @media (min-width: 768px) {
                    height: 35px;
                    font-size: 0.7rem;
                }

                @media (min-width: 1024px) {
                    height: 47px;
                    font-size: 0.864rem;
                }
            }
        }

        &__QR-code {
            width: 50%;
            margin-top: 7vw;

            @media (min-width: 768px) {
                margin-left: 57px;
            }

            @media (min-width: 1024px) {
                margin-left: 114px;
            }

            &__image {
                width: 70px;
                height: 70px;
                margin-bottom: 3vw;

                @media (min-width: 768px) {
                    width: 100px;
                    height: 100px;
                    margin-bottom: 2vw;
                }

                @media (min-width: 1024px) {
                    width: 148px;
                    height: 148px;
                    margin-bottom: 1vw;
                }
            }

            &__text {
                font-size: 0.7rem;
                font-weight: 500;
                line-height: 15px;

                @media (min-width: 768px) {
                    font-size: 0.9rem;
                    line-height: 20px;
                }

                @media (min-width: 1024px) {
                    font-size: 1.125rem;
                    line-height: 25px;
                }
            }
        }
    }
}
</style>