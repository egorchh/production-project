export function buildSvgloader() {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        exclude: /node_modules/,
    };
}
