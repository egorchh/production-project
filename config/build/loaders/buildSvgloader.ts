export function buildSvgloader() {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}
