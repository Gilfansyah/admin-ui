const IconWrapper = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const OverviewIcon = () => (
  <IconWrapper>
    <path
      d="M21 14H14V21H21V14Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 3H3V10H10V3Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const BalanceIcon = () => (
  <IconWrapper>
    <path
      d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const TransactionIcon = () => (
  <IconWrapper>
    <path
      d="M17 11L21 7L17 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 7H9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 21L3 17L7 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 17H3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const LogoutIcon = () => (
<IconWrapper>
<path 
 d="M54.3335 28.1663L58.5002 23.9997L54.3335 19.833" 
 stroke="white" 
 stroke-width="2" 
 stroke-linecap="round" 
 stroke-linejoin="round"
/>

<path 
 d="M58.5 24H48.5" 
 stroke="white" 
 stroke-width="2" 
 stroke-linecap="round" 
 stroke-linejoin="round"
/>

<path 
 d="M58.5 16.5H61.8333C62.2754 16.5 62.6993 16.6756 63.0118 16.9882C63.3244 17.3007 63.5 17.7246 63.5 18.1667V29.8333C63.5 30.2754 63.3244 30.6993 63.0118 31.0118C62.6993 31.3244 62.2754 31.5 61.8333 31.5H58.5" 
 stroke="white" 
 stroke-width="2" 
 stroke-linecap="round" 
 stroke-linejoin="round"
/>
</IconWrapper>
);

const KebabMenuIcon = () => (
  <IconWrapper>
  <circle cx="2" cy="2" r="2" fill="cureentColor" />
  <circle cx="2" cy="10" r="2" fill="cureentColor" />
  <circle cx="2" cy="18" r="2" fill="cureentColor" />
  </IconWrapper>
  );

export const Icon = {
  Overview: OverviewIcon,
  Balance: BalanceIcon,
  Transaction: TransactionIcon,
  Logout: LogoutIcon,
  KebabMenu: KebabMenuIcon,
};
