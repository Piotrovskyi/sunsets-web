import urlJoin from 'url-join';

export const joinUrl = (...args) => urlJoin(...args.map(el => el.toString()))
