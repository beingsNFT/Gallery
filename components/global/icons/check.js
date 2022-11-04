import * as React from "react"

const CheckIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
  <path
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10ZM8.843 15.295l7.42-7.42a.645.645 0 0 0 0-.912l-.913-.912a.645.645 0 0 0-.912 0l-6.05 6.05-2.826-2.824a.645.645 0 0 0-.912 0l-.913.912a.645.645 0 0 0 0 .912l4.194 4.194c.252.252.66.252.912 0Z"
 
      fill={props.fill || "#6A87FF"}
    />
  </svg>
)

export default CheckIcon
