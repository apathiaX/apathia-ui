<template>
    <i :style="styles()" v-bind="$attrs">
        <slot></slot>
    </i>
</template>

<script lang='ts' setup>
import { CSSProperties } from 'vue';
import { isString } from '@apathia/apathia.shared'

interface IconProps {
    readonly color?: Pick<CSSProperties, 'color'>
    readonly size?: number | string
}

// defineOptions({
//     name: 'Icon',
//     inheritAttrs: false
// })

const props = defineProps<IconProps>()

const styles = () => {
    if (!props.color && !props.size)
        return {}

    return {
        fontSize: props.size ? isString(props.size) ? props.size : `${props.size}px` : undefined,
        color: props.color || undefined
    }
}
</script>

<style>
svg {
    height: 1em;
    width: 1em;
}
</style>