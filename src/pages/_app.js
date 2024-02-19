import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <main>
    <p>This is Nabvar</p>
    <Component {...pageProps} />
    <p>This is FOoter</p>
  </main>;
}
