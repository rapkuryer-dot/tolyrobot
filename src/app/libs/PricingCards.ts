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
      'Ранний доступ к обновлениям сайта',
      'Имя в списке благодарностей',
      'Доступ к закрытому Discord',
      'Приоритет на airdrop $TOLY',
    ],
    id: 1,
    oneliner: 'Поддержи фан-проект и получи статус раннего участника',
  },
  {
    price: 99,
    title: 'TOLYROBOT Builder',
    benefits: [
      'Всё из Supporter, плюс:',
      'Голосование за фичи робота',
      'Эксклюзивные 3D-скины Toli',
      'Участие в финансировании долгов проекта',
    ],
    id: 2,
    oneliner: 'Максимальная поддержка строительства TOLYROBOT',
  },
];

export default pricingCards;
