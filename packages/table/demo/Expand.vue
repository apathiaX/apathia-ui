<template>
  <Table :columns="expandColumns" :data="data" :expand="expandConfig" />
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const expandColumns = [
      {
        title: '索引',
        type: 'index',
      },
      // type: 'expand' 定义一个扩展列，如果该行可以
      // 被扩展，这里会显示一个  + 号
      {
        title: '展开',
        type: 'expand',
        width: 50,
      },
      {
        title: '姓名',
        field: 'name',
        width: 100,
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

    const data = reactive([
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
    ])

    const expandConfig = {
      // 扩展行里显示的内容
      expandRowRender: ({ row }) => row.age,
      // 返回一个bool值用来控制该行是否可以有扩展行
      rowExpandable: ({ row }) => row.age > 30,
    }

    return {
      data,
      expandColumns,
      expandConfig,
    }
  },
})
</script>
