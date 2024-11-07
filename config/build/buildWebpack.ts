import { Configuration } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpack(options: IBuildOptions): Configuration {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
