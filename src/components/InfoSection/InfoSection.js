import React from "react";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrapper,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  lightText,
  buttonLabel,
  description,
  description2,
  headline,
  topLine,
  primary,
  img,
  alt,
  start,
  link,
  target,
  rel,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description} <br /> <br />
                  {description2}
                </Subtitle>
                <a href={link} target={target} rel={rel}>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
