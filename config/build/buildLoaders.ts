import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: [
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true,
                        },
                    },
                ],
            },
        }],
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const scssLoader = buildCssLoader(options.isDev);

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        scssLoader,
        svgLoader,
        fileLoader,
    ];
}
