<template>
  <Table
    v-model:selected="selected"
    v-model:selectedKeys="selectedKeys"
    row-key="key"
    :data="data"
    :columns="multiselectColumns"
  />

  <p><span style="color: #ba16e7">selected:</span> {{ selected }}</p>
  <p><span style="color: #ba16e7">selectedKeys:</span> {{ selectedKeys }}</p>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // [obj1, obj2]
    const selected = ref([])
    // [obj1[key], obj2[key]]
    const selectedKeys = ref([])

    const multiselectColumns = [
      // 定义一个 type: 'selection' 列显示 <Checkbox />
      {
        title: '全选',
        width: 40,
        type: 'selection',
      },
      {
        title: '姓名',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
    ]

    const data = [
      {
        key: '11',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',

        father: {
          name: 'Bob',
          age: 34,
        },
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        father: {
          name: 'Cnaob',
          age: 37,
        },
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        father: {
          name: 'Jacy',
          age: 56,
        },
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        father: {
          name: 'Mike',
          age: 43,
        },
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        father: {
          name: 'Jerry',
          age: 43,
        },
      },
    ]

    return {
      data,
      multiselectColumns,
      selected,
      selectedKeys,
    }
  },
})
</script>
