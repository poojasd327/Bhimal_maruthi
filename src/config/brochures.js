// Official Maruti Suzuki Model URLs & Pricing Configurations

export const MARUTI_MODELS = [
  'Maruti Suzuki Brezza',
  'Maruti Suzuki Swift',
  'Maruti Suzuki Baleno',
  'Maruti Suzuki Fronx',
  'Maruti Suzuki Grand Vitara',
  'Maruti Suzuki Dzire',
  'Maruti Suzuki Ertiga',
  'Maruti Suzuki XL6',
  'Maruti Suzuki Invicto',
  'Maruti Suzuki Jimny',
  'Maruti Suzuki Wagon R',
  'Maruti Suzuki Alto K10',
  'Maruti Suzuki Celerio',
  'Maruti Suzuki S-Presso',
  'Maruti Suzuki e Vitara',
  'Maruti Suzuki Victoris',
  'Maruti Suzuki Eeco',
  'Maruti Suzuki Super Carry',
];

export function getBrochureUrl(car) {
  const name = (typeof car === 'string' ? car : car?.name || car?.id || '').toLowerCase();
  
  if (name.includes('brezza')) return 'https://www.marutisuzuki.com/arena/brezza';
  if (name.includes('swift')) return 'https://www.marutisuzuki.com/arena/swift';
  if (name.includes('dzire')) return 'https://www.marutisuzuki.com/arena/dzire';
  if (name.includes('ertiga')) return 'https://www.marutisuzuki.com/arena/ertiga';
  if (name.includes('wagon')) return 'https://www.marutisuzuki.com/arena/wagon-r';
  if (name.includes('alto')) return 'https://www.marutisuzuki.com/arena/alto-k10';
  if (name.includes('celerio')) return 'https://www.marutisuzuki.com/arena/celerio';
  if (name.includes('s-presso') || name.includes('spresso')) return 'https://www.marutisuzuki.com/arena/s-presso';
  if (name.includes('eeco cargo')) return 'https://www.marutisuzukicommercial.com/eeco-cargo';
  if (name.includes('eeco')) return 'https://www.marutisuzuki.com/arena/eeco';
  if (name.includes('victoris')) return 'https://www.marutisuzuki.com/arena';
  
  // Nexa Models
  if (name.includes('baleno')) return 'https://www.nexaexperience.com/baleno';
  if (name.includes('fronx')) return 'https://www.nexaexperience.com/fronx';
  if (name.includes('grand vitara')) return 'https://www.nexaexperience.com/grand-vitara';
  if (name.includes('jimny')) return 'https://www.nexaexperience.com/jimny';
  if (name.includes('invicto')) return 'https://www.nexaexperience.com/invicto';
  if (name.includes('xl6')) return 'https://www.nexaexperience.com/xl6';
  if (name.includes('e vitara') || name.includes('evitara')) return 'https://www.nexaexperience.com/e-vitara';
  
  // Commercial Models
  if (name.includes('super carry')) return 'https://www.marutisuzukicommercial.com/super-carry';
  if (name.includes('tour h1')) return 'https://www.marutisuzukicommercial.com/tour-h1';
  if (name.includes('tour h3')) return 'https://www.marutisuzukicommercial.com/tour-h3';
  if (name.includes('tour m')) return 'https://www.marutisuzukicommercial.com/tour-m';
  if (name.includes('tour s')) return 'https://www.marutisuzukicommercial.com/tour-s';
  if (name.includes('tour v')) return 'https://www.marutisuzukicommercial.com/tour-v';
  
  return 'https://www.marutisuzuki.com/arena/brezza';
}

export function getCarOnRoadPrice(car) {
  const name = (typeof car === 'string' ? car : car?.name || car?.id || '').toLowerCase();
  
  if (name.includes('brezza')) return 1069500;
  if (name.includes('victoris')) return 1350000;
  if (name.includes('s-presso') || name.includes('spresso')) return 450000;
  if (name.includes('e vitara')) return 1850000;
  if (name.includes('grand vitara')) return 1395000;
  if (name.includes('fronx')) return 895000;
  if (name.includes('jimny')) return 1520000;
  if (name.includes('swift')) return 750000;
  if (name.includes('wagon')) return 680000;
  if (name.includes('baleno')) return 850000;
  if (name.includes('alto')) return 470000;
  if (name.includes('celerio')) return 630000;
  if (name.includes('dzire')) return 820000;
  if (name.includes('ertiga')) return 1120000;
  if (name.includes('xl6')) return 1420000;
  if (name.includes('invicto')) return 2950000;
  if (name.includes('eeco')) return 620000;
  if (name.includes('super carry')) return 590000;
  return 1069500;
}
