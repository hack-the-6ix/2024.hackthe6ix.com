import Container from '@/components/Container';
import PreviousProjects from './@previous_projects/page';
import Statistics from './@statistics/page';
import styles from './layout.module.scss';

function Why() {
  return (
    <Container innerProps={{ className: styles.content }} as="section">
      <Statistics></Statistics>
      <PreviousProjects></PreviousProjects>
    </Container>
  );
}

export default Why;
