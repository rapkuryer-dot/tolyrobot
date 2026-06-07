import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('scripts/output', { recursive: true });

async function applyAndShot(label, fn) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(5000);

  const info = await page.evaluate(fn);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `scripts/output/3d-${label}.png` });
  await browser.close();
  console.log(label, JSON.stringify(info));
}

await applyAndShot('matcap-off-video-toli', (url) => {
  const s = window.__splineApp;
  if (!s) return { error: 'no spline' };

  const head = s.findObjectByName('Head');
  const head2 = s.findObjectByName('Head 2');
  head.visible = true;
  head2.visible = true;
  head2.material.alpha = 1;

  head2.material.layers.forEach((layer) => {
    if (['matcap', 'rainbow', 'light'].includes(layer.type)) layer.alpha = 0;
  });

  const video = head2.material.layers.find((l) => l.type === 'video');
  return video.updateTexture(url).then(() => ({
    layers: head2.material.layers.map((l) => ({ type: l.type, alpha: l.alpha })),
    hasOverlay: Boolean(document.querySelector('img[src*="toli"]')),
  }));
}, 'http://localhost:3000/toli-human-3d.png');

await applyAndShot('matcap-off-video-original', (url) => {
  const s = window.__splineApp;
  const head2 = s.findObjectByName('Head 2');
  const head = s.findObjectByName('Head');
  head.visible = true;
  head2.visible = true;
  head2.material.alpha = 1;
  head2.material.layers.forEach((layer) => {
    if (['matcap', 'rainbow', 'light'].includes(layer.type)) layer.alpha = 0;
  });
  const video = head2.material.layers.find((l) => l.type === 'video');
  head.emitEvent('mouseDown');
  head2.emitEvent('mouseDown');
  return video.updateTexture(url).then(() => ({ ok: true }));
}, 'http://localhost:3000/original-head.png');

await applyAndShot('emit-only', () => {
  const s = window.__splineApp;
  const head = s.findObjectByName('Head');
  const head2 = s.findObjectByName('Head 2');
  head.visible = true;
  head2.visible = true;
  head2.material.alpha = 1;
  head.emitEvent('mouseDown');
  head2.emitEvent('mouseDown');
  return { emitted: true };
});
