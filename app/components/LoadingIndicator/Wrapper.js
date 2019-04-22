import styled from 'styled-components';
import prop from 'ramda/src/prop';

const Wrapper = styled.div`
  padding-top: ${prop('paddingTop')};
`;

export default Wrapper;
