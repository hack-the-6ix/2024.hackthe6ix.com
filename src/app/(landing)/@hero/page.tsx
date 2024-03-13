import Container from '@/components/Container';
import Flex from '@/components/Flex';
import IconButton from '@/components/IconButton';
import Text from '@/components/Text';
import config from '@/config';

function Hero() {
  const range = new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).formatRange(config.startAt, config.endAt);
  return (
    <Container innerProps={{ as: Flex, direction: 'column ' }}>
      <Text>{range.replace('–', ' – ')} • In-person event</Text>
    </Container>
  );
}

export default Hero;
