<template>
    <section class="blog-wrapper">
        <div class="container">
            <div class="blog-wrapp">
                <BlogCard></BlogCard>
            </div>
        </div>
    </section>
</template>

<script setup>
    import BlogCard from '../ui/BlogCard.vue';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .blog-wrapper{
        margin-top: 95px;
        margin-bottom: 150px;
        .blog-wrapp{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }
    }
</style>