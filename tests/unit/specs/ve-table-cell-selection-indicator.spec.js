import { mount } from '@vue/test-utils'
import veTable from '@P/fan-table/fan-table'
import { later } from '../util'
import { KEY_CODES } from '../constant'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('veTable cell selection', () => {
  const TABLE_DATA = [
    {
      name: 'John',
      date: '1900-05-20',
      hobby: 'coding',
      address: 'No.1 Century Avenue, Shanghai',
      rowKey: '1',
    },
    {
      name: 'Dickerson',
      date: '1910-06-20',
      hobby: 'coding',
      address: 'No.1 Century Avenue, Beijing',
      rowKey: '2',
    },
    {
      name: 'Larsen',
      date: '2000-07-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Chongqing',
      rowKey: '3',
    },
    {
      name: 'Geneva',
      date: '2010-08-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Xiamen',
      rowKey: '4',
    },
    {
      name: 'Jami',
      date: '2020-09-20',
      hobby: 'coding and coding repeat',
      address: 'No.1 Century Avenue, Shenzhen',
      rowKey: '5',
    },
  ]

  const COLUMNS = [
    {
      field: 'index',
      key: 'index',
      operationColumn: true,
      title: '#',
      width: 50,
      align: 'center',
      renderBodyCell: ({ row, column, rowIndex }, h) => {
        return ++rowIndex
      },
      edit: true,
    },
    {
      field: 'name',
      key: 'a',
      title: 'Name',
      align: 'left',
      width: '20%',
    },
    {
      field: 'date',
      key: 'b',
      title: 'Date',
      align: 'left',
      width: '20%',
    },
    {
      field: 'hobby',
      key: 'c',
      title: 'Hobby',
      align: 'center',
      width: '30%',
    },
    { field: 'address', key: 'd', title: 'Address', width: '30%' },
  ]

  it('single cell selection indicator', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.vm.setCellSelection({ rowKey: '2', colKey: 'a' })

    await later()

    const th = wrapper
      .findAll('.fan-table-header-tr')[0]
      .findAll('.fan-table-header-th')[1]

    expect(th.classes()).toContain('fan-table-cell-indicator')

    const td = wrapper
      .find("tr[row-key='2']")
      .findAll('.fan-table-body-td')[0]
    expect(td.classes()).toContain('fan-table-cell-indicator')
  })

  it('range cell selection header indicator', async () => {
    const wrapper = mount(veTable, {
      props: {
        columns: COLUMNS,
        tableData: TABLE_DATA,
        rowKeyFieldName: 'rowKey',
      },
    })

    wrapper.vm.setRangeCellSelection({
      startRowKey: '2',
      startColKey: 'a',
      endRowKey: '5',
      endColKey: 'c',
      isScrollToStartCell: true,
    })

    await later()

    expect(
      wrapper.findAll(
        '.fan-table-header .fan-table-header-th.fan-table-cell-indicator',
      ).length,
    ).toEqual(3)

    expect(
      wrapper.findAll(
        '.fan-table-body .fan-table-body-td.fan-table-cell-indicator',
      ).length,
    ).toEqual(4)
  })
})
