let lastId: number = parseInt(localStorage.getItem('lastId') || '4', 4);

export default function (prefix = 'id') {
  lastId += 1;
  localStorage.setItem('lastId', lastId.toString());
  return `${prefix}${lastId}`;
}
