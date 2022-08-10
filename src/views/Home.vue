<template>
  <div class="landing">
    <header class="landing__header">
      <Navbar />
      <div class="landing__header__text">
        <h1 class="landing__header__text__title">好僕人的「異象與使命」</h1>
        <p class="landing__header__text__introduction">致力於婚姻成為『好僕人家庭』及『家庭好僕人』推崇效法基督捨己、謙卑及順服的生命品格，來鞏固婚姻及生命的成長，分別為聖及榮耀上帝
        </p>
      </div>
    </header>
    <section class="landing__news">
      <div class="landing__news__title title">
        <span class="landing__news__title__sub sub">最新消息</span>
        <h1 class="landing__news__title__main main">NEWS</h1>
      </div>
      <div class="landing__news__content">
        <div class="landing__news__content__cover">
          <img src="../assets/roses.png" alt="">
        </div>
        <div class="landing__news__content__list">
          <div v-for="story in GsFamily.frontCamps" :key="story.id" class="landing__news__content__list__card">
            <div class="landing__news__content__list__card__left">
              <span class="landing__news__content__list__card__left__number">
                <span v-if="story.id < 10">0</span>{{ story.id }}
              </span>
            </div>
            <div class="landing__news__content__list__card__right">
              <span class="landing__news__content__list__card__right__title">
                {{ story.title }}
              </span>
              <span class="landing__news__content__list__card__right__details">{{ story.time }}<span>{{ story.city
              }}</span></span>
            </div>
            <a href="" class="landing__news__content__list__card__button">READ MORE</a>
          </div>
        </div>
      </div>
      <PaginationVue />
    </section>
    <section class="landing__stories">
      <div class="landing__stories__title title">
        <span class="landing__stories__title__sub sub">好文分享</span>
        <h1 class="landing__stories__title__main main">STORYS</h1>
      </div>
      <Carousel class="landing__stories__content" :itemsToShow="1.3" :autoplay="3000" :wrap-around="true">
        <Slide v-for="story in GsFamily.frontArticles" :key="story.id" class="landing__stories__content__card">
          <div class="landing__stories__content__card__left">
            <img :src="story.file" alt="">
            <!-- <img v-if="story.file.length === 0" src="../assets/default-image.png" alt=""> -->
          </div>
          <div class="landing__stories__content__card__right">
            <h6 class="landing__stories__content__card__right__title">
              {{ story.title }}
            </h6>
            <span class="landing__stories__content__card__right__description">
              {{ story.content }}
            </span>
            <a href="" class="landing__stories__content__card__right__button">
              <span class="">READ MORE</span>
              <img src="../assets/right-arrow.png" alt="">
            </a>
          </div>
        </Slide>
        <template #addons>
          <navigation />
        </template>
      </Carousel>
    </section>
    <section class="landing__core-value">
      <div class="title landing__core-value__title">
        <span class="sub landing__core-value__title__sub">異象與使命</span>
        <h1 class="main landing__core-value__title__main">CORE VALUE</h1>
      </div>
      <div class="landing__core-value__video">
        <img src="../assets/videos-icon.png" alt="" class="landing__core-value__video__icon">
      </div>
    </section>
    <section id="" class="landing__cooperate">
      <div class="title landing__cooperate__title">
        <span class="sub landing__cooperate__title__sub">合作教堂</span>
        <h1 class="main landing__cooperate__title__main">COOPERATE</h1>
      </div>
      <Carousel :breakpoints="breakpoints" :settings="settings" class="landing__cooperate__content" :autoplay="3000"
        :wrap-around="true">
        <Slide v-for="church in churchs" :key="church.id" class="landing__cooperate__content__slide">
          <div class="landing__cooperate__content__slide__card">
            <img src="../assets/roses.png" alt="cover" class="landing__cooperate__content__slide__card__cover">
            <span class="landing__cooperate__content__slide__card__title">{{ church.title }}</span>
          </div>
        </Slide>
        <template #addons>
          <navigation />
        </template>
      </Carousel>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import PaginationVue from '@/components/Pagination.vue';
import { reactive } from 'vue';
import { useGsFamily } from '../stores/gsfamily';

const GsFamily = useGsFamily();
GsFamily.getAllFrontArticles();
GsFamily.getAllFrontCamps();
GsFamily.getAllFrontVideos();

let id = 0;
let it = 0;
let ip = 0;
const news = reactive([
  {
    id: id++,
    title: '愛在家夫婦日營',
    time: '2021.10.30',
    city: '台中'
  },
  {
    id: id++,
    title: '愛在家夫婦日營',
    time: '2021.10.30',
    city: '台中'
  },
  {
    id: id++,
    title: '愛在家夫婦日營',
    time: '2021.10.30',
    city: '台中'
  },
])
const stories = reactive([
  {
    id: it++,
    title: '拾回的眼光',
    image: '../assets/story-image.png',
    description: '路加福音中曾記載一個失而復得的比喻，一個婦人，丟失了一塊錢，就細細地尋找，找著了，就歡喜快樂。另一個最為人所熟悉的...'
  },
])
const churchs = reactive([
  {
    ip: ip++,
    title: '嘉義靈糧堂',
  },
  {
    ip: ip++,
    title: '林口靈糧堂'
  },
  {
    ip: ip++,
    title: '台北真理堂'
  },
  {
    ip: ip++,
    title: '台中慕義堂'
  },
  {
    ip: ip++,
    title: '嘉義靈糧堂',
  },
  {
    ip: ip++,
    title: '林口靈糧堂'
  },
  {
    ip: ip++,
    title: '台北真理堂'
  },
  {
    ip: ip++,
    title: '台中慕義堂'
  },
])
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
};
const breakpoints = {
  768: {
    itemsToShow: 3,
    snapAlign: "center"
  },
  1024: {
    itemsToShow: 4,
    snapAlign: "start"
  }
}
</script>


<style scoped lang="scss">
.landing {
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    // all: unser;
  }

  // command styles for title start
  .title {
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: 60px;

    &::after {
      position: absolute;
      content: '';
      width: 93px;
      height: 0px;
      right: 50%;
      top: 110%;
      transform: translateX(50%);
      border: 3px solid var(--news-line-color);

      @media screen and (min-width: 768px) {
        border: 4.5px solid var(--news-line-color);
      }

      @media screen and (min-width: 1024px) {
        border: 6px solid var(--news-line-color);
      }
    }

    .sub {
      font-weight: 600;
      font-size: 1rem;
      line-height: 29px;
      letter-spacing: 0.07em;
      color: var(--news-title-color);

      @media screen and (min-width: 768px) {
        font-size: 1.156rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 1.3125rem;
      }
    }

    .main {
      font-family: 'Padauk', sans-serif;
      font-weight: 400;
      font-size: 2rem;
      letter-spacing: 0.08em;
      color: var(--poster-title-color);

      @media screen and (min-width: 768px) {
        font-size: 3.025rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 3.25rem;
      }

    }
  }

  // command styles for title end

  &__header {
    width: 100vw;
    height: 100vw;
    color: var(--sub-font-color);
    background: url('../assets/ladning-banner.png') no-repeat;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-align: left;

    @media screen and (min-width: 768px) {
      height: 50vw;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.8125rem;
    }

    &__text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8%;
      width: 70%;
      max-width: 495px;

      &__title {
        width: 100%;
        font-weight: 700;
        font-size: 1.4rem;
        margin-bottom: 20px;

        @media screen and (min-width: 768px) {
          left: 6%;
          font-size: 2.106rem;
          margin-bottom: 34px;
        }

        @media screen and (min-width: 1024px) {
          font-size: 2.8125rem;
          margin-bottom: 48px;
        }

      }

      &__introduction {
        width: 85%;
        font-weight: 500;
        font-size: 0.3rem;
        line-height: 15px;
        text-align: justify;

        @media screen and (min-width: 768px) {
          width: 70%;
          font-size: 0.65rem;
          line-height: 25px;
        }

        @media screen and (min-width: 1024px) {
          width: 91%;
          font-size: 1rem;
          line-height: 31px;
        }
      }

    }

  }

  &__news {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5vh;

    &__content {
      width: 100%;
      max-width: 917px;
      height: 50vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 768px) {
        width: 95%;
        margin: auto;
      }

      &__cover {
        display: none;
        position: relative;

        @media screen and (min-width: 768px) {
          display: block;
          width: 50%;
          height: 80%;

          img {
            position: absolute;
            top: 50%;
            transform: translate(0%, -60%);
            width: 85%;
            box-shadow: 30px 30px 0px var(--story-button-color);
          }
        }
      }

      &__list {
        width: 80%;

        @media screen and (min-width: 768px) {
          width: 50%;
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        &__card {
          width: 100%;
          min-width: 175px;
          height: 61px;
          max-height: 61px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          color: var(--news-title-color);

          &__left {
            font-size: 0.78rem;
            font-weight: 600;

            @media (min-width: 768px) {
              font-size: 1.125rem;
            }

            &__number {
              position: relative;

              &::after {
                position: absolute;
                content: '';
                top: 100%;
                right: 50%;
                transform: translateX(50%);
                width: 0px;
                height: 25px;
                border: 0.5px solid var(--news-line-color);

                @media screen and (min-width: 768px) {
                  height: 25px;
                }
              }
            }
          }

          &__right {
            display: flex;
            flex-direction: column;

            &__title {
              font-size: 0.88rem;
              font-weight: 600;
              margin-bottom: 4px;

              @media (min-width: 768px) {
                font-size: 1.125rem;
              }
            }

            &__details {
              font-size: 0.75rem;
              font-weight: 300;
              color: var(--main-font-color);

              @media (min-width: 768px) {
                font-size: 0.8125rem;
              }
            }

          }

          &__button {
            position: relative;
            width: 35%;
            max-width: 199px;
            height: 50%;
            max-height: 51px;
            color: var(--story-button-color);
            border: 1px solid var(--story-button-color);
            border-radius: 40px;
            font-size: 0.3rem;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover,
            &:focus {
              color: var(--sub-font-color);
              background-color: var(--story-button-color);

              &::after {
                content: url('../assets/arrow-white.png');
              }
            }

            &::after {
              position: absolute;
              bottom: 0;
              content: url('../assets/arrow-brown.png');

              @media screen and (min-width: 1024px) {
                bottom: unset;
                left: 80%;
              }
            }

            @media screen and (min-width: 768px) {
              font-size: 0.618rem;
            }

            @media screen and (min-width: 1024px) {
              font-size: 0.937rem;
              width: 199px;
              height: 51px;
            }
          }
        }
      }

    }
  }

  &__stories {
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      height: 50vw;
    }

    &__content {
      width: 100vw;
      height: 100%;

      @media (min-width: 768px) {
        margin-bottom: unset;
      }

      &__card {
        display: flex;
        flex-direction: row;
        height: 30vh;

        @media (min-width: 768px) {
          height: 35vw;
          margin-bottom: unset;
        }

        &__left {
          width: 70%;
          height: 100%;

          img {
            width: 100%;
            height: 99%;
            object-fit: contain;
          }
        }

        &__right {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          background-color: var(--story-bg-color);

          &__title {
            font-size: 0.9rem;
            font-weight: 600;
            line-height: 25px;
            color: var(--news-title-color);

            @media (min-width: 768px) {
              font-size: 1rem;
            }

            @media (min-width: 1024px) {
              font-size: 1.125rem;
            }
          }

          &__description {
            width: 90%;
            font-size: 0.25rem;
            max-width: 215px;
            margin: 0 3px;
            text-align: justify;
            line-height: 12.5px;

            @media (min-width: 768px) {
              line-height: 23px;
            }
          }

          &__button {
            width: 55.5%;
            height: 12.3%;
            cursor: pointer;
            color: var(--sub-font-color);
            background-color: var(--story-button-color);
            font-size: 0.3em;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 40px;

            @media (min-width: 768px) {
              width: 49.5%;
              font-size: 0.556rem;
            }

            @media (min-width: 1024px) {
              width: 49.5%;
              width: 199px;
              height: 51px;
              font-size: 0.656rem;
            }

            span {

              @media (min-width: 768px) {
                margin-right: 8px;
              }
            }

            img {
              display: none;

              @media (min-width: 768px) {
                display: block;
              }
            }
          }

        }
      }
    }
  }

  &__core-value {
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
      height: 100vh;
    }

    &__video {
      width: 70vw;
      height: 35vw;
      background-color: var(--videos-bg-color);
      position: relative;

      @media screen and (min-width: 1024px) {
        width: 60vw;
        height: 60vh;
      }

      &__icon {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 10%;
      }
    }
  }

  &__cooperate {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;

    &__content {
      width: 100vw;
      margin: auto;

      @media screen and (min-width: 768px) {
        width: 80vw;
      }

      &__slide {
        &__card {
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3vw;

          &__cover {
            width: 80%;
          }

          &__title {
            font-weight: 500;
            font-size: 1rem;
            color: var(--subtitle-color);

            @media screen and (min-width: 768px) {
              font-size: 1.125rem;
              height: unset;
            }
          }
        }
      }
    }

  }
}

section {
  margin-top: 5vh;
}
</style>

<style>
.carousel {
  width: 100%;
}

.carousel__viewport {
  overflow: hidden;
}

.carousel__prev,
.carousel__next {
  width: 20px;
  height: 40px;
  background: var(--sub-font-color);
  color: var(--story-button-color);
  border-radius: 0;
  cursor: pointer;
}

.carousel__prev {
  margin-left: 3%;
}

.carousel__next {
  margin-right: 3%;
}

@media screen and (min-width: 768px) {

  .carousel__prev,
  .carousel__next {
    width: 45px;
    height: 70px;
  }

}

.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>