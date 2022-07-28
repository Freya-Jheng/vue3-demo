<template>
    <div class="about">
        <div class="about__banner">
            <div class="about__banner__text">
                <span class="about__banner__text__title">決策與使命</span>
                <span class="about__banner__text__title-English">CORE VALUE</span>
            </div>
        </div>
        <div class="about__content">
            <span class="about__content__title">建造婚姻幸福家庭</span>
            <br>
            <span class="about__content__first-paragraph">致力於婚姻成為<br>
                <span><span class="highlight">『好僕人家庭』</span>及<span class="highlight">『家庭好僕人』</span></span>
                <br>
                <span>
                    推崇效法基督捨己
                    <br>
                    謙卑及順服的生命品格
                </span>
            </span>
            <br>
            <span class="about__content__second-paragraph">
                鞏固婚姻及生命的成長
                <br>
                分別為聖及榮耀上帝
            </span>
            <br>
            <span class="about__content__third-paragraph">
                非信徒家庭可得到真理原則
                <br>
                用心經營家庭的方法
            </span>
        </div>
    </div>
</template>
<style scoped lang="scss">
.about {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/core-value-banner.png') no-repeat;
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
        width: 90%;
        margin: 15vw 0 16vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 42px;
        @media (min-width: 768px) {
            font-size: 22.1172px;
        }

        &__first-paragraph {
            line-height: 60px;
        }

        &__title {
            font-size: 1rem;

            @media (min-width: 768px) {
                font-size: 27.0321px;
            }
        }
        .highlight {
            color: var(--news-title-color);
            font-weight: 700;
            font-size: 1.19rem;
            @media (min-width: 768px) {
                font-size: 28.26px;
            }
        }
    }
}
</style>