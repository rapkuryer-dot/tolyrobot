interface IPricingCard {
  price: number;
  title: string;
  benefits: string[];
  id: number;
  oneliner: string;
}

const pricingCards: IPricingCard[] = [
  {
    price: 49,
    title: 'TOLYROBOT Supporter',
    benefits: [
      'Early access to site updates',
      'Name on the credits list',
      'Access to the private Discord',
      'Priority on future community drops',
    ],
    id: 1,
    oneliner: 'Back the fan project and get early-member status',
  },
  {
    price: 99,
    title: 'TOLYROBOT Builder',
    benefits: [
      'Everything in Supporter, plus:',
      'Vote on robot features',
      'Exclusive 3D Toli skins',
      'Direct input on the project roadmap',
    ],
    id: 2,
    oneliner: 'Maximum support for building TOLYROBOT',
  },
];

export default pricingCards;
