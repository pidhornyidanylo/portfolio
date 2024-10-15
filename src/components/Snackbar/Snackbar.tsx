import * as React from 'react';
import { Snackbar as JoiSnackbar } from '@mui/joy';
import { keyframes } from '@mui/system';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

type SnackbarProps = {
  children: React.ReactNode;
  notification: string;
};

const Snackbar = ({ children, notification }: SnackbarProps) => {
  const [open, setOpen] = React.useState(false);

  const animationDuration = 300;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onClick={handleClick}>
      <>{children}</>
      <JoiSnackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={1500}
        animationDuration={animationDuration}
        sx={[
          {
            backgroundColor: '#5671A6',
            color: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
            fontSize: '1em',
            border: 'none',
          },
          open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
          },
          !open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
          },
        ]}
      >
        {notification}
      </JoiSnackbar>
    </div>
  );
};

export default Snackbar;
