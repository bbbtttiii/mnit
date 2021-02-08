import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () => {
  //connect to db
  const orm = await MikroORM.init(mikroConfig);

  //run migrations
  orm.getMigrator().up();

  //create a new post
  const post = orm.em.create(Post, {title: 'my first post'});

  //insert into db
  await orm.em.persistAndFlush(post);

  const posts = await orm.em.find(Post, {});
  console.log(posts)

};

main().catch((err) => {
  console.error(err)
});