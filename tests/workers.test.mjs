import assert from "node:assert/strict";
import test from "node:test";

import apexWorker from "../worker.apex.js";
import wwwWorker from "../worker.www.js";

test("the apex worker upgrades HTTP while preserving path and query", async () => {
  const response = await apexWorker.fetch(
    new Request("http://liweiwu.com/en/essay/example/?from=test"),
    { ASSETS: { fetch: () => assert.fail("HTTP requests must not reach assets") } },
  );

  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://liweiwu.com/en/essay/example/?from=test",
  );
});

test("the apex worker serves HTTPS requests from static assets", async () => {
  const request = new Request("https://liweiwu.com/zh-Hans/?from=test");
  let receivedRequest;
  const response = await apexWorker.fetch(request, {
    ASSETS: {
      fetch(assetRequest) {
        receivedRequest = assetRequest;
        return new Response("asset", { status: 200 });
      },
    },
  });

  assert.equal(receivedRequest, request);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "asset");
});

test("the www worker redirects every request to the canonical HTTPS host", async () => {
  for (const protocol of ["http", "https"]) {
    const response = await wwwWorker.fetch(
      new Request(`${protocol}://www.liweiwu.com/de/essay/example/?from=test`),
    );
    assert.equal(response.status, 308);
    assert.equal(
      response.headers.get("location"),
      "https://liweiwu.com/de/essay/example/?from=test",
    );
  }
});
