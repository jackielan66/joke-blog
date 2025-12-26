import { Html, Head, Main, NextScript } from "next/document";
import { getInitialThemeScript } from "../utils/theme";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
          dangerouslySetInnerHTML={{
            __html: getInitialThemeScript
          }}
        />
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
