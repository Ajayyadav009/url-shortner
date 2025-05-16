import { getShortUrl } from "../dao/short_url.dao.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";


export const createShortUrl = async function (req, res) {
  const { url } = req.body;

  const shortUrl =  await createShortUrlWithoutUser(url);
   res.send(process.env.APP_URL + shortUrl)
};



export const redirectFromShortUrl = async function (req, res) {
  const { id } = req.params;
  const url = await getShortUrl(id);
  console.log(url);
  res.redirect(url.Full_url);
}