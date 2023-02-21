import { defineConfig, normalizePath } from 'vite';

// 引入 path 包注意两点：
// 1、为避免类型报错，需要pnpm i @types/node -D安装
// 2、tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
import path from 'path';

// 全局 scss 文件路径
// 通过 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

import vue from '@vitejs/plugin-vue';
// vue 得通过这个插件才可以支持 jsx 和 tsx 语法
import vueJsx from '@vitejs/plugin-vue-jsx';

// 自动为不同目标的浏览器添加样式前缀，解决浏览器兼容问题
import autoprefixer from 'autoprefixer';

// 如果不装编辑器插件，可以通过vite插件进行开发阶段eslint扫描，以命令行的形式展示代码中的规范问题，并且能够直接定位到源文件(这个插件有单独进程运行，并不会影响vite项目的启动速度)
// import viteEslint from 'vite-plugin-eslint';

// ToDo：与上方插件作用类似，不过是用于style的，不过不知道为啥子用不了
// import viteStyleLint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  // css 相关
  css: {
    postcss: {
      // postcss 插件地址:www.postcss.parts/
      plugins: [
        autoprefixer({
          // 指定浏览器
          overrideBrowserslist: ['> 1%', 'last 2 versions']
        })
      ]
    },
    modules: {
      // 一般我们通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中 name 表示当前文件名，local 表示类名
      // generateScopedName: "[name]__[local]__[hash:base64:5]"
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自定注入，这样就不需要每个组件都去手动引入全局公共样式了
        additionalData: `@import "${variablePath}";`
      }
    }
  },

  // 手动指定项目的根目录位置
  root: path.join(__dirname, 'src'), // 注意：当我们将入口改至src目录下后，public下的资源文件需要配置publicDir才能正确使用 https://vitejs.dev/config/shared-options.html#publicdir

  plugins: [
    vue(),
    vueJsx()
    // viteStyleLint({
    //   // 忽略文件
    //   exclude: /node_modules/
    // })
    // viteEslint()
  ]
});
