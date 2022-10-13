<template>
    <img :src="src" width="100%" />
</template>

<script>

import deepfmImage from "../assets/deepfm.png"
import mmoeImage from "../assets/mmoe.png"
import pleImage from "../assets/ple.png"

export default {
    data() {
        return {
            imageDict: {
                "deepfm": deepfmImage,
                "mmoe": mmoeImage,
                "ple": pleImage
            },
            src: ""
        }
    },
    props: {
        modelName: {
            type: String
        }
    },
    watch: {
        modelName() {
            this.src = this.imageDict[this.modelName]
        }
    }

}
</script>