import { Tooltip } from '@mui/joy';
import Image from 'next/image';
import React, { useState } from 'react';

type CopyTooltipProps = {
  copyText: string;
  imgSrc: string;
  alt: string;
};

const CopyTooltip = ({ copyText, imgSrc, alt }: CopyTooltipProps) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleContentCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy: ', error);
      setCopiedToClipboard(false);
    }
  };

  const handleButtonClick = (content: string) => {
    handleContentCopy(content);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const tooltipConditionalTitle = copiedToClipboard
    ? 'Copied!'
    : 'Copy to clipboard!';
  const tooltipConditionalColor = copiedToClipboard ? 'success' : 'neutral';

  return (
    <Tooltip
      title={tooltipConditionalTitle}
      color={tooltipConditionalColor}
      variant='soft'
      size='lg'
    >
      <button
        onMouseLeave={() => setCopiedToClipboard(false)}
        onClick={() => handleButtonClick(copyText)}
        aria-label={`Copy ${alt}`}
        data-testid='copy-btn'
      >
        <Image
          className='invertable-icon'
          width={30}
          height={30}
          src={imgSrc}
          alt={alt}
        />
      </button>
    </Tooltip>
  );
};

export default CopyTooltip;
