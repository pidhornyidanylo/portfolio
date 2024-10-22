export const tabStyles = {
  transition: 'font-weight .1s ease',
  justifyContent: 'flex-start',
  padding: 0,
  fontSize: '1.25em',
  textTransform: 'none',
  fontWeight: 'semi-bold',
  color: 'var(--secondary-gray)',
  borderBottom: 'none',
  borderRadius: '5px',
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  '&:hover': {
    backgroundColor: 'transparent !important',
  },
};

export const tabListStyles = {
  backgroundColor: 'transparent',
  gap: '20px',
  maxWidth: '400px',
  minWidth: '350px',
  marginBottom: '30px',
};
