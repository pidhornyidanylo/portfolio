import { LinearProgress, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import React from 'react';
import {
  containerStyles,
  linearProgressStyles,
  typographyStyles,
} from './SkillItemStyles';

export type SkillItemProps = {
  title: string;
  progress: number;
  iconUrl: string;
};

const SkillItem = ({ skillItem }: { skillItem: SkillItemProps }) => {
  return (
    <Stack sx={containerStyles} key={skillItem.title}>
      <Image
        className='invertable-icon'
        src={skillItem.iconUrl}
        width={30}
        height={30}
        alt={skillItem.title}
      />
      <Stack sx={{ flex: 1 }}>
        <Typography sx={typographyStyles}>{skillItem.title}</Typography>
        <LinearProgress
          thickness={16}
          sx={linearProgressStyles}
          determinate
          value={skillItem.progress}
        />
      </Stack>
    </Stack>
  );
};

export default SkillItem;
