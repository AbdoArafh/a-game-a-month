module.exports = {
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "Arial", "default"],
            },
            transitionProperty: {
                left: "left",
            }
        }
    },
    shortcuts: {
        "cutout": {
            "@apply": "m-0 mt-10 w-[100%]",
            "z-index": "1",
            "clip-path": "polygon(0 0, 100% 10%, 100% 100%, 0 90%)"
        }
    }
}