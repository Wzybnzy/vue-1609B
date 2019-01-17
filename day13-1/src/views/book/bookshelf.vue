<template>
   <div>
    <elHeader :login="true">
        <ul>
            <router-link to="/bookcity">书城</router-link>
            <router-link to="/bookshelf">书架</router-link>
        </ul>
    </elHeader>
    <section class="bookshelf">
            书架
    </section>
</div>
</template>