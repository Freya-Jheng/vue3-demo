<template>
    <div class="sponsor">
        <div class="sponsor__banner">
            <div class="sponsor__banner__text">
                <span class="sponsor__banner__text__title">支持我們</span>
                <span class="sponsor__banner__text__title-English">SPONSOR US</span>
            </div>
        </div>
        <div class="sponsor__content">
            <p class="sponsor__content__text">我們相信厚賜百物的上帝，必賜予好僕人所有的需要，
                以致我們一無所缺乏。我們樂意將這福份讓更多肢體一同參與，
                使大家能在禱告及金錢上有份，為自己積成美好的財富，
                保羅說：「又要囑咐他們行善、在好事上富足、甘心施捨、
                樂意供給人、為自己積成美好的根基、預備將來、
                叫他們持定那真正的生命。」（ 提摩太前書6：1 8-19）</p>
        </div>
        <h5 class="sponsor__title">線上捐款</h5>
        <div class="sponsor__form">
            <form @submit.prevent.stop="getInfrom" class="sponsor__form__content">
                <div class="sponsor__form__content__item">
                    <span class="sponsor__form__content__item__title">捐款人姓名</span>
                    <input v-model="newSponsor.name" type="text" class="sponsor__form__content__item__input">
                </div>
                <div class="sponsor__form__content__item">
                    <span class="sponsor__form__content__item__title">金額</span>
                    <input v-model="newSponsor.price" type="number" class="sponsor__form__content__item__input">
                </div>
                <div class="sponsor__form__content__item">
                    <span class="sponsor__form__content__item__title">電話</span>
                    <input v-model="newSponsor.phone" type="text" class="sponsor__form__content__item__input">
                </div>
                <div class="sponsor__form__content__item">
                    <span class="sponsor__form__content__item__title">地址</span>
                    <input v-model="newSponsor.address" type="text" class="sponsor__form__content__item__input">
                </div>
                <button type="submit" class="sponsor__form__content__submit">
                    我要捐款
                </button>
            </form>
            <div class="sponsor__form__description">
                <h5 class="sponsor__form__description__title">現金存款及櫃員機服務</h5>
                <p class="sponsor__form__description__text">
                    台內團字第1090045982號
                    <br>
                    本協會統一編號88038001
                    <br>
                    登記地址：高雄市苓雅區四維四路2號8樓之5
                    <br>
                    戶名：台灣好僕人婚姻家庭服務協會
                    <br>
                    帳戶：006-3465-717-016011 合作金庫 鼓山分行
                </p>
                <img src="../assets/pay-icon.png" alt="" class="sponsor__form__description__image">
            </div>
        </div>
    </div>
    <div id="payMent">

    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import payMentAPI from '../front-page-apis/payMent';

const newSponsor = reactive({
    name: '',
    price: 0,
    phone: '',
    address: '',
});


// functions
async function getInfrom() {
    try {
        const payMent = document.getElementById('payMent');
        const response = await payMentAPI.getInform({
            name: newSponsor.name,
            price: newSponsor.price,
            phone: newSponsor.phone,
            address: newSponsor.address
        });

        if (response.status !== 200) {
            throw new Error(response.status);
        };

        payMent.innerHTML = response.data;

        const payMentForm = document.getElementById('allPayAPIForm');
        payMentForm.submit();

    } catch (err) {
        console.log(err);
    };
};

</script>

<style lang="scss" scoped>
.sponsor {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;

    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/sponsor-banner.png') no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative;

        &__text {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

            &__title {
                font-weight: 600;
                font-size: 0.5rem;
                letter-spacing: 0.07em;
                color: var(--news-title-color);

                @media (min-width: 600px) and (max-width: 1000px) {
                    font-size: calc(0.5rem + (1.3 - 1.2) * ((100vw - 600px) / (100 - 600)));
                }

                @media (min-width: 1024px) {
                    font-size: 1.33875rem;
                }
            }

            &__title-English {
                font-family: 'Padauk';
                font-style: normal;
                font-weight: 400;
                font-size: 0.9rem;
                letter-spacing: 0.01em;
                color: var(--news-English-title-color);

                @media (min-width: 600px) and (max-width: 1000px) {
                    font-size: calc(0.9rem + (1.3 - 1.2) * ((100vw - 600px) / (100 - 600)));
                }

                @media (min-width: 1024px) {
                    font-size: 2.38613125rem;
                }
            }
        }
    }

    &__content {
        width: 100%;
        height: 55vmin;
        position: relative;
        background-image: url('../assets/servant-section1-banner.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

        @media (min-width: 768px) {
            height: 70vmin;
        }

        @media (min-width: 1024px) {
            height: 75vmin;
        }

        &__text {
            width: 80%;
            max-width: 504px;
            font-size: 0.65rem;
            line-height: 20px;
            text-align: center;
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);

            @media (min-width: 768px) {
                font-size: 0.88rem;
                line-height: 35px;
            }

            @media (min-width: 1024px) {
                font-size: 1.125rem;
                line-height: 45px;
            }
        }
    }

    &__title {
        font-weight: 600;
        font-size: 0.95rem;
        line-height: 33px;
        color: var(--subtitle-color);
        margin: 50px 0 22px;

        @media (min-width: 768px) {
            font-size: 1rem;
            line-height: 35px;
            margin: 100px 0 35px;
        }

        @media (min-width: 1024px) {
            font-size: 1.5rem;
            line-height: 45px;
            margin: 121px 0 43px;
        }
    }

    &__form {
        width: 100%;
        max-width: 835px;
        margin-bottom: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 768px) {
            margin-bottom: 20vw;
            flex-direction: row;
        }

        @media (min-width: 1024px) {
            margin-bottom: 12vw;
        }

        &__content {
            width: 90%;
            position: relative;
            margin-bottom: 70px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            @media (min-width: 768px) {
                margin-bottom: 0px;

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
                    max-width: 506px;
                    height: 28px;
                    border: 0.5px solid #373737;

                    @media (min-width: 768px) {
                        height: 38px;
                    }
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
                    margin-top: 42px;
                }

                @media (min-width: 1024px) {
                    height: 47px;
                    font-size: 0.864rem;
                    margin-top: 62px;
                }
            }
        }

        &__description {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            gap: 7px;

            @media (min-width: 768px) {
                padding-left: 53px;
            }

            @media (min-width: 1024px) {
                padding: 0 0 0 107px;
            }

            &__title {
                font-size: 0.95rem;

                @media (min-width: 768px) {
                    font-size: 1rem;
                }

                @media (min-width: 1024px) {
                    padding-top: 100px;
                    font-size: 1.5rem;
                }
            }

            &__text {
                line-height: 20px;

                @media (min-width: 768px) {
                    font-size: 0.75rem;
                    line-height: 24px;
                }

                @media (min-width: 1024px) {
                    font-size: 0.9375rem;
                    line-height: 29px;
                }
            }

            &__image {
                width: 100px;
                height: 60px;

                @media (min-width: 768px) {
                    width: 150px;
                    height: 90px;
                }

                @media (min-width: 1024px) {
                    width: 200px;
                    height: 120px;
                }
            }
        }
    }

    //  @media (min-width: 768px) {
    //      font-size: 0.88rem;
    //      line-height: 35px;
    //  }

    //  @media (min-width: 1024px) {
    //      font-size: 1.125rem;
    //      line-height: 45px;
    //  }

}
</style>