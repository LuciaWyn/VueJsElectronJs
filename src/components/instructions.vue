<template>
    <div>
        <p>You may clone this project from Github, to begin developing your own computer apps, using Electron Js and Vue Js.</p>
        <p>To complie the Vue components run the command: npx mix</p>
        <p>To run the electron app, run the command: npm start</p>
        <p>Make sure you are in the file directory when running this!</p>
        <p>All image files need to be detected by :src='"/path/to/source.filetype"' This is to avoid errors. This means that there sould be either double quotation marks, with apostraphies inside or apostrpahies with double quotation marks inside. The src must have a colon, before it.</p>
    </div>
</template>
<script>
export default {
    name: 'instructions'
}
</script>