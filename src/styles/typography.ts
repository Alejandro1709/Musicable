export const fonts = {
  primary: `'Source Sans Pro', sans-serif`,
};

export const typography = {
  regular: {
    caption: `
      font-size: 14px;
      line-height: 16.5px;
      `,
    s: `
      font-size: 16px;
      line-height: 20px;
      `,
    m: `
      font-size: 18px;
      line-height: 23px;
      `,
    l: `
      font-size: 22px;
      line-height: 28rpx;
      `,
    xl: `
      font-size: 28px;
      line-height: 35rpx;
      `,
  },
  semibold: {
    caption: `
      font-size: 14px;
      line-height: 16.5px;
      `,
    s: `
      font-size: 16px;
      line-height: 20px;
      `,
    m: `
      font-size: 18px;
      line-height: 23px;
      `,
    l: `
      font-size: 22px;
      line-height: 28rpx;
      `,
    xl: `
      font-size: 28px;
      line-height: 35rpx;
      `,
  },
};

for (const size in typography.regular) {
  typography.regular[size] += `
    font-family: ${fonts.primary};
    font-weight: 400;
    `;
}

for (const size in typography.semibold) {
  typography.semibold[size] += `
    font-family: ${fonts.primary};
    font-weight: 600;
    `;
}
