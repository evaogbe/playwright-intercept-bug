# Playwright intercept bug

This repo demonstrates a bug with mobile Chromium devices in Playwright.

When the site is using a flexbox inside a grid column with a span, the flex-auto element will
intercept click events to other links inside the flexbox. This prevents the mobile Chromium browser
from being able to successfully click the link even though it is visible, enabled, and stable.

This bug only occurs with mobile Chromium devices. Other mobile types and desktop Chromium work as
expected.

To reproduce, clone the repo then run:

```sh
npm install
npm test
```

You will see the results:

```sh
Running 5 tests using 4 workers

  ✓  1 [firefox] › demo.test.js:3:1 › can click nav link (2.8s)
  ✓  2 [chromium] › demo.test.js:3:1 › can click nav link (1.9s)
  ✓  3 [webkit] › demo.test.js:3:1 › can click nav link (2.6s)
  ✘  4 [Mobile Chrome] › demo.test.js:3:1 › can click nav link (30.1s)
  ✓  5 [Mobile Safari] › demo.test.js:3:1 › can click nav link (1.0s)


  1) [Mobile Chrome] › demo.test.js:3:1 › can click nav link ───────────────────────────────────────

    Test timeout of 30000ms exceeded.

    Error: locator.click: Test timeout of 30000ms exceeded.
    Call log:
      - waiting for getByRole('link', { name: 'About' })
      -   locator resolved to <a href="/about">About</a>
      - attempting click action
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #1
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #2
      -   waiting 20ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #3
      -   waiting 100ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #4
      -   waiting 100ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #5
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #6
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #7
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #8
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #9
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #10
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #11
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #12
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #13
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #14
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #15
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #16
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #17
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #18
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #19
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #20
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #21
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #22
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #23
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #24
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #25
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #26
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #27
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #28
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #29
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #30
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #31
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #32
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #33
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #34
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #35
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #36
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #37
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #38
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #39
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #40
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #41
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #42
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #43
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #44
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #45
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #46
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #47
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #48
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #49
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #50
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #51
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #52
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #53
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #54
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #55
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #56
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #57
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable
      -   element is visible, enabled and stable
      -   scrolling into view if needed
      -   done scrolling
      -   <h1 class="flex-auto">…</h1> intercepts pointer events
      - retrying click action, attempt #58
      -   waiting 500ms
      -   waiting for element to be visible, enabled and stable


       6 |      await expect(page.getByRole('heading', { level: 2 })).toHaveText('Home');
       7 |
    >  8 |      await page.getByRole('link', { name: 'About' }).click();
         |                                                      ^
       9 |
      10 |      await expect(page.getByRole('heading', { level: 2 })).toHaveText('About');
      11 | });

        at /playwright-intercept-bug/e2e/demo.test.js:8:50

  Slow test file: [Mobile Chrome] › demo.test.js (30.1s)
  Consider splitting slow test files to speed up parallel execution
  1 failed
    [Mobile Chrome] › demo.test.js:3:1 › can click nav link ────────────────────────────────────────
  4 passed (39.0s)
```

Expected result:

```sh
Running 5 tests using 4 workers

✓  1 [Mobile Chrome] › demo.test.js:3:1 › can click nav link (1.7s)
✓  2 [chromium] › demo.test.js:3:1 › can click nav link (1.7s)
✓  3 [firefox] › demo.test.js:3:1 › can click nav link (2.5s)
✓  4 [webkit] › demo.test.js:3:1 › can click nav link (2.5s)
✓  5 [Mobile Safari] › demo.test.js:3:1 › can click nav link (941ms)

5 passed (13.3s)
```
