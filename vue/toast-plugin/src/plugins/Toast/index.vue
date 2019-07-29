<template>
    <transition name="fade">
        <div class="toast" v-if="visible">{{content}}</div>
    </transition>
</template>


<script>

export default {
    name: 'Toast',


    data: function() {
        return {
            visible: false,
            timer: null
        }
    },


    methods: {
        show: function(content, time) {
            console.log(content);
            this.content = content
            this.visible = true

            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.hide()
            }, time || 2000)
        },


        hide: function() {
            clearTimeout(this.timer)
            this.visible = false
            console.log(this.visible);
        }
    }
}

</script>


<style lang="less" scoped>

    .toast {
        text-align: center;
        position: fixed;
        bottom: 2rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: .2rem;
        background-color: fade(#000, 70.2);
        width: 4.8rem;
        height: .8rem;
        line-height: .8rem;
        z-index: 9999;
        color: #fff;
        font-size: .26rem;
    }

    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }


    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

</style>