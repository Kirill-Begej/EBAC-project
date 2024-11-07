import { Configuration } from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolvers({ paths }: IBuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
