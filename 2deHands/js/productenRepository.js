import { Product } from "./product.js";
import { producten } from "./productenArray.js";

export class ProductenRepository {
  #producten = [];
  constructor() {
    this.haalProductenOp();
  }
  get producten() {
    return this.#producten;
  }
  voegProductToe(product) {}
  geefProduct(id) {}
  geefProductenUitCategorie(categorie) {}
  // retourneert een alfabetisch gesorteerde array van strings die de unieke categorieën bevat
  geefAlleCategorieen() {}
  haalProductenOp() {
    producten.forEach((p) => this.voegProductToe(p));
  }
}
