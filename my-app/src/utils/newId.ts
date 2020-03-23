let lastId: number = parseInt(localStorage.getItem('lastId') || '4');

export default function (prefix = 'id') {
    lastId++;
    localStorage.setItem('lastId', lastId.toString());
    return `${prefix}${lastId}`;
}