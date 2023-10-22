export const load = async (url, context, nextLoad) => {
    if (context.format === 'commonjs') {
        return {
            source: `require(require('path').resolve("./addon.node"))`,
            format: "commonjs",
            shortCircuit: true,  
        }
    }

    return nextLoad(url, context);
}  