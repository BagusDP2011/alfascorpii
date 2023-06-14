import "./App.css";
import Header from "./layout/Header";
import Description from "./components/Description.jsx";
import Collection from "./components/Menu/gridIndex.jsx";
import About from "./components/About/index.jsx";
import FirstPage from "./components/FirstPage";

function App() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>PT Alfa Scorpii Batam - DP Motor Mulai dari 1jtaan</title>
        <meta
          name="title"
          content="PT Alfa Scorpii Batam - DP Motor Mulai dari 1jtaan"
        />
        <meta
          name="description"
          content="Ayoo hubungi kami.. Kapan lagi ada dealer motor dengan bonus hingga ratusan ribu dan dengan pilihan motor yang berbagai macam model dan warna"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://alfascorpii-batam.vercel.app"
        />
        <meta
          property="og:title"
          content="PT Alfa Scorpii Batam - DP Motor Mulai dari 1jtaan"
        />
        <meta
          property="og:description"
          content="Ayoo hubungi kami.. Kapan lagi ada dealer motor dengan bonus hingga ratusan ribu dan dengan pilihan motor yang berbagai macam model dan warna"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://alfascorpii-batam.vercel.app"
        />
        <meta
          property="twitter:title"
          content="PT Alfa Scorpii Batam - DP Motor Mulai dari 1jtaan"
        />
        <meta
          property="twitter:description"
          content="Ayoo hubungi kami.. Kapan lagi ada dealer motor dengan bonus hingga ratusan ribu dan dengan pilihan motor yang berbagai macam model dan warna"
        />

        <meta name="author" content="BDP" />
      </head>

      <body>
        <Header />
        <FirstPage />
        <Description />
        <Collection />
        <About />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <a
          href="https://api.whatsapp.com/send?phone=6281278732817&text=Saya tertarik dan ingin bertanya"
          class="float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </body>
    </>
  );
}

export default App;
