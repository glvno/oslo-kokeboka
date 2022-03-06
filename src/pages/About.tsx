import { FC } from 'react';
import Page from '../ui/Page';
import styled from '@emotion/styled';
import Button from '../ui/form/Button';
import { useNavigate } from 'react-router-dom';
import Flex from '../ui/Flex';

interface BarProps {
  left: string;
  top: string;
  rotate: string;
  background: 'green' | 'salmon' | 'red' | 'blue' | 'paper' | 'purple' | 'ochre' | 'pink';
}

const Bar = styled.div<BarProps>`
  position: absolute;
  width: 6px;
  height: 112px;

  left: ${({ left }) => left};
  transform: rotate(${({ rotate }) => rotate}deg);
  top: ${({ top }) => top};
  background: var(--${({ background }) => background});
`;

const StyledDiv = styled.div`
  position: absolute;
  top: -160px;
  // left: 50px;
`;
const StyledAbout = styled(Flex)`
  padding-top: 350px;
`;
const About: FC = () => {
  const navigate = useNavigate();

  return (
    <Page title="About">
      <StyledDiv>
        <Bar left="220px" top="130px" background="green" rotate="3.62" />
        <Bar left="300px" top="175px" background="salmon" rotate="-134" />
        <Bar left="120px" top="175px" background="red" rotate="105.35" />
        <Bar left="131px" top="175px" background="blue" rotate="6" />
        <Bar left="140px" top="266px" background="purple" rotate="36" />
        <Bar left="58px" top="284px" background="paper" rotate="-20" />
        <Bar left="275px" top="280px" background="ochre" rotate="-60.22" />
        <Bar left="175px" top="350px" background="pink" rotate="83" />
      </StyledDiv>

      <StyledAbout direction="column" gap="30px">
        <p>
          Oslo is a small but vibrant, multicultural city, constantly changing, just like the food
          we eat. Culture is never stagnant and neither are our recipes. In order to move past the
          complex and ever excluding question of ‘what is Norwegian food.’ I am asking, 'what is
          Oslo’s food?’
        </p>
        <p>
          To find that answer, I want to know what is the recipe that you connect to most and what
          are the memories that meal brings forth?
        </p>
        <Button
          onClick={() => navigate('/your-recipe')}
          background="ochre"
          label="Submit your recipe!"
        />
      </StyledAbout>
    </Page>
  );
};

export default About;
