import { BuildOptions } from './types/types';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}
