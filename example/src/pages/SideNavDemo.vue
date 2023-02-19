<template>
    <button @click="mini = !mini">mini</button>
    <div style="height: 50vh; display: flex; position: absolute; top: 0">
        <SideNav :menu-list="menuList" :mini="mini" :active-key="activeKey" key-field="path" search @select="select" />
        content
    </div>

    <div style="height: 50vh; display: flex; position: absolute; bottom: 0">
        <SideNav :menu-list="menuList" :mini="mini" :active-key="activeKey" search @select="select">
            <template #default="{ isActiveItem, expand, onClick, node }">
                <div :id="isActiveItem ? 'expandSideNode' : undefined" class="rowClass" @click="onClick">
                    <span v-show="!mini">{{ node.text }}</span>
                    <span v-show="node.children && !mini">{{ expand }}</span>
                </div>
            </template>

            <template #menuBottom>
                <div>hello</div>
            </template>
        </SideNav>
        content
    </div>
</template>

<script>
import { SideNav } from '@apathia/apathia'
import { routerMenu as menuList } from '../menu'

export default {
    components: { SideNav },
    data() {
        return {
            mini: false,
            menuList,
            activeKey: '',
        }
    },
    methods: {
        select(node) {
            this.activeKey = node.path
        },
    },
}
</script>

<style>

</style>
