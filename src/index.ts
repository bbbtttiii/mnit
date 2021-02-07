import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  //create a new post
  const post = orm.em.create(Post, {title: 'my first post'});

  //insert into db
  await orm.em.persistAndFlush(post);
  console.log('-------sql2-------');
};



main()