import React from 'react';
import Image from 'next/image';
import { Tabs, TabList, Tab, Stack, TabPanel } from '@mui/joy';
import {
  CertificationPanel,
  EducationPanel,
} from './QualificationPanel/QualificationPanel';
import { TABLIST_ITEMS, TABPANEL_ITEMS } from './TabsData';
import { tabListStyles, tabStyles } from './QualificationTabsStyles';

const QualificationTabs = () => {
  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: '100%', backgroundColor: 'transparent' }}
    >
      <Tabs aria-label='Flex auto tabs' sx={{ backgroundColor: 'transparent' }}>
        <TabList disableUnderline tabFlex='auto' sx={tabListStyles}>
          {TABLIST_ITEMS.map((item, index) => (
            <Tab key={index} disableIndicator sx={tabStyles}>
              <Image
                className='invertable-icon'
                width={30}
                height={30}
                src={item.icon}
                alt={`${item.title} icon`}
              />
              {item.title}
            </Tab>
          ))}
        </TabList>
        <TabPanel sx={{ padding: 0 }} value={0}>
          <CertificationPanel items={TABPANEL_ITEMS.certification} />
        </TabPanel>
        <TabPanel sx={{ padding: 0 }} value={1}>
          <EducationPanel items={TABPANEL_ITEMS.education} />
        </TabPanel>
      </Tabs>
    </Stack>
  );
};

export default QualificationTabs;
