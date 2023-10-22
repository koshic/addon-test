export const load = async (url, context, nextLoad) => {
    if (context.format === 'commonjs') {
        return {
            source: `console.log(require("./addon.node"));`,
            format: "commonjs",
            shortCircuit: true,  
        }
    }

    return nextLoad(url, context);
}  