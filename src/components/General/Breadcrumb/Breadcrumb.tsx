import { XStack } from 'tamagui'
import BreadcrumbElement from './BreadcrumbElement'
const CustomPropsBreadcrumb = ({ someProp }: any) => <span>{someProp}</span>

const routes = [
  {
    path: PATHS.LANDING,
  },
  {
    path: PATHS.DEVICE_HEALTH_CHECK_ONBOARDING,
  },
  {
    path: PATHS.DEVICE_HEALTH_CHECK,
  },
  {
    path: PATHS.DEVICE_SYNC_STATUS,
  },
  {
    path: PATHS.PAIR_DEVICE,
  },
  { path: PATHS.CREATE_LOCAL_NODE },
  {
    path: PATHS.VALIDATOR_ONBOARDING,
    children: [
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.OVERVIEW },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION,
      },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.RECOVERY_PHRASE,
      },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT },
      {
        path: VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION,
      },
    ],
  },
  { path: PATHS.DASHBOARD },
  { path: PATHS.LOGS },
  {
    path: PATHS.VALIDATOR_MANAGEMENT,
  },
  {
    path: `${PATHS.MANAGE_VALIDATOR}/:validatorName`,
    props: { someProp: ''},
    breadcrumb: CustomPropsBreadcrumb,
    children: [
      {
        path: MANAGE_VALIDATOR_SUB_PATHS.DEFAULT,
        breadcrumb: 'DynamicValidatorBreadcrumb 2',
      },
      { path: MANAGE_VALIDATOR_SUB_PATHS.EXIT },
      { path: MANAGE_VALIDATOR_SUB_PATHS.MIGRATE },
      { path: MANAGE_VALIDATOR_SUB_PATHS.DEPOSIT },
    ],
  },
]

const Breadcrumb = () => {

  return (
    <XStack space={'$2'} alignItems="center">
      {breadcrumbList.map((element, index) => (
        <BreadcrumbElement
          element={element}
          isLastElement={index === breadcrumbList.length - 1}
        />
      ))}
    </XStack>
  )
}

export default Breadcrumb
