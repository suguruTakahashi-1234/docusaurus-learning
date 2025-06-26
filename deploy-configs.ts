// デプロイ環境設定の定義
export type DeployEnvironment = 'github-pages' | 'vercel' | 'netlify' | 'cloudflare';

export interface DeployConfig {
  url: string;
  baseUrl: string;
  // 必要に応じて他の設定を追加
  trailingSlash?: boolean;
}

// 各デプロイ環境の設定
export const deployConfigs: Record<DeployEnvironment, DeployConfig> = {
  'github-pages': {
    url: 'https://sugurutakahashi.github.io',
    baseUrl: '/docusaurus-learning/',
    trailingSlash: false,
  },
  'vercel': {
    url: 'https://docusaurus-learning.vercel.app',
    baseUrl: '/',
    trailingSlash: false,
  },
  'netlify': {
    url: 'https://docusaurus-learning.netlify.app',
    baseUrl: '/',
    trailingSlash: false,
  },
  'cloudflare': {
    url: 'https://docusaurus-learning.pages.dev',
    baseUrl: '/',
    trailingSlash: false,
  },
};

// 現在の環境を判定
export function getCurrentEnvironment(): DeployEnvironment {
  // 環境変数で明示的に指定されている場合
  if (process.env.DEPLOY_ENV) {
    return process.env.DEPLOY_ENV as DeployEnvironment;
  }

  // 自動判定
  if (process.env.VERCEL) {
    return 'vercel';
  }
  if (process.env.NETLIFY) {
    return 'netlify';
  }
  if (process.env.CF_PAGES) {
    return 'cloudflare';
  }
  if (process.env.GITHUB_ACTIONS) {
    return 'github-pages';
  }

  // デフォルトはGitHub Pages
  return 'github-pages';
}

// 現在の環境の設定を取得
export function getDeployConfig(): DeployConfig {
  const env = getCurrentEnvironment();
  return deployConfigs[env];
}