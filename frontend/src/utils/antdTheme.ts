import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#c9a962',
    colorPrimaryHover: '#e5d4a8',
    colorPrimaryActive: '#a68b4a',
    fontFamily: '"Outfit", system-ui, sans-serif',
    fontFamilyCode: '"Outfit", monospace',
    borderRadius: 12,
    colorText: '#3d3632',
    colorTextSecondary: '#5c534a',
  },
  components: {
    Button: {
      primaryShadow: '0 4px 14px rgba(201, 169, 98, 0.4)',
      fontWeight: 500,
    },
    Card: {
      borderRadiusLG: 16,
    },
    Input: {
      borderRadius: 10,
    },
  },
};
