---
sidebar_position: 1
---

# はじめに

このドキュメント管理システムへようこそ！

## システムの概要

このシステムは**Docusaurus**をベースに構築された、マークダウン形式のドキュメント管理システムです。

### 主な特徴

- **マークダウン形式**: シンプルなマークダウン形式でドキュメントを作成
- **バージョン管理**: Gitを使用したバージョン管理
- **検索機能**: 強力な検索機能を内蔵
- **ダークモード**: 目に優しいダークモードをサポート

## 使い方

### ドキュメントの作成

1. `docs`ディレクトリに新しいマークダウンファイルを作成
2. ファイルの先頭にフロントマターを追加
3. コンテンツを記述

### フロントマターの例

```yaml
---
sidebar_position: 2
title: ドキュメントのタイトル
---
```

### 開発環境の起動

```bash
# bunを使用して開発サーバーを起動
bun run start
```

サーバーが起動したら、http://localhost:3000 でドキュメントを確認できます。
