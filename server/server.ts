import express, { Request, Response, NextFunction } from "express";
import { renderPage } from "vite-plugin-ssr/server";

const app = express();
const port = 9000;

app.use(express.static("dist/client"));

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
