import * as React from "react"

const HomeIcon = (props) => (
  <svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.323 18c-1.597 0-2.893-1.209-2.893-2.7V9.9h-.964c-.859 0-1.29-.97-.682-1.536l8.679-8.1a1.014 1.014 0 0 1 1.364 0l8.678 8.1c.608.567.177 1.536-.682 1.536h-.964v5.4c0 1.491-1.295 2.7-2.893 2.7H5.323Zm4.822-15.827L3.733 8.157c.366.128.626.457.626.843v6.3c0 .497.432.9.964.9h1.929v-3.6c0-.994.863-1.8 1.929-1.8h1.928c1.065 0 1.929.806 1.929 1.8v3.6h1.928c.533 0 .965-.403.965-.9V9c0-.386.26-.715.625-.843l-6.411-5.984Zm.964 10.427H9.181v3.6h1.928v-3.6Z"
      fill={props.fill || "#BEBDEF"}
    />
  </svg>
)

export default HomeIcon
