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

- [Bun](https://bun.sh/) 1.0 以上

## インストール

```bash
bun install
```

## ローカル開発

```bash
bun start
```

このコマンドは、ローカル開発サーバーを起動し、ブラウザウィンドウを開きます。ほとんどの変更は、サーバーを再起動することなくライブで反映されます。

開発サーバーは `http://localhost:3000` で起動します。

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

## プロジェクト構造

```
docusaurus-learning/
├── blog/              # ブログ記事
├── docs/              # ドキュメント
├── src/               # Reactコンポーネントとカスタムページ
│   ├── components/    # 再利用可能なコンポーネント
│   └── pages/         # カスタムページ
├── static/            # 静的アセット
├── docusaurus.config.js  # Docusaurus設定ファイル
└── sidebars.js        # サイドバー設定
```

## 機能の詳細

### ドキュメント

`docs/` ディレクトリ内にMarkdownファイルを配置することで、ドキュメントを作成できます。フロントマターを使用して、メタデータを設定できます。

### ブログ

`blog/` ディレクトリ内にMarkdownファイルを配置することで、ブログ記事を作成できます。ファイル名は `YYYY-MM-DD-slug.md` の形式にします。

### カスタマイズ

- テーマのカスタマイズ: `src/css/custom.css`
- 設定の変更: `docusaurus.config.js`
- プラグインの追加: `docusaurus.config.js` の `plugins` セクション

## 参考リンク

- [Docusaurus 公式ドキュメント](https://docusaurus.io/)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
- [MDX ドキュメント](https://mdxjs.com/)

## ライセンス

このプロジェクトは学習目的で作成されています。
