import { Banner } from "./components/Banner/Banner";
import { PopularCardsList } from "./components/CardsList/PopularCardsList";
import { NewCardsList } from "./components/CardsList/NewCardsList";
import { Promo } from "./components/Promo/Promo";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <PopularCardsList />
      <NewCardsList />
      <Promo />
    </main>
  );
}
