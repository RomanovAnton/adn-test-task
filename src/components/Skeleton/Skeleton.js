import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={217}
    height={328}
    viewBox="0 0 217 328"
    backgroundColor="transparent"
    foregroundColor="#d8d5d5"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="217" height="328" />
  </ContentLoader>
);

// export const Skeleton = () => (
//   <ContentLoader
//     className="pizza-block"
//     speed={0.7}
//     width={280}
//     height={500}
//     viewBox="0 0 280 500"
//     backgroundColor="transparent"
//     foregroundColor="red"
//   >
//     <circle cx="134" cy="136" r="125" />
//     <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
//     <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
//     <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
//     <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
//   </ContentLoader>
// );
