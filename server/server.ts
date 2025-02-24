import express, { Request, Response, NextFunction } from "express";
import { renderPage } from "vike/server";

const app = express();
const port = 9000;

// ✅ `base` を環境に応じて切り替え
const BASE_URL = process.env.NODE_ENV === "production" ? "/my-ssr-app" : "/";

app.use(BASE_URL, express.static("dist/client")); // ✅ `base` に対応

app.get("*", async (req: Request, res: Response, next: NextFunction) => {
  const pageContextInit = { urlOriginal: req.originalUrl };
  const pageContext = await renderPage(pageContextInit);

  if (pageContext.httpResponse) {
    res.status(pageContext.httpResponse.statusCode).send(pageContext.httpResponse.body);
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`SSR server running at http://localhost:${port}`);
});
