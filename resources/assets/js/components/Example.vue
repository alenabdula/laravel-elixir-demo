<template>
    <div class="example-component">
        <p>Example Vue Component</p>
    </div>
</template>
<style type="sass">
    .example-component {
        color: red;
        font-size: 22px;
    }
</style>
<script>
  export default {
    ready() {
        console.log("%cReady", "color: #A4CE39; font-size: 2rem;");
    }
  }
</script>