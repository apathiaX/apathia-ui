<template>
  <Table row-key="key" :sort="tableSort" :columns="sortColumns" :data="data" />
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    // 表示当前表格激活的排序
    // 点击事件中你需要对次进行修改
    const tableSort = reactive({
      prop: 'age',
      order: 'desc',
    })

    // const [tableUtils5] = createTable(sortColumns)

    // sortable: true 显示排序按钮
    // prop 表示以什么排序
    const sortColumns = [
      {
        title: '姓名',
        field: 'name',
      },
      {
        title: 'age',
        field: 'age',
        sortable: true,
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        width: 200,
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
        sortable: true,
        prop: 'phone',
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

    // const onTableSortChange = ({ prop, order }) => {
    //   // 修改sort。数据驱动视图
    //   tableSort.prop = prop
    //   tableSort.order = order

    //   // 这里可以是本地排序或者拉取接口，你需要自己对表格内容进行重新赋值
    //   tableUtils5.setData(
    //     cloneDeep(
    //       data.value.sort(
    //         (v1, v2) => (v1[prop] - v2[prop]) * (order === 'asc' ? 1 : -1),
    //       ),
    //     ),
    //   )
    // }

    return {
      data,
      tableSort,
      sortColumns,
      //   onTableSortChange,
    }
  },
})
</script>
