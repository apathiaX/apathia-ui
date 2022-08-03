<template>
  <Table :columns="fixedColumns" :data="data" :scroll="{ width: 400 }" />
</template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
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

    const fixedColumns = [
      {
        title: '姓名',
        field: 'name',
        fixed: 'left',
        width: 100,
      },
      {
        title: 'age',
        field: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        width: 200,
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
        title: 'age',
        field: 'age',
        width: 200,
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
        // fixed: 'right',
        // width: 300,
      },
    ]

    return {
      data,
      fixedColumns,
    }
  },
})
</script>
