import { Text } from '@status-im/components'
import { RootState } from '../../../../redux/store'
import { useSelector } from 'react-redux'
import { MANAGE_VALIDATOR_TABS_TABLE_DATA } from '../../../../constants'

const ValidatorTableRow = () => {
  const currentTab = useSelector(
    (state: RootState) => state.manageValidatorTab.currentTab,
  )
  if (MANAGE_VALIDATOR_TABS_TABLE_DATA[currentTab].rows === undefined)
    return <>no rows</>

  return (
    <tr>
      {MANAGE_VALIDATOR_TABS_TABLE_DATA[currentTab]?.rows?.map(
        ([row, textColor], index) => (
          <td key={index}>
            <Text size={15} color={textColor || '#647084'} weight={'semibold'}>
              {row}
            </Text>
          </td>
        ),
      )}
    </tr>
  )
}

export default ValidatorTableRow
