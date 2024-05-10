import { XStack } from 'tamagui'
import useBreadcrumbs, { BreadcrumbsRoute } from 'use-react-router-breadcrumbs'
import {
  PATHS,
  VALIDATOR_ONBOARDING_SUB_PATHS,
  VALIDATOR_MANAGEMENT,
} from '../../../constants'
import BreadcrumbElement from './BreadcrumbElement'

const routes = [
  { path: PATHS.LANDING },
  { path: PATHS.DEVICE_HEALTH_CHECK_ONBOARDING },
  { path: PATHS.DEVICE_HEALTH_CHECK },
  { path: PATHS.DEVICE_SYNC_STATUS },
  { path: PATHS.PAIR_DEVICE },
  { path: PATHS.CREATE_LOCAL_NODE },
  {
    path: PATHS.VALIDATOR_ONBOARDING,
    children: [
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.OVERVIEW },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.ADVISORIES },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.VALIDATOR_SETUP_INSTALL },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.CONSENSUS_SELECTION },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION_VALIDATOR_SETUP },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.CLIENT_SETUP },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.KEY_GENERATION },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.RECOVERY_PHRASE },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.DEPOSIT },
      { path: VALIDATOR_ONBOARDING_SUB_PATHS.ACTIVATION },
    ],
  },
  { path: PATHS.DASHBOARD },
  { path: PATHS.LOGS },
  { path: PATHS.VALIDATOR_MANAGEMENT },
  {
    path: `${PATHS.VALIDATOR_MANAGEMENT}/:validatorName`,
    children: [
      {
        path: VALIDATOR_MANAGEMENT.DEFAULT,
        breadcrumb: 'Manage Validator',
      },
      { path: VALIDATOR_MANAGEMENT.EXIT, breadcrumb: 'Exit Validator' },
      {
        path: VALIDATOR_MANAGEMENT.MIGRATE,
        breadcrumb: 'Migrate Validator',
      },
      {
        path: VALIDATOR_MANAGEMENT.DEPOSIT,
      },
    ],
  },
]

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes as BreadcrumbsRoute<string>[])
  const slicedBreadcrumbs = breadcrumbs.slice(1)

  return (
    <XStack space={'$2'} alignItems="center">
      {slicedBreadcrumbs.map(({ match, breadcrumb }, index) => (
        <BreadcrumbElement
          key={index}
          match={match}
          breadcrumb={breadcrumb}
          isLastElement={index === slicedBreadcrumbs.length - 1}
        />
      ))}
    </XStack>
  )
}

export default Breadcrumb
