import { FunctionComponent, SVGAttributes } from 'react'

interface JavaProps extends SVGAttributes<SVGElement> {}

export const Java: FunctionComponent<JavaProps> = ({ ...rest }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M13.0203 26.8297C7.77246 28.2959 16.2132 31.3247 22.8955 28.4619C21.8009 28.0364 21.0159 27.5456 21.0159 27.5456C18.0362 28.1088 16.654 28.1531 13.9491 27.8442C11.7168 27.5885 13.0203 26.8297 13.0203 26.8297ZM22.0954 23.9695C18.1459 24.7294 15.8646 24.7051 12.9752 24.407C10.7409 24.176 12.2035 23.0932 12.2035 23.0932C6.42386 25.0116 15.4211 27.1885 23.4989 24.8257C22.6403 24.5233 22.0954 23.9695 22.0954 23.9695ZM25.1904 7.40607C25.1907 7.40607 13.5062 10.3234 19.0865 16.7541C20.7337 18.6504 18.6544 20.3552 18.6544 20.3552C18.6544 20.3552 22.835 18.1976 20.9155 15.4944C19.122 12.9746 17.7472 11.7228 25.1904 7.40607ZM27.9243 29.5939C27.9243 29.5939 28.8892 30.3896 26.8611 31.0045C23.0051 32.1727 10.8087 32.5249 7.42109 31.0513C6.20429 30.5214 8.48722 29.7867 9.20554 29.6316C9.95449 29.4695 10.3821 29.499 10.3821 29.499C9.02808 28.5455 1.62859 31.372 6.62456 32.1828C20.2475 34.3911 31.4573 31.1883 27.9243 29.5939ZM23.2422 21.2997C23.8971 20.8529 24.8016 20.4649 24.8016 20.4649C24.8016 20.4649 22.2247 20.9256 19.6574 21.1414C16.5145 21.405 13.1433 21.4569 11.451 21.2305C7.4446 20.6949 13.6475 19.2213 13.6475 19.2213C13.6475 19.2213 11.238 19.0583 8.27613 20.4911C4.77285 22.1851 16.9416 22.9573 23.2422 21.2997ZM24.7759 25.4409C24.7464 25.5202 24.6479 25.6094 24.6479 25.6094C33.1991 23.3614 30.0552 17.6854 25.9664 19.122C25.6077 19.2489 25.4196 19.544 25.4196 19.544C25.4196 19.544 25.6462 19.4526 26.1518 19.3471C28.2187 18.9164 31.1801 22.114 24.7759 25.4409ZM17.5495 19.1595C16.2878 16.3078 12.0096 13.813 17.5514 9.43634C24.4614 3.98208 20.9158 0.43396 20.9158 0.43396C22.3459 6.06896 15.8706 7.77111 13.5332 11.2804C11.9416 13.6716 14.3144 16.2411 17.5495 19.1595ZM25.0072 33.3094C19.7608 34.297 13.2893 34.1819 9.45218 33.5483C9.45218 33.5483 10.238 34.1991 14.2773 34.4592C20.423 34.8521 29.8632 34.2404 30.0863 31.3321C30.0866 31.3321 29.657 32.4346 25.0072 33.3094Z" />
    </svg>
  )
}