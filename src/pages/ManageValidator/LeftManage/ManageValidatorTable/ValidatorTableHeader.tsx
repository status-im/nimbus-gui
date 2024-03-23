import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { MANAGE_VALIDATOR_TABS_TABLE_DATA } from '../../../../constants'

const ValidatorTableHeader = () => {
  const currentTab = useSelector(
    (state: RootState) => state.manageValidatorTab.currentTab,
  )
  if (MANAGE_VALIDATOR_TABS_TABLE_DATA[currentTab].headers === undefined)
    return <>no headers</>

  return (
    <thead>
      <tr>
        {MANAGE_VALIDATOR_TABS_TABLE_DATA[currentTab].headers?.map(
          (header, index) => (
            <th key={index}>
              <Text size={15} color={'#647084'}>
                {header}
              </Text>
            </th>
          ),
        )}
      </tr>
    </thead>
  )
}

export default ValidatorTableHeader
