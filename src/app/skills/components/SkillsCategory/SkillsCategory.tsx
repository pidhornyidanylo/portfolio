'use client';
import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Typography,
} from '@mui/joy';
import {
  accordionGroupStyles,
  accordionStyles,
  typographyStyles,
} from './SkillsCategoryStyles';
import SkillItem, { SkillItemProps } from '../SkillItem/SkillItem';

type SkillsProps = {
  skillset: SkillItemProps[];
  title: string;
  icon: string;
};

const SkillsCategory: React.FC<SkillsProps> = ({
  skillset,
  title,
  icon,
}: SkillsProps) => {
  return (
    <AccordionGroup
      disableDivider
      transition='0.35s'
      sx={(theme) => accordionGroupStyles(theme)}
    >
      <Accordion>
        <AccordionSummary sx={accordionStyles}>
          <Image src={icon} alt={title} width={30} height={30} />
          <Typography sx={typographyStyles}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {skillset.map((skillItem) => (
            <SkillItem key={skillItem.title} skillItem={skillItem} />
          ))}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};

export default SkillsCategory;
