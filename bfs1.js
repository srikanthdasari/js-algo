// https://javascript.plainenglish.io/breadth-first-breath-first-search-482eb6ec7c3c


edges = [
    ['myhouse', 'momanddad'],
    ['momanddad', 'niece1'],
    ['momanddad', 'nephew'],
    ['myhouse', 'inlaws'],
    ['inlaws', 'kid2'],
    ['inlaws', 'kid1']
];

let vertices = [
    { name: 'myhouse', distance: null, predecessor: null },
    { name: 'momanddad', distance: null, predecessor: null },
    { name: 'inlaws', distance: null, predecessor: null },
    { name: 'niece1', distance: null, predecessor: null },
    { name: 'nephew', distance: null, predecessor: null },
    { name: 'kid1', distance: null, predecessor: null },
    { name: 'kid2', distance: null, predecessor: null }
];

function findNode(nodeName, vertices) {
    return vertices.find(vertex => vertex.name === nodeName);
}

