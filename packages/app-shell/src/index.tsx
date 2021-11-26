import "piral/polyfills";
import { renderInstance } from "piral";
import { layout, errors } from "./layout";

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch("https://feed.piral.cloud/api/v1/pilet/my-coding-zone-sample")
      .then((res) => res.json())
      .then((res) => res.items);
  },
});
