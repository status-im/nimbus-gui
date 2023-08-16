import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import './LandingPage.css'
import QuickStartBar from '../../components/General/QuickStartBar/QuickStartBar'
import Titles from '../../components/General/Titles'
import { Button as StatusButton } from '@status-im/components'
import NodeIcon from '../../components/Icons/NodeIcon'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import { XStack, YStack } from 'tamagui'

function LandingPage() {
  return (
    <>
      <PageWrapperShadow rightImageSrc="/background-images/landing-page-bg.png">
        <div className="landing-page">
          <XStack>
            <NimbusLogo />
          </XStack>
          <YStack>
            <Titles
              title="Light and performant clients, for all Ethereum validators."
              subtitle="Nimbus Nodes allows you to take control and ownership of the services you wish to run in a completely trustless and decentralized manner."
            />
            <XStack>
              <StatusButton icon={<NodeIcon />}>Get Started</StatusButton>
            </XStack>
          </YStack>
        </div>
      </PageWrapperShadow>
      <QuickStartBar />
    </>
  )
}

export default LandingPage
