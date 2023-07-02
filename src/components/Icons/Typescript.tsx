import { FunctionComponent, SVGAttributes } from 'react'

interface TypescriptProps extends SVGAttributes<SVGElement> {}

export const Typescript: FunctionComponent<TypescriptProps> = ({ ...rest }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M28.0583 4.375H6.94167C6.26094 4.375 5.6081 4.64542 5.12676 5.12676C4.64542 5.6081 4.375 6.26094 4.375 6.94167V28.0583C4.375 28.7391 4.64542 29.3919 5.12676 29.8732C5.6081 30.3546 6.26094 30.625 6.94167 30.625H28.0583C28.3954 30.625 28.7292 30.5586 29.0406 30.4296C29.352 30.3006 29.6349 30.1116 29.8732 29.8732C30.1116 29.6349 30.3006 29.352 30.4296 29.0406C30.5586 28.7292 30.625 28.3954 30.625 28.0583V6.94167C30.625 6.60461 30.5586 6.27085 30.4296 5.95945C30.3006 5.64804 30.1116 5.3651 29.8732 5.12676C29.6349 4.88842 29.352 4.69936 29.0406 4.57038C28.7292 4.44139 28.3954 4.375 28.0583 4.375ZM19.6 18.9583H16.3187V28.35H13.7083V18.9583H10.4271V16.8292H19.6V18.9583ZM28.0583 26.6583C27.8472 27.1072 27.507 27.483 27.0813 27.7375C26.6333 28.0132 26.1393 28.2059 25.6229 28.3063C25.0472 28.4251 24.4607 28.4838 23.8729 28.4813C23.2714 28.4807 22.6712 28.427 22.0792 28.3208C21.576 28.2178 21.0865 28.0563 20.6208 27.8396V25.3458L20.5333 25.2583H20.6208V25.3604C21.0595 25.7026 21.5524 25.9688 22.0792 26.1479C22.6052 26.3482 23.1643 26.4472 23.7271 26.4396C24.0212 26.4447 24.3148 26.4154 24.6021 26.3521C24.8178 26.3016 25.0245 26.218 25.2146 26.1042C25.3634 26.0134 25.4884 25.8884 25.5792 25.7396C25.669 25.5701 25.7084 25.3784 25.6929 25.1872C25.6774 24.996 25.6076 24.8132 25.4917 24.6604C25.3546 24.4682 25.1812 24.3047 24.9812 24.1792C24.7385 24.0085 24.4796 23.8619 24.2083 23.7417L23.2313 23.3333C22.4578 23.0148 21.7725 22.5146 21.2333 21.875C20.7821 21.3311 20.5438 20.6419 20.5625 19.9354C20.5455 19.3987 20.666 18.8666 20.9125 18.3896C21.1478 17.9738 21.4775 17.6191 21.875 17.3542C22.3179 17.0595 22.8128 16.8516 23.3333 16.7417C23.9024 16.6107 24.4848 16.5471 25.0688 16.5521C25.6005 16.5447 26.1319 16.5788 26.6583 16.6542C27.0963 16.7226 27.5262 16.835 27.9417 16.9896V19.3958C27.7497 19.259 27.5445 19.1418 27.3292 19.0458C27.0973 18.946 26.8585 18.8632 26.6146 18.7979C26.3809 18.7295 26.1418 18.6807 25.9 18.6521C25.6769 18.631 25.4523 18.631 25.2292 18.6521C24.9544 18.6475 24.6801 18.6769 24.4125 18.7396C24.193 18.7856 23.9816 18.8643 23.7854 18.9729C23.6323 19.0632 23.5024 19.188 23.4062 19.3375C23.319 19.4827 23.2735 19.6493 23.275 19.8188C23.2714 19.9996 23.3222 20.1775 23.4208 20.3292C23.5406 20.4948 23.6887 20.638 23.8583 20.7521C24.0639 20.9158 24.2893 21.053 24.5292 21.1604L25.4479 21.5688C25.8704 21.7434 26.2797 21.9481 26.6729 22.1813C27.0186 22.3705 27.3334 22.6114 27.6063 22.8958C27.8736 23.1549 28.0824 23.4682 28.2188 23.8146C28.3586 24.2127 28.4277 24.6322 28.4229 25.0542C28.4125 25.5988 28.2883 26.1353 28.0583 26.6292V26.6583Z" />
    </svg>
  )
}