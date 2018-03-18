/**
 * Created by School on 10-3-2018.
 */

export class Product
{
  constructor(
    public id?: number,
    public omschrijving?: string,
    public fabrikant?: string,
    public gecheckt?: number,
    public prijs?: number,
    public product_gebruiker_id?: number,
    public imgURL?: string,
    public categorie?: string)
  {

}
}
