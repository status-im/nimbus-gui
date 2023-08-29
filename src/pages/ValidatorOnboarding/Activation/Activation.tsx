import React, { useState, useEffect } from 'react';
import { XStack, Stack, YStack } from 'tamagui';
import { Text } from '@status-im/components';
import Confetti from 'react-confetti';

const Activation = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);  // Hide after 5 seconds

    return () => {
      clearTimeout(timer);  // Clear the timer if the component is unmounted
    };
  }, []);  // The empty dependency array means this effect will only run once, similar to `componentDidMount`

  return (
    <Stack>
      {showConfetti && <Confetti width={1000} height={800} />}
      <YStack style={{ width: '100%', padding: '16px 32px' }}>
        <XStack justifyContent={'space-between'} style={{ marginBottom: '10px' }}>
          <Text size={27} weight={'semibold'}>
            Validator Setup
          </Text>
        </XStack>
      </YStack>
    </Stack>
  )
}

export default Activation;
