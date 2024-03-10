import Text from '@/components/Text';
import Icon from '@/components/Icon';
import Flex from '@/components/Flex';

function LandingPage() {
  return (
    <Flex direction="column" gap="2x-big">
      <Text textType="display" as="p">
        Testing owo
      </Text>
      <Icon icon="home" />
    </Flex>
  );
}

export default LandingPage;
