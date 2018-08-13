 # Landing Page
 
 因為GitHub的資料夾只會指向根目錄，所以將deploy編譯後的檔案打包至根目錄。

## Run on localhost

#### Development Project
執行開發環境

```
/* 安裝依賴庫 */
npm install

/* 執行開發環境 */
npm run dev
```

#### Build project
編譯檔案
```
npm run deploy
```

#### Blog
 - `blog.html`的資料是讀取 `assets/json/blog_list.json`這支 json 檔
 - 結構如下
 ```
{
  "url": 連結文章內頁的連結,
  "img": 文章簡介的大圖,
  "title": 文章簡介標題,
  "content": 文章簡介大綱,
  "tag": 分類標籤
  "author": 作者,
  "authorImg": 作者圖示,
  "date": 日期
}
 ```
 - 標籤的設定方式 `"tag": ["all","event"]`