import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'mnit',
    type: 'postgresql',
    debug: !__prod__
  });
};

main();