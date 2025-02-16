import { faker } from '@faker-js/faker';
import type { IData } from '~/composables/use-data-table';

export const generateFakeData = async (count: number = 1): Promise<IData[]> => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int({ min: 1, max: 9999 }),
    company: {
      name: faker.company.name(),
      url: faker.internet.url(),
    },
    lisenceUse: faker.number.int({ min: 1, max: 100 }),
    status: faker.helpers.arrayElement(['Churned', 'Customer']),
    users: Array.from({ length: faker.number.int({ min: 1, max: 20 }) }, () =>
      faker.person.fullName()
    ),
    about: {
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
    },
  }));
};
