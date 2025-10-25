export const metadata = {
  title: "LRU Cache Demo",
  description: "Dynamic content loader using LRU Cache in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>  
        <div className="App">{children}</div>
      </body>
    </html>
  );
}
