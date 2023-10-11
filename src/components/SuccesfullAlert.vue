<template>
    <div class="alert alert-success alert-dismissible fade show mb-0 position-fixed bottom-0 end-0" role="alert">
        <slot></slot>
        <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
    </div>
</template>