# Docusaurus Learning

このプロジェクトは、[Docusaurus](https://docusaurus.io/) を使った学習用のドキュメントサイトです。Docusaurus の機能や使い方を実践的に学ぶことができます。

## 概要

Docusaurus は、Meta（旧Facebook）が開発したモダンな静的サイトジェネレーターです。このプロジェクトでは、Docusaurus v3 を使用して、以下の機能を実装・学習しています：

- 📚 ドキュメント管理
- 📝 ブログ機能
- 🎨 カスタムページの作成
- 🌐 国際化（i18n）対応
- 🔍 検索機能
- 📱 レスポンシブデザイン

## 必要な環境

- [Bun](https://bun.sh/) 1.2.17 以上
- Node.js 24.0 以上（Bunが内部で使用）

> **注意**: このプロジェクトはBun専用に設定されています。npm、yarn、pnpmは使用しないでください。

## インストール

```bash
bun install
```

## ローカル開発

```bash
bun dev
# または
bun start
```

このコマンドは、ローカル開発サーバーを起動し、ブラウザウィンドウを開きます。ほとんどの変更は、サーバーを再起動することなくライブで反映されます。

開発サーバーは `http://localhost:3000` で起動します。

## 利用可能なスクリプト

```bash
# 開発サーバーを起動
bun dev

# プロダクションビルド
bun run build

# ビルドしたファイルをプレビュー
bun run preview

# 型チェック
bun run type-check

# キャッシュとビルドファイルを削除
bun run clean

# 依存関係を最新版に更新
bun run update-deps

# 古い依存関係をチェック
bun run check-deps

# テスト実行（現在は未実装）
bun test
```

## ビルド

```bash
bun run build
```

このコマンドは、静的コンテンツを `build` ディレクトリに生成します。生成されたファイルは、任意の静的コンテンツホスティングサービスで配信できます。

## デプロイ

### GitHub Pages へのデプロイ

Using SSH:

```bash
USE_SSH=true bun run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> bun run deploy
```

GitHub Pages を使用してホスティングする場合、このコマンドでウェブサイトをビルドし、`gh-pages` ブランチにプッシュできます。

## プロジェクト構造と各ディレクトリの詳細

```
docusaurus-learning/
├── blog/                      # ブログ記事を管理
│   ├── 2024-01-01-first.md   # ブログ記事（日付-スラグ.md形式）
│   └── authors.yml           # ブログ著者情報
├── docs/                      # ドキュメントファイル
│   ├── intro.md              # ドキュメントのエントリーポイント
│   └── tutorial-basics/      # ドキュメントのカテゴリ分け
├── src/                       # カスタムReactコンポーネント
│   ├── components/           # 再利用可能なコンポーネント
│   │   └── HomepageFeatures/ # トップページの機能紹介セクション
│   ├── pages/                # カスタムページ（ルーティング自動）
│   │   ├── index.tsx         # トップページ (/)
│   │   └── markdown-page.md  # Markdownページ (/markdown-page)
│   └── css/                  # グローバルCSS
│       └── custom.css        # カスタムスタイル定義
├── static/                    # 静的ファイル（画像、フォントなど）
│   ├── img/                  # 画像ファイル
│   └── manifest.json         # PWAマニフェスト
├── docusaurus.config.ts       # メイン設定ファイル
├── sidebars.ts               # ドキュメントのサイドバー構造
├── package.json              # 依存関係とスクリプト
└── tsconfig.json             # TypeScript設定
```

### 各ディレクトリの役割と書き方

#### 1. `/blog` - ブログ記事

- **ファイル名形式**: `YYYY-MM-DD-slug.md` または `YYYY-MM-DD-slug/index.md`
- **フロントマター例**:
```yaml
---
slug: welcome-post
title: Docusaurusへようこそ
authors: [suguru]
tags: [docusaurus, hello]
---
```
- **画像の配置**: 記事と同じディレクトリに配置して相対パスで参照

#### 2. `/docs` - ドキュメント

- **ファイル名**: わかりやすい英語名（例: `getting-started.md`）
- **フロントマター例**:
```yaml
---
id: getting-started
title: はじめに
sidebar_position: 1
---
```
- **カテゴリ作成**: サブディレクトリ + `_category_.json`で設定

#### 3. `/src/pages` - カスタムページ

- **ルーティング**: ファイル名が自動的にURLパスになる
  - `index.tsx` → `/`
  - `about.tsx` → `/about`
  - `team/index.tsx` → `/team`
- **React/TypeScript/Markdownで作成可能**

#### 4. `/src/components` - Reactコンポーネント

- **命名規則**: PascalCase（例: `FeatureCard.tsx`）
- **エクスポート**: 名前付きエクスポートまたはデフォルトエクスポート
- **スタイル**: CSS Modules推奨（`Component.module.css`）

#### 5. `/static` - 静的アセット

- **直接アクセス可能**: `/static/img/logo.png` → `/img/logo.png`
- **用途**: ファビコン、ロゴ、ダウンロード可能なファイルなど

### メンテナンス時の更新ポイント

#### 新機能追加時
1. **プラグイン追加**: `docusaurus.config.ts` の `plugins` 配列に追加
2. **テーマ設定**: `themeConfig` オブジェクトで設定
3. **依存関係**: `bun add` でパッケージ追加

#### コンテンツ更新時
1. **ドキュメント追加**: `/docs` に新規ファイル作成 → `sidebars.ts` で位置調整
2. **ブログ投稿**: `/blog` に日付付きファイル作成
3. **ページ追加**: `/src/pages` に新規ファイル作成（自動ルーティング）

#### スタイル変更時
1. **グローバルスタイル**: `/src/css/custom.css` を編集
2. **カラーテーマ**: CSS変数で定義（ライト/ダークモード対応）
3. **コンポーネント固有**: CSS Modulesを使用

### インストール済みプラグイン

1. **@docusaurus/plugin-ideal-image**: 画像の最適化とレスポンシブ対応
2. **@docusaurus/plugin-pwa**: Progressive Web App対応
3. **docusaurus-plugin-image-zoom**: 画像のズーム機能
4. **@docusaurus/theme-mermaid**: Mermaidダイアグラムのサポート

## 機能の詳細

### ドキュメント

`docs/` ディレクトリ内にMarkdownファイルを配置することで、ドキュメントを作成できます。フロントマターを使用して、メタデータを設定できます。

### ブログ

`blog/` ディレクトリ内にMarkdownファイルを配置することで、ブログ記事を作成できます。ファイル名は `YYYY-MM-DD-slug.md` の形式にします。

### カスタマイズ

- テーマのカスタマイズ: `src/css/custom.css`
- 設定の変更: `docusaurus.config.js`
- プラグインの追加: `docusaurus.config.js` の `plugins` セクション

## Bun専用設定

このプロジェクトはBun専用に設定されています：

- **packageManager**: `package.json`に`"packageManager": "bun@1.2.17"`を指定
- **.npmrc**: `engine-strict=true`でNode.jsバージョンを強制
- **.nvmrc**: Node.js 24を指定

### なぜBunを使うのか？

1. **高速**: npmやyarnと比べて圧倒的に高速なインストールとビルド
2. **統一性**: パッケージマネージャーとランタイムが統合
3. **互換性**: npm/yarnのパッケージをそのまま使用可能

## 参考リンク

- [Docusaurus 公式ドキュメント](https://docusaurus.io/)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
- [MDX ドキュメント](https://mdxjs.com/)
- [Bun公式サイト](https://bun.sh/)

## ライセンス

このプロジェクトは学習目的で作成されています。
