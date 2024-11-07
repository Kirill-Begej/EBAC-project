import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(isDev: boolean): ModuleOptions['rules'] {
  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
            {
              browsers: 'last 3 versions',
            },
          ],
        ],
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { importLoaders: 1 },
      },
      !isDev && postCssLoader,
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/i,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
    cssLoader,
  ];
};
