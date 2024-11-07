import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins({ paths }: IBuildOptions): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
