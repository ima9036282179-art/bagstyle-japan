# BAG NOTE — アフィリエイトサイト 一式

ファッション(かばん)アフィリエイトサイトのスタートアップ一式です。GitHub Pages にそのまま配置できます。

## ディレクトリ構成

```
bag-affiliate-site/
├── index.html                            … トップページ
├── site-plan.md                          … サイト設計書
├── README.md                             … 本ファイル
├── assets/
│   └── style.css                         … 共通CSS
└── articles/
    └── tote-bag-osusume-2026.html        … レビュー記事1本目
```

## GitHub Pages への配置手順

1. 既存リポジトリ(例: `imanari-blog`)に上記フォルダ一式をコピー、または新規リポジトリ `bag-note` を作成して push します。
2. GitHub の Settings → Pages で、Source を `main` ブランチに設定。
3. 数分後に `https://<your-name>.github.io/bag-note/` で公開されます。

## アフィリエイトIDの差し込み(必須)

記事内のリンクは現状すべて検索ページへのリンクで、`tag=YOUR_TAG-22` というプレースホルダが入っています。本番運用前に以下の差し替えが必要です。

### Amazon アソシエイト

`articles/tote-bag-osusume-2026.html` 内の `tag=YOUR_TAG-22` を、ご自身のアソシエイトID(例: `imanari0a-22`)に置換してください。エディタの「全置換」で一括変換できます。

### 楽天アフィリエイト

`btn-rakuten` のリンクは検索結果ページのため、本来は楽天アフィリエイト管理画面で個別商品のリンクを発行し、生成された URL に差し替えるのがベストです。

簡易的に運用したい場合は、URL末尾に `?scid=af_pc_etc&sc2id=YOUR_AFFILIATE_ID` を付与しておく方法もあります(詳細は楽天アフィリエイトのガイドを参照)。

## カスタマイズしたい箇所

| ファイル | カスタマイズ内容 |
|---|---|
| `index.html` の `<title>` / `<meta description>` | サイト名・キャッチコピー |
| `index.html` の `.category-grid` の `count` | 実際の記事数に合わせて更新 |
| `index.html` の「準備中」記事カード | 記事ができたら href とテキストを差し替え |
| `assets/style.css` の `:root` 変数 | カラーパレット(`--accent` を変えるだけで雰囲気が変わります) |
| 全ページの `.site-footer .disclosure` | 屋号や正式な開示文への変更 |

## 必要な追加ページ(運用前に作成推奨)

下記の固定ページが揃っていないと、Amazon・楽天アフィリエイトの審査が通りにくいため、早めに準備しましょう。

- **About / 運営者情報** — 運営者(個人/屋号)・連絡先・運営方針
- **プライバシーポリシー** — Cookie、アクセス解析、第三者配信広告について
- **アフィリエイト開示** — Amazon/楽天等の参加プログラム明示(ステマ規制対応)
- **お問い合わせ** — Google Forms 等で簡易設置でもOK

## 記事を増やすときのワークフロー

1. `articles/<記事スラッグ>.html` を作成(既存記事をテンプレ複製でOK)
2. `<title>` / `<meta description>` / 本文を執筆
3. Amazon/楽天のアフィリエイトリンクを差し込み
4. `index.html` の `.article-grid` に新カードを追加
5. GitHub に push → 自動デプロイ

## 今後の発展アイデア

- `articles/index.html` を作って記事一覧ページを用意
- カテゴリ別ページ(`category/ladies/index.html` など)で記事を分類
- ヘッダー画像・ロゴSVG・OGP画像の自作
- Google Search Console と Analytics の設置
- 構造化データ(Product / Review)の追加で検索結果のリッチ化

---

不明点や追加要望があれば、いつでも声をかけてください。
