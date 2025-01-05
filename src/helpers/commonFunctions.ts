import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

export function fCapital (text:string|undefined):string {
  let t = '';
  if (text) {
    t = text.toLocaleLowerCase().replace(/^./, function (str) { return str.toUpperCase(); });
  }
  return t;
}

export function getTailwindColor(name:string):string {
  const fullTailwindConfig = resolveConfig(tailwindConfig);
  const colors = fullTailwindConfig.theme.colors;
  if(name && name.includes('-')){
    let fields = name.split('-');
    return colors[fields[0]][fields[1]]
  }
  return colors[name];
}
export function getTailwindHexColor(name:string):string {
  let hsl = getTailwindColor(name);
  hsl = hsl.split("(").pop().slice(0, -1);
  let hslSplit = hsl.split(', ');
  let h = hslSplit[0];
  let s = hslSplit[1].slice(0, -1);
  let l = hslSplit[2].slice(0, -1);
  // code from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}