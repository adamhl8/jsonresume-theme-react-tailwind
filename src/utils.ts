export const removeProtocol = (url: string) => url.replaceAll(/.*?:\/\//gv, "")
