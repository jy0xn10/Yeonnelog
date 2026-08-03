<script setup>
import banner from "~/assets/images/banner.png"
import otoha01 from "~/assets/images/otoha01.png"

import gif01 from "~/assets/images/marquee/01.gif"
import gif02 from "~/assets/images/marquee/02.gif"
import gif03 from "~/assets/images/marquee/03.gif"
import gif04 from "~/assets/images/marquee/04.gif"
import gif05 from "~/assets/images/marquee/05.gif"
import gif06 from "~/assets/images/marquee/06.gif"

const gifs = [gif01, gif02, gif03, gif04, gif05, gif06]
</script>

<template>
    <div class="main-container">
        <div class="banner">
            <img :src="banner" />
        </div>
        <div class="center">
            <div class="social-list">
                <h2>SNS</h2>
                <ul>
                    <li>
                        <a
                            href="https://x.com/y0jxn11"
                            target="_blank"
                            rel="noopener noreferrer">
                            X
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://blog.naver.com/y0jxn_"
                            target="_blank"
                            rel="noopener noreferrer">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.pixiv.net/users/127049264"
                            target="_blank"
                            rel="noopener noreferrer">
                            Pixiv
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/jy0xn10"
                            target="_blank"
                            rel="noopener noreferrer">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <span>
                    어서오세요! 연네의 개인 공간입니다.

                    프리즘스톤을 가장 좋아하고, 송온유를 최애로 좋아하고 있습니다.
                    좋아하는 작품과 캐릭터에서 영감을 받아 그림을 그리고,
                    취미로 웹 개발과 다양한 프로젝트를 만들고 있어요.

                    이곳에는 제가 만든 작업물과 관심 있는 것들,
                    그리고 좋아하는 것들을 조금씩 기록해 나가려고 합니다.

                    아직 부족한 점도 많지만, 재미있게 배우고 만들어가는 과정을
                    함께 봐주시면 감사하겠습니다.

                    편하게 둘러보다 가세요 :)
                </span>
            </div>
            <img
                :src="otoha01"
                alt="Otoha"
                class="otoha"
            />
        </div>
        <div>
            <marquee scrollamount="10">
                <img
                    v-for="(gif, index) in gifs"
                    :key="index"
                    :src="gif"
                    alt=""
                    class="marquee-gif"
                >
            </marquee>
            <span>
                ⓒ 2026. Yeonne All rights reserved.
            </span>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    min-height: 100vh;
}

.banner {
    padding: 16px 0;
    width: calc(100% - 32px);
}

.banner img {
    width: 100%;
    height: auto;
    display: block;
}

.center {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex: 1;
}

.social-list {
    display: flex;
    flex-direction: column;
    width: 150px;
}

.social-list a {
    color: inherit;
    text-decoration: none;
}

.social-list a:hover {
    opacity: 0.6;
}

.content {
    padding: 0 12px;
    flex: 1;
    background-color: #FFF8D6;
}

.marquee-gif {
    height: 64px;
    width: auto;
    margin: 0 6px;
    vertical-align: middle;
}

.otoha {
    position: fixed;

    right: 32px;
    bottom: 32px;

    width: 420px;
    height: auto;

    pointer-events: none;
    user-select: none;
}

@media (max-width: 768px) {
    .main-container {
        gap: 16px;
    }

    .banner {
        width: calc(100% - 32px);
        padding: 16px 0;
    }

    .center {
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding: 0 16px;
    }

    .social-list {
        width: 100%;
        align-items: center;
    }

    .social-list ul {
        padding: 0;
        margin: 0;
        text-align: center;
    }

    .content {
        width: 100%;
        min-height: 200px;
    }

    .otoha {
        width: 220px;
        right: 0;
        bottom: 0;
    }

    .marquee-gif {
        height: 48px;
        margin: 0 4px;
    }
}

@media (max-width: 480px) {
    .otoha {
        width: 160px;
    }

    .social-list h2 {
        font-size: 20px;
    }

    .content {
        font-size: 14px;
    }
}
</style>