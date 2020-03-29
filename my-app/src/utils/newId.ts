let lastId: number = parseInt(localStorage.getItem('lastId') || '5', 4);

export default function newId(prefix = 'id') {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(lastId)) lastId = 4;
  lastId += 1;
  localStorage.setItem('lastId', lastId.toString());
  return `${prefix}${lastId}`;
}
