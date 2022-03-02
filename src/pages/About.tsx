import { FC } from 'react';
import Page from '../ui/Page';
import styled from '@emotion/styled';
import Button from '../ui/form/Button';
import { useNavigate } from 'react-router-dom';

const GreenBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 222.07px;
  top: 130px;

  /* GREEN */

  background: #40993e;
  transform: rotate(3.62deg);
`;

const SalmonBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 300.23px;
  top: 175.27px;

  /* SALMON */

  background: #ff8585;
  transform: rotate(-134.87deg);
`;

const RedBar = styled.div`
  /* Rectangle 47 */

  position: absolute;
  width: 6px;
  height: 112px;
  left: 120px;
  top: 175px;

  /* RED */

  background: #d04c4c;
  transform: rotate(105.35deg);
`;

const BlueBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 131.7px;
  top: 175px;

  /* BLUE */

  background: #6594f0;
  transform: rotate(6deg);
`;
const WhiteBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 58px;
  top: 284.06px;

  /* PAPER */

  background: #e9dfd6;
  transform: rotate(-20.13deg);
`;
const PurpleBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 140.53px;
  top: 266px;

  /* PURPLE */

  background: #785997;
  transform: rotate(35.81deg);
`;
const PaperBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 58px;
  top: 284.06px;

  /* PAPER */

  background: #e9dfd6;
  transform: rotate(-20.13deg);
`;
const OchreBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 275px;
  top: 280.21px;

  /* OCHRE */

  background: #f5bf57;
  transform: rotate(-60.22deg);
`;
const PinkBar = styled.div`
  position: absolute;
  width: 6px;
  height: 112px;
  left: 175.15px;
  top: 350px;

  /* PINK */

  background: #ebbfcf;
  transform: rotate(82.96deg);
`;

const StyledDiv = styled.div`
  position: absolute;
  top: -160px;
  left: 0px;
`;
const StyledAbout = styled.main`
  padding-top: 350px;
`;
const About: FC = () => {
  const navigate = useNavigate();

  return (
    <Page title="About">
      <StyledDiv>
        <GreenBar />
        <SalmonBar />
        <RedBar />
        <BlueBar />
        <WhiteBar />
        <PurpleBar />
        <PaperBar />
        <OchreBar />
        <PinkBar />
      </StyledDiv>

      <StyledAbout>
        Oslo is a small but vibrant, multicultural city, constantly changing, just like the food we
        eat. Culture is never stagnant and neither are our recipes. In order to move past the
        complex and ever excluding question of ‘what is Norwegian food.’ I am asking, 'what is
        Oslo’s food?’
        <br />
        <br />
        To find that answer, I want to know what is the recipe that you connect to most and what are
        the memories that meal brings forth?
        <br />
        <br />
        <br />
        <Button
          onClick={() => navigate('/your-recipe')}
          style="ochre"
          label="Submit your recipe!"
        />
      </StyledAbout>
      <br />
    </Page>
  );
};

export default About;
