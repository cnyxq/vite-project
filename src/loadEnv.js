import * as dotenv from 'dotenv';

// 通过 dotenv 配置需要加载指定 .env 文件，这样 process.env 打印到得就是对应得文件了
// 这里的 mode 是我们启动时候的参数，npm run build:test 得到的 mode 就是 test
export function loadEnv(mode) {
  const ret = {};
  // 在使用之前我们先指定加载哪个环境变量
  dotenv.config({
    path: `.env.${mode}`
  });

  dotenv.config({
    path: `.env`
  });

  Object.keys(process.env).forEach((envName) => {
    const realName = process.env[envName].replace(/\\n/g, '\n');
    ret[envName] = realName;
    // 向 process.env 上扩展我们定义的 VITE 环境变量
    process.env[envName] = realName;
  });
  return ret;
}

// 注意：通过这种方式script需要手动添加 '--mode xxxx'
