---
sidebar_position: 2
title: クイックスタート
---

# クイックスタート

このガイドでは、ドキュメント管理システムの基本的な使い方を説明します。

## 必要な環境

- [Bun](https://bun.sh/) 最新版
- Git
- お好みのテキストエディタ（VS Code推奨）

## インストール

### 1. リポジトリのクローン

```bash
git clone https://github.com/sugurutakahashi/docusaurus-learning.git
cd docusaurus-learning
```

### 2. 依存関係のインストール

```bash
bun install
```

### 3. 開発サーバーの起動

```bash
bun run start
```

ブラウザで http://localhost:3000 を開いて、ドキュメントが表示されることを確認してください。

## ドキュメントの作成

### 新しいドキュメントを追加する

1. `docs`ディレクトリに新しい`.md`ファイルを作成
2. ファイルの先頭にフロントマターを追加
3. マークダウン形式でコンテンツを記述

### フロントマターの例

```yaml
---
sidebar_position: 3
title: 新しいドキュメント
description: このドキュメントの説明
tags:
  - タグ1
  - タグ2
---
```

## マークダウンの書き方

### 見出し

```markdown
# レベル1の見出し
## レベル2の見出し
### レベル3の見出し
```

### リスト

```markdown
- 箇条書き1
- 箇条書き2
  - ネストした箇条書き

1. 番号付きリスト
2. 番号付きリスト
```

### コードブロック

````markdown
```javascript
function hello() {
  console.log("Hello, World!");
}
```
````

### リンク

```markdown
[リンクテキスト](https://example.com)
[内部リンク](/docs/intro)
```

### 画像

```markdown
![代替テキスト](./img/image.png)
```

## サイドバーの設定

`sidebars.js`ファイルを編集することで、サイドバーの構造をカスタマイズできます。

```javascript
module.exports = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'ガイド',
      items: ['guide/basics', 'guide/advanced'],
    },
  ],
};
```

## ビルドとデプロイ

### プロダクションビルド

```bash
bun run build
```

ビルドされたファイルは`build`ディレクトリに生成されます。

### ローカルでのプレビュー

```bash
bun run serve
```

## トラブルシューティング

### ポートが使用中の場合

デフォルトのポート（3000）が使用中の場合は、環境変数で変更できます：

```bash
PORT=3001 bun run start
```

### ビルドエラーが発生する場合

1. キャッシュをクリア: `bun run clear`
2. node_modulesを削除して再インストール:
   ```bash
   rm -rf node_modules bun.lockb
   bun install
   ```

## 次のステップ

- [マークダウン拡張機能](/docs/markdown-features)を学ぶ
- [カスタムコンポーネント](/docs/custom-components)の作成
- [テーマのカスタマイズ](/docs/theming)