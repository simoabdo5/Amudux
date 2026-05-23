// Travel Tips & Cultural Preparation Data
// Designed for the AMUDUX Travel Learning Platform

export const TIP_CATEGORIES = [
  { id: 'all', labelKey: 'tipCatAll', icon: '✨' },
  { id: 'etiquette', labelKey: 'tipCatEtiquette', icon: '🤝' },
  { id: 'cafe', labelKey: 'tipCatCafe', icon: '☕' },
  { id: 'bargaining', labelKey: 'tipCatBargaining', icon: '🏪' },
  { id: 'tea', labelKey: 'tipCatTea', icon: '🍵' },
  { id: 'transport', labelKey: 'tipCatTransport', icon: '🚕' },
  { id: 'customs', labelKey: 'tipCatCustoms', icon: '🌙' }
];

export const travelTips = [
  // --- ETIQUETTE ---
  {
    id: 'tip_greeting',
    category: 'etiquette',
    icon: '👋',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipGreetingTitle',
    contentKey: 'tipGreetingContent',
    quickPhrase: { darija: 'Salam alaykom', key: 'tipGreetingPhrase' }
  },
  {
    id: 'tip_righthand',
    category: 'etiquette',
    icon: '🤲',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipRightHandTitle',
    contentKey: 'tipRightHandContent'
  },
  {
    id: 'tip_shoes',
    category: 'etiquette',
    icon: '👟',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipShoesTitle',
    contentKey: 'tipShoesContent'
  },
  {
    id: 'tip_dress',
    category: 'etiquette',
    icon: '👗',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipDressTitle',
    contentKey: 'tipDressContent'
  },
  {
    id: 'tip_mosque',
    category: 'etiquette',
    icon: '🕌',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipMosqueTitle',
    contentKey: 'tipMosqueContent'
  },

  // --- CAFÉ CULTURE ---
  {
    id: 'tip_cafe_order',
    category: 'cafe',
    icon: '☕',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipCafeOrderTitle',
    contentKey: 'tipCafeOrderContent',
    quickPhrase: { darija: 'Bghit atay b n3na3', key: 'tipCafePhrase' }
  },
  {
    id: 'tip_cafe_sit',
    category: 'cafe',
    icon: '🪑',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipCafeSitTitle',
    contentKey: 'tipCafeSitContent'
  },
  {
    id: 'tip_cafe_tip',
    category: 'cafe',
    icon: '💰',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipCafeTipTitle',
    contentKey: 'tipCafeTipContent'
  },

  // --- BARGAINING ---
  {
    id: 'tip_bargain_rule',
    category: 'bargaining',
    icon: '🏷️',
    priority: 'essential',
    destinations: ['marrakech', 'fes'],
    titleKey: 'tipBargainRuleTitle',
    contentKey: 'tipBargainRuleContent',
    quickPhrase: { darija: 'Bch7al men lekher?', key: 'tipBargainPhrase' }
  },
  {
    id: 'tip_bargain_smile',
    category: 'bargaining',
    icon: '😊',
    priority: 'essential',
    destinations: ['marrakech', 'fes'],
    titleKey: 'tipBargainSmileTitle',
    contentKey: 'tipBargainSmileContent'
  },
  {
    id: 'tip_bargain_walk',
    category: 'bargaining',
    icon: '🚶',
    priority: 'nice',
    destinations: ['marrakech', 'fes'],
    titleKey: 'tipBargainWalkTitle',
    contentKey: 'tipBargainWalkContent'
  },
  {
    id: 'tip_fixed_price',
    category: 'bargaining',
    icon: '🏬',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipFixedPriceTitle',
    contentKey: 'tipFixedPriceContent'
  },

  // --- TEA TRADITIONS ---
  {
    id: 'tip_tea_accept',
    category: 'tea',
    icon: '🍵',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipTeaAcceptTitle',
    contentKey: 'tipTeaAcceptContent'
  },
  {
    id: 'tip_tea_pour',
    category: 'tea',
    icon: '🫖',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipTeaPourTitle',
    contentKey: 'tipTeaPourContent'
  },
  {
    id: 'tip_tea_three',
    category: 'tea',
    icon: '3️⃣',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipTeaThreeTitle',
    contentKey: 'tipTeaThreeContent'
  },

  // --- TRANSPORT ---
  {
    id: 'tip_petit_taxi',
    category: 'transport',
    icon: '🚕',
    priority: 'essential',
    destinations: ['marrakech', 'fes', 'casablanca'],
    titleKey: 'tipPetitTaxiTitle',
    contentKey: 'tipPetitTaxiContent',
    quickPhrase: { darija: 'Khdem lcompteur 3afak', key: 'tipTaxiPhrase' }
  },
  {
    id: 'tip_grand_taxi',
    category: 'transport',
    icon: '🚐',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipGrandTaxiTitle',
    contentKey: 'tipGrandTaxiContent'
  },
  {
    id: 'tip_tipping',
    category: 'transport',
    icon: '💵',
    priority: 'nice',
    destinations: ['all'],
    titleKey: 'tipTippingTitle',
    contentKey: 'tipTippingContent'
  },

  // --- LOCAL CUSTOMS ---
  {
    id: 'tip_ramadan',
    category: 'customs',
    icon: '🌙',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipRamadanTitle',
    contentKey: 'tipRamadanContent'
  },
  {
    id: 'tip_hammam',
    category: 'customs',
    icon: '🛁',
    priority: 'nice',
    destinations: ['marrakech', 'fes', 'essaouira'],
    titleKey: 'tipHammamTitle',
    contentKey: 'tipHammamContent'
  },
  {
    id: 'tip_photo',
    category: 'customs',
    icon: '📸',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipPhotoTitle',
    contentKey: 'tipPhotoContent'
  },
  {
    id: 'tip_hospitality',
    category: 'customs',
    icon: '🏡',
    priority: 'essential',
    destinations: ['all'],
    titleKey: 'tipHospitalityTitle',
    contentKey: 'tipHospitalityContent'
  }
];

/**
 * Filter tips by category and destination
 */
export const filterTips = (category = 'all', destinationId = null) => {
  return travelTips.filter(tip => {
    const matchesCategory = category === 'all' || tip.category === category;
    const matchesDestination = !destinationId || 
      tip.destinations.includes('all') || 
      tip.destinations.includes(destinationId);
    return matchesCategory && matchesDestination;
  });
};

/**
 * Get tips recommended for a specific destination (priority: essential first)
 */
export const getDestinationTips = (destinationId) => {
  return travelTips
    .filter(tip => 
      tip.destinations.includes(destinationId) || 
      tip.destinations.includes('all')
    )
    .sort((a, b) => {
      // Essential first, then destination-specific before generic
      if (a.priority !== b.priority) return a.priority === 'essential' ? -1 : 1;
      const aSpecific = a.destinations.includes(destinationId);
      const bSpecific = b.destinations.includes(destinationId);
      if (aSpecific !== bSpecific) return aSpecific ? -1 : 1;
      return 0;
    });
};
