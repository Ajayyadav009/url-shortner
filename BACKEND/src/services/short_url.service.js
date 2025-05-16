import { generatenanoid } from "../utils/helper.js";

import { saveShortUrl } from "../dao/short_url.dao.js";
export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generatenanoid(7);
  await saveShortUrl(shortUrl, url )
  return shortUrl;
};
export const createShortUrlWithUser = async (user, userId) => {
  const shortUrl = await generatenanoid(7);
  await saveShortUrl(url, shortUrl, userId)
  return shortUrl;
};
