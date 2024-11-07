import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export function buildLoaders({ isDev }: IBuildOptions): ModuleOptions['rules'] {
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'asset/fonts/[name][ext]',
    },
  };

  const imagesLoaders = {
    test: /\.(png|jpg|jpeg|webp)$/i,
    type: 'asset/resource',
    type: 'asset/resource',
    generator: {
      filename: 'asset/images/[name][ext]',
    },
  };

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
        options: {
          importLoaders: 1,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
          esModule: false,
        },
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
    fontsLoader,
    imagesLoaders,
    cssLoader,
    typescriptLoader,
  ];
};
