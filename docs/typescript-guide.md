---
id: typescript-guide
title: DocusaurusでのTypeScript活用ガイド
sidebar_position: 10
---

# DocusaurusでTypeScriptを使う

DocusaurusはTypeScriptを完全サポートしています。以下の場所でTypeScriptが活用できます。

## 1. カスタムページ（`/src/pages`）

```typescript
// src/pages/hello.tsx
import React from 'react';
import Layout from '@theme/Layout';
import styles from './hello.module.css';

interface HelloProps {
  name?: string;
}

export default function Hello({ name = 'World' }: HelloProps): JSX.Element {
  return (
    <Layout title="Hello" description="Hello React Page">
      <main className={styles.main}>
        <h1>Hello {name}!</h1>
      </main>
    </Layout>
  );
}
```

## 2. Reactコンポーネント（`/src/components`）

```typescript
// src/components/FeatureCard.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './FeatureCard.module.css';

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps): JSX.Element {
  const { title, description, icon: Icon } = feature;
  
  return (
    <div className={clsx('card', styles.featureCard, className)}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

## 3. 設定ファイル（`docusaurus.config.ts`）

すでにTypeScriptで記述されています：

```typescript
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ドキュメント管理システム',
  // 型安全な設定
};

export default config;
```

## 4. プラグイン開発

カスタムプラグインを作成する場合：

```typescript
// src/plugins/myPlugin.ts
import type {LoadContext, Plugin} from '@docusaurus/types';

export default function myPlugin(
  context: LoadContext,
  options: {customOption?: string}
): Plugin {
  return {
    name: 'my-custom-plugin',
    
    async loadContent() {
      // コンテンツのロード処理
      return {};
    },
    
    async contentLoaded({content, actions}) {
      // コンテンツの処理
    }
  };
}
```

## TypeScriptを使うメリット

### 1. 型安全性
- プロパティの型ミスを防げる
- リファクタリング時の安全性
- IDEの自動補完が効く

### 2. 開発体験の向上
```typescript
// 自動補完が効く例
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MyComponent() {
  const {siteConfig} = useDocusaurusContext();
  // siteConfig. と入力すると、利用可能なプロパティが表示される
}
```

### 3. ドキュメントとしてのコード
型定義自体がドキュメントとして機能：

```typescript
interface BlogPost {
  id: string;
  title: string;
  date: Date;
  tags: string[];
  author: {
    name: string;
    url?: string;
    imageUrl?: string;
  };
}
```

### 4. エラーの早期発見
ビルド前に型エラーを検出：

```bash
# 型チェックコマンド
bun run type-check
```

## TypeScript設定

`tsconfig.json`はDocusaurusが自動的に適切な設定を提供します：

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "strict": true,
    "resolveJsonModule": true
  }
}
```

## 実践的な使用例

### カスタムフックの作成

```typescript
// src/hooks/useLocalStorage.ts
import {useState, useEffect} from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

### 型定義ファイルの活用

```typescript
// src/types/index.d.ts
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: string;
  export default value;
}
```

## まとめ

DocusaurusでTypeScriptを使用することで：
- より堅牢なコードベース
- 優れた開発体験
- メンテナンスの容易さ
- チーム開発での生産性向上

これらの利点を得ることができます。