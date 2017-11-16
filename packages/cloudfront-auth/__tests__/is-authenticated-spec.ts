import generateRequest from "./utils/generate-request";

import isAuthenticated from "../src/is-authenticated";

test("returns false by default", () => {
  const request = generateRequest();

  expect(isAuthenticated(request)).toBe(false);
});

test("returns true when distribution id is not enabled", () => {
  const request = generateRequest({
    distributionId: "NOT_ENABLED_ID"
  });

  expect(
    isAuthenticated(request, {
      enabledDistributions: ["ENABLED_ID"]
    })
  ).toBe(true);
});

test("returns true when the IP is whitelisted", () => {
  const request = generateRequest({
    clientIp: "127.0.0.1"
  });

  expect(
    isAuthenticated(request, {
      whitelistedIPs: ["127.0.0.1"]
    })
  ).toBe(true);
});
