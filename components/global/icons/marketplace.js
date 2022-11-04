import * as React from "react";

const MarketplaceIcon = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.625 7.343 19.25 3.218a.687.687 0 0 0-.687-.467H3.438a.688.688 0 0 0-.688.467L1.375 7.343a.819.819 0 0 0 0 .22v4.125a.688.688 0 0 0 .688.688h.687v6.875h1.375v-6.875H8.25v6.875h11v-6.875h.688a.687.687 0 0 0 .687-.688V7.563a.819.819 0 0 0 0-.22Zm-2.75 10.533h-8.25v-5.5h8.25v5.5ZM19.25 11H16.5V8.25h-1.375V11h-3.437V8.25h-1.375V11H6.875V8.25H5.5V11H2.75V7.673l1.183-3.547h14.135l1.182 3.547v3.328Z"
      fill={props.fill || "#BEBDEF"}
    />
  </svg>
);

export default MarketplaceIcon;
