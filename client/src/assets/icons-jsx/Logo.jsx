import React from "react";

export const Logo = ({ height, width, color1, color2 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 158 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.05664 30V28.2738L3.8926 27.5956V10.8264L1.05664 10.1483V8.42205H11.7531V10.1483L8.91718 10.8264V17.9163H16.5928V10.8264L13.7568 10.1483V8.42205H24.4533V10.1483L21.6173 10.8264V27.5956L24.4533 28.2738V30H13.7568V28.2738L16.5928 27.5956V20.2899H8.91718V27.5956L11.7531 28.2738V30H1.05664ZM26.2508 26.1776C26.2508 24.3897 26.9804 23.0334 28.4394 22.1086C29.9191 21.1633 32.3029 20.6907 35.591 20.6907V19.7659C35.591 19.1494 35.5807 18.7075 35.5602 18.4404C35.5602 18.1527 35.5191 17.8136 35.4369 17.4231C35.3547 17.0327 35.2314 16.7552 35.067 16.5908C34.9231 16.4264 34.6971 16.2826 34.3888 16.1593C34.0805 16.0154 33.7004 15.9435 33.2482 15.9435L29.3334 19.3343C27.936 18.5329 27.2372 17.2896 27.2372 15.6044L28.162 15.2037C28.5525 15.0393 29.3128 14.8235 30.4431 14.5564C31.5734 14.2686 32.6728 14.1248 33.7415 14.1248C38.1598 14.1248 40.369 15.8921 40.369 19.4268V27.6881H42.7734V29.0136C42.6706 29.1163 42.5268 29.2499 42.3418 29.4143C42.1569 29.5787 41.7561 29.7945 41.1396 30.0617C40.5231 30.3288 39.886 30.4624 39.2284 30.4624C37.6666 30.4624 36.5055 29.9383 35.7451 28.8903C34.3682 29.9383 32.8681 30.4624 31.2446 30.4624C29.8266 30.4624 28.6347 30.1028 27.6688 29.3835C26.7235 28.6642 26.2508 27.5956 26.2508 26.1776ZM31.2138 25.9002C31.2138 26.4962 31.409 26.9688 31.7994 27.3182C32.2105 27.6675 32.7037 27.8422 33.2791 27.8422C34.2038 27.8422 34.9745 27.5031 35.591 26.825V22.6018C34.4402 22.6018 33.4229 22.9101 32.5393 23.5266C31.6556 24.1226 31.2138 24.9138 31.2138 25.9002ZM42.4225 16.2209V14.5872H51.7318V16.2209L49.5432 16.7758L52.0709 23.5574L55.0918 14.5872H58.236L61.4111 23.4341L63.6922 16.7758L61.2261 16.2209V14.5872H68.2236V16.2209L65.7267 16.8991L61.2878 30.2158H58.7601L55.246 20.3824L51.9476 30.2158H49.4199L44.4878 16.7758L42.4225 16.2209ZM68.335 26.1776C68.335 24.3897 69.0646 23.0334 70.5237 22.1086C72.0033 21.1633 74.3871 20.6907 77.6752 20.6907V19.7659C77.6752 19.1494 77.6649 18.7075 77.6444 18.4404C77.6444 18.1527 77.6033 17.8136 77.5211 17.4231C77.4389 17.0327 77.3156 16.7552 77.1512 16.5908C77.0073 16.4264 76.7813 16.2826 76.473 16.1593C76.1648 16.0154 75.7846 15.9435 75.3325 15.9435L71.4176 19.3343C70.0202 18.5329 69.3215 17.2896 69.3215 15.6044L70.2462 15.2037C70.6367 15.0393 71.3971 14.8235 72.5273 14.5564C73.6576 14.2686 74.7571 14.1248 75.8257 14.1248C80.244 14.1248 82.4532 15.8921 82.4532 19.4268V27.6881H84.8576V29.0136C84.7548 29.1163 84.611 29.2499 84.426 29.4143C84.2411 29.5787 83.8403 29.7945 83.2238 30.0617C82.6073 30.3288 81.9703 30.4624 81.3126 30.4624C79.7508 30.4624 78.5897 29.9383 77.8293 28.8903C76.4525 29.9383 74.9523 30.4624 73.3288 30.4624C71.9108 30.4624 70.7189 30.1028 69.753 29.3835C68.8077 28.6642 68.335 27.5956 68.335 26.1776ZM73.298 25.9002C73.298 26.4962 73.4932 26.9688 73.8837 27.3182C74.2947 27.6675 74.7879 27.8422 75.3633 27.8422C76.2881 27.8422 77.0587 27.5031 77.6752 26.825V22.6018C76.5244 22.6018 75.5071 22.9101 74.6235 23.5266C73.7398 24.1226 73.298 24.9138 73.298 25.9002ZM86.3454 29.7534V25.3453H88.0716L89.1814 28.3971C89.9212 28.4382 90.5069 28.4587 90.9384 28.4587C93.3428 28.4587 94.545 27.9347 94.545 26.8866C94.545 26.4551 94.3293 26.0851 93.8977 25.7769C93.4661 25.4481 93.0551 25.1912 92.6647 25.0062C92.2742 24.8213 91.5344 24.4925 90.4452 24.0198C89.0272 23.4033 87.9894 22.7046 87.3318 21.9237C86.6948 21.1222 86.3762 20.0947 86.3762 18.8411C86.3762 17.2998 86.9928 16.1285 88.2258 15.327C89.4794 14.5255 91.1131 14.1248 93.1271 14.1248C94.956 14.1248 96.5281 14.32 97.8434 14.7105V18.9028H96.2404L95.2848 16.1901C94.6683 16.0874 94.0518 16.036 93.4353 16.036C91.4625 16.036 90.476 16.5189 90.476 17.4848C90.476 17.7314 90.5685 17.9883 90.7535 18.2554C90.9384 18.5226 91.2672 18.7897 91.7399 19.0569C92.2331 19.3241 93.0038 19.6837 94.0518 20.1358C95.9219 20.9784 97.1858 21.8004 97.8434 22.6018C98.501 23.3828 98.8298 24.4411 98.8298 25.7769C98.8298 27.2976 98.203 28.4587 96.9494 29.2602C95.6959 30.0617 94.0313 30.4624 91.9557 30.4624C90.0034 30.4624 88.1333 30.2261 86.3454 29.7534ZM101.186 29.7534V25.3453H102.913L104.022 28.3971C104.762 28.4382 105.348 28.4587 105.779 28.4587C108.184 28.4587 109.386 27.9347 109.386 26.8866C109.386 26.4551 109.17 26.0851 108.739 25.7769C108.307 25.4481 107.896 25.1912 107.506 25.0062C107.115 24.8213 106.375 24.4925 105.286 24.0198C103.868 23.4033 102.83 22.7046 102.173 21.9237C101.536 21.1222 101.217 20.0947 101.217 18.8411C101.217 17.2998 101.834 16.1285 103.067 15.327C104.32 14.5255 105.954 14.1248 107.968 14.1248C109.797 14.1248 111.369 14.32 112.684 14.7105V18.9028H111.081L110.126 16.1901C109.509 16.0874 108.893 16.036 108.276 16.036C106.303 16.036 105.317 16.5189 105.317 17.4848C105.317 17.7314 105.409 17.9883 105.594 18.2554C105.779 18.5226 106.108 18.7897 106.581 19.0569C107.074 19.3241 107.845 19.6837 108.893 20.1358C110.763 20.9784 112.027 21.8004 112.684 22.6018C113.342 23.3828 113.671 24.4411 113.671 25.7769C113.671 27.2976 113.044 28.4587 111.79 29.2602C110.537 30.0617 108.872 30.4624 106.797 30.4624C104.844 30.4624 102.974 30.2261 101.186 29.7534Z"
        fill={color1}
      />
      <path
        d="M115.509 30V28.2738L118.345 27.5956V10.8264L115.509 10.1483V8.42205H124.757C128.497 8.42205 131.353 9.41875 133.326 11.4121C135.319 13.385 136.316 15.9846 136.316 19.211C136.316 22.6429 135.268 25.3042 133.172 27.1949C131.076 29.065 128.271 30 124.757 30H115.509ZM123.369 27.6264H124.294C126.534 27.6264 128.24 26.8969 129.411 25.4378C130.603 23.9787 131.199 21.9031 131.199 19.211C131.199 16.4984 130.603 14.4228 129.411 12.9842C128.24 11.5252 126.534 10.7956 124.294 10.7956H123.369V27.6264ZM138.785 30V28.0888L149.882 10.7956H142.145L140.82 15.2037H139.063V8.42205H156.263V10.3332L145.197 27.6264H153.119L155.277 23.3417H156.972L156.078 30H138.785Z"
        fill={color2}
      />
      <g clip-path="url(#clip0_1_3)">
        <path
          d="M31.2965 41.2114C36.7331 48.9929 60.3864 56.7384 76.2961 56.2523C93.4928 55.7658 102.91 52.3632 121.244 39.851C121.191 41.221 121.029 42.3358 121.055 43.3528C121.036 44.5131 121.028 45.7397 121.274 46.858C121.326 47.19 122.016 47.693 122.423 47.6964C122.83 47.6998 123.417 47.13 123.496 46.777C124.179 43.401 124.73 40.0459 125.336 36.6139C125.497 35.499 124.974 34.7653 123.798 34.6118C119.335 34.2319 114.861 33.7857 110.342 33.4828C109.319 33.4411 108.172 33.8957 106.85 34.1057C108.361 36.7928 110.687 36.0828 112.521 36.5401C114.432 37.0534 116.422 37.2137 118.861 37.6429C113.968 42.2327 108.787 45.4386 103.139 47.8339C82.4642 56.7016 61.9249 55.3367 41.7024 46.1609C39.0705 44.9454 36.5947 43.4328 34.0183 42.1403C33.2388 41.9239 32.5253 41.6969 31.2965 41.2114Z"
          fill={color2}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect
            width="93.7094"
            height="22.758"
            fill="white"
            transform="matrix(0.987606 -0.156951 -0.156951 -0.987606 34.8678 63.6874)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
