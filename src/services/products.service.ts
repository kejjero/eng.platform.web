import { Injectable } from '@angular/core';

const domain = 'https://result.school';

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '1',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'TypeScript',
    time: '1 month',
    type: ProductType.Skill,
  },
  {
    id: '2',
    title: 'Git и GitHub',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'Git',
    time: '2 weeks',
    type: ProductType.Skill,
  },
  {
    id: '3',
    title: 'Redux, Redux Toolkit и MobX',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'State-Managers',
    time: '2 weeks',
    type: ProductType.Skill,
  },
  {
    id: '4',
    title: 'React',
    link: '/products/react',
    image: '/img/icons/products/icon-react.svg',
    text: 'React base',
    time: '2 month',
    type: ProductType.Skill,
  },
  {
    id: '5',
    title: 'JavaScript',
    link: '/products/first-stage',
    image: '/img/icons/products/icon-first-stage.svg',
    text: 'JavaScript',
    time: '3 month',
    type: ProductType.Skill,
  },
  {
    id: '6',
    title: 'React advanced',
    link: '/products/second-stage',
    image: '/img/icons/products/icon-second-stage.svg',
    text: 'React JS, Context API, Redux, Webpack, Docker, TypeScript',
    time: '6 month',
    type: ProductType.Skill,
  },
  {
    id: '7',
    title: 'Продвинутый JavaScript',
    link: '/products/advanced-js',
    image: '/img/icons/products/icon-advanced-js.svg',
    text: 'Webpack, Jest, Node.js, State Managers, ООП, ESlint, SASS, Data Layer',
    time: '2 Month',
    type: ProductType.Intensive,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
