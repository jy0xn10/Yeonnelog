<template>
    <div class="layout">
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-image: url("~/assets/images/wallpaper01.jpg");
    background-repeat: repeat;
    background-position: top left;
    background-size: auto;
}

.layout main {
    width: min(100%, 760px);
    max-width: 760px;
    box-sizing: border-box;
    background-color: white;
}
</style>