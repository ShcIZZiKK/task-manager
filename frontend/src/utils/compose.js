const compose =
    (...functions) =>
    (composed) => {
        return functions.reduceRight((wrapped, func) => func(wrapped), composed);
    };

export default compose;
