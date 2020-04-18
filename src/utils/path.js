var urljoin = require('url-join');


export function pathJoin(parts){
  return urljoin(...parts)
}
