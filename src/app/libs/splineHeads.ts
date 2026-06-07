import type { Application, SPEObject } from '@splinetool/runtime';

const TOLI_TEXTURE = '/toli-head-zoom.png';

let texturePreload: Promise<void> | null = null;

function textureUrl(path: string) {
  if (typeof window === 'undefined') return path;
  return new URL(path, window.location.origin).href;
}

export function preloadToliTexture() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (!texturePreload) {
    texturePreload = new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('Failed to preload Toli texture'));
      image.src = textureUrl(TOLI_TEXTURE);
    });
  }
  return texturePreload;
}

async function applyMatcapTexture(object: SPEObject, path: string) {
  const matcapLayer = object.material?.layers.find((layer) => layer.type === 'matcap');
  if (!matcapLayer || !('updateTexture' in matcapLayer)) return;

  const matcap = object.material?.layers.find((layer) => layer.type === 'matcap');
  if (matcap && 'alpha' in matcap) matcap.alpha = 1;

  object.material?.layers.forEach((layer) => {
    if ('alpha' in layer && ['color', 'video', 'rainbow', 'light'].includes(layer.type)) {
      layer.alpha = 0;
    }
  });

  await matcapLayer.updateTexture(textureUrl(path));
}

const LEGACY_BRANDING_OBJECTS = [
  'logo',
  'Shape 0',
  'Shape 1',
  'Shape',
  'Shape 2',
  'Shape 3',
  'Shape 4',
  'Shape 5',
  'Shape 6',
];

export function applySceneBranding(spline: Application) {
  LEGACY_BRANDING_OBJECTS.forEach((name) => {
    const object = spline.findObjectByName(name);
    if (object) object.visible = false;
  });
}

export async function applyToliHead(spline: Application) {
  applySceneBranding(spline);

  spline.getAllObjects().forEach((object) => {
    const name = object.name.toLowerCase();
    if (name.includes('welcome') || name.includes('nextbot') || name.includes('next bot')) {
      object.visible = false;
    }
  });

  spline.setGlobalEvents(true);

  const head = spline.findObjectByName('Head');
  const head2 = spline.findObjectByName('Head 2');

  if (head) head.visible = true;
  if (!head2?.material) return;

  head2.visible = true;
  head2.material.alpha = 1;

  await preloadToliTexture();
  await applyMatcapTexture(head2, TOLI_TEXTURE);

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  await applyMatcapTexture(head2, TOLI_TEXTURE);
}
