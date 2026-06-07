import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('scripts/output', { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(8000);

const result = await page.evaluate(() => {
  const head2 = window.__splineApp?.findObjectByName('Head 2');
  const layers = head2?.material?.layers ?? [];

  return {
    matcapAlpha: layers.find((l) => l.type === 'matcap')?.alpha ?? null,
    videoAlpha: layers.find((l) => l.type === 'video')?.alpha ?? null,
  };
});

await page.screenshot({ path: 'scripts/output/verify-final.png' });
await browser.close();

console.log(JSON.stringify(result, null, 2));

if (result.matcapAlpha !== 1 || result.videoAlpha !== 0) {
  console.error('FAIL');
  process.exit(1);
}

console.log('PASS');
process.exit(0);
