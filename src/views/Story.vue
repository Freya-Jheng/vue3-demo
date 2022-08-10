<template>
    <div class="stories">
        <div class="stories__banner">
            <div class="stories__banner__text">
                <span class="stories__banner__text__title">好文分享</span>
                <span class="stories__banner__text__title-English">CORE VALUE</span>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script setup>

// functions

</script>

<style lang="scss" scoped>
.stories {
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;

    @media (min-width: 768px) {
        font-size: 0.65rem;
    }

    @media (min-width: 1024px) {
        font-size: 0.8125rem;
    }

    &__banner {
        width: 100%;
        height: 40vmin;
        background: url('../assets/stories-banner.png') no-repeat;
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
}
</style>