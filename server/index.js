import express from 'express'; // 必要に応じてインポート
const app = express();
const port = 9000;

// ルートにアクセスされた場合、「Hello world」と表示
app.get('/', (req, res) => {
  res.send('Hello world');
});

// サーバを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
