import { defaults } from "./config/defaults";

export const buildMethodString = (config, type: string = defaults.response) => {
    const logMethodPost = config.config?.method?.length === 4 ? " " : "";
    const logMethodGetOrPut = config.config?.method?.length === 3;

    switch (type) {
        case defaults.response:
            return `${config.config.method?.toUpperCase()}${logMethodGetOrPut ? "  " : logMethodPost}`;
        case defaults.request:
            return "";
        case defaults.error:
            return `${config.config.method?.toUpperCase()}  `;
        default:
            return "";
    }
}
