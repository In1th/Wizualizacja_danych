<script>
    export let active;
</script>

<div id="paper" class:active={active}>
    <div id="shadow"></div>
    <section></section>
</div>

<style lang="scss">
    #paper {
        width: 100vw;
        height: 300px;
        position: absolute;
        bottom: 0;
        z-index: 5;
    }
    section {
        position: absolute;
        z-index: 5;

        width: 100%;
        height: 100%;
        opacity: 0.7;
        background-image:  linear-gradient(#9181ff 2px, transparent 2px), linear-gradient(90deg, #9181ff 2px, transparent 2px), linear-gradient(#9181ff 1px, transparent 1px), linear-gradient(90deg, #9181ff 1px, transparent 1px);
        background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
        background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    }
    #shadow {
        position: absolute;
        z-index: 6;

        width: 100%;
        height: 300%;
        background-image: linear-gradient(180deg, #ddd 50%, transparent 100%);

        top: -160px;
        transition: all .5s ease-in;
    }
    
    .active #shadow {
        top: -360px;
    }
</style>