---
id: swizzle-guide
title: Docusaurus Swizzleガイド
sidebar_position: 11
---

# Swizzleとは？

**Swizzle（スウィズル）**は、Docusaurusのテーマコンポーネントをカスタマイズするための強力な機能です。デフォルトのテーマコンポーネントを自分のプロジェクトにコピーして、自由に編集できるようにします。

## Swizzleの仕組み

```bash
# 基本的な使い方
bun run swizzle @docusaurus/theme-classic [コンポーネント名]
```

## Swizzleのモード

### 1. **Eject（排出）**
コンポーネントの完全なソースコードをプロジェクトにコピーします。

```bash
# Navbarコンポーネントを完全にカスタマイズ
bun run swizzle @docusaurus/theme-classic Navbar --eject
```

結果：
```
src/theme/Navbar/
├── index.js
├── styles.module.css
└── その他の依存ファイル
```

### 2. **Wrap（ラップ）**
既存のコンポーネントをラップして、前後に独自の処理を追加します。

```bash
# BlogPostItemをラップ
bun run swizzle @docusaurus/theme-classic BlogPostItem --wrap
```

結果：
```typescript
// src/theme/BlogPostItem/index.tsx
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <div>カスタムヘッダー</div>
      <BlogPostItem {...props} />
      <div>カスタムフッター</div>
    </>
  );
}
```

## よくSwizzleされるコンポーネント

### 1. **Navbar（ナビゲーションバー）**
```bash
bun run swizzle @docusaurus/theme-classic Navbar --eject
```
用途：
- カスタムロゴの追加
- 独自のナビゲーション項目
- 検索バーのカスタマイズ

### 2. **Footer（フッター）**
```bash
bun run swizzle @docusaurus/theme-classic Footer --eject
```
用途：
- 企業情報の追加
- ソーシャルメディアリンク
- カスタムレイアウト

### 3. **ColorModeToggle（ダークモード切り替え）**
```bash
bun run swizzle @docusaurus/theme-classic ColorModeToggle --eject
```
用途：
- カスタムアイコン
- アニメーション追加

### 4. **DocItem（ドキュメントページ）**
```bash
bun run swizzle @docusaurus/theme-classic DocItem --wrap
```
用途：
- 読了時間の表示
- 著者情報の追加
- カスタムメタデータ

## Swizzleの実例

### 例1: Navbarのカスタマイズ

```bash
# Navbarをeject
bun run swizzle @docusaurus/theme-classic Navbar --eject
```

生成されたファイルを編集：
```tsx
// src/theme/Navbar/index.tsx
import React from 'react';
import NavbarOriginal from '@theme-original/Navbar';
import styles from './styles.module.css';

export default function Navbar(props) {
  return (
    <>
      <div className={styles.announcement}>
        🎉 新機能リリース！
      </div>
      <NavbarOriginal {...props} />
    </>
  );
}
```

### 例2: BlogPostItemにタグを追加

```bash
# BlogPostItemをwrap
bun run swizzle @docusaurus/theme-classic BlogPostItem --wrap
```

```tsx
// src/theme/BlogPostItem/index.tsx
import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const readingTime = Math.ceil(metadata.readingTime);
  
  return (
    <article>
      <div style={{ marginBottom: '1rem' }}>
        📚 読了時間: 約{readingTime}分
      </div>
      <BlogPostItem {...props} />
    </article>
  );
}
```

## Swizzleの注意点

### ⚠️ 安全性レベル

Docusaurusは各コンポーネントに安全性レベルを設定しています：

1. **Safe（安全）** 🟢
   - 安定したAPI
   - アップデート時の破壊的変更が少ない

2. **Unsafe（非安全）** 🔴
   - 内部実装に依存
   - アップデート時に壊れる可能性

3. **Forbidden（禁止）** ⛔
   - Swizzle不可
   - 内部使用専用

### 確認方法：
```bash
# 利用可能なコンポーネントとその安全性を確認
bun run swizzle @docusaurus/theme-classic --list
```

## Swizzleのベストプラクティス

### 1. 最小限の変更に留める
```tsx
// ❌ 悪い例：全体をコピーして少しだけ変更
// （メンテナンスが大変）

// ✅ 良い例：wrapして必要な部分だけ追加
export default function NavbarWrapper(props) {
  return (
    <>
      <CustomBanner />
      <Navbar {...props} />
    </>
  );
}
```

### 2. TypeScriptを使用
```bash
# TypeScript版でswizzle
bun run swizzle @docusaurus/theme-classic Navbar --eject --typescript
```

### 3. バージョン管理
```javascript
// package.json
{
  "dependencies": {
    "@docusaurus/theme-classic": "3.8.1" // バージョンを固定
  }
}
```

## Swizzleを元に戻す

Swizzleしたコンポーネントを削除すれば、デフォルトに戻ります：

```bash
# 削除
rm -rf src/theme/Navbar
```

## まとめ

Swizzleを使うことで：
- 🎨 UIを完全にカスタマイズ
- 🔧 機能の追加・変更
- 🎯 特定の要件に対応

ただし、メンテナンス性を考慮して、必要最小限の使用に留めることが重要です。