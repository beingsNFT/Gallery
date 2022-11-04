import * as React from "react"

const UserIcon = (props) => (
  <svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.028 10.23a5.728 5.728 0 1 0-7.084 0 9.547 9.547 0 0 0-5.938 7.81.96.96 0 1 0 1.91.21 7.638 7.638 0 0 1 15.179 0 .955.955 0 0 0 .954.85h.105a.955.955 0 0 0 .84-1.051 9.547 9.547 0 0 0-5.966-7.819Zm-3.542-.678a3.819 3.819 0 1 1 0-7.637 3.819 3.819 0 0 1 0 7.637Z"
      fill={props.fill || "#BEBDEF"}

    />
  </svg>
)

export default UserIcon
