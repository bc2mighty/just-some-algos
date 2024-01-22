
// console.log(paths);
/*
WHen Path = [ 'FCT-1' ]
depth = 1
tree = {[`${Path[depth-1]}`]: {}}
tree = {'FCT-1': {}}

WHen Path = [ 'FCT-1', 'Lifecamp-2' ]
depth = 2
tree[Path[depth - 2]][Path[depth - 1]] = {}
tree = {'FCT-1': {'Lifecamp-2': {}}}


WHen Path = [ 'FCT-1', 'Apo-3' ]
depth = 2
tree[Path[depth - 2]][Path[depth - 1]] = {}
tree = {'FCT-1': {'Lifecamp-2': {}, 'Apo-3}: {}}


WHen Path = [ 'FCT-1', 'Apo-3', 'Gwagwalada-4' ]
depth = 3
tree[Path[depth - 3]][Path[depth - 2]][Path[depth - 1]] = {}
tree = {'FCT-1': {'Lifecamp-2': {}, 'Apo-3}: {}}



*/
// let path = 
// [
//     [ 'FCT-1' ],
//     [ 'FCT-1', 'Lifecamp-2' ],
//     [ 'FCT-1', 'Apo-3' ],
//     ['FCT-1', 'Apo-3', 'Gwagwalada-4']
// ]

// let temporalTree = {};
// let count = path.length - 1;
// while(count >= 0) {
//     temporalTree = {[`${path[count]}`]: temporalTree}
//     // console.log(count);
//     count--;
// }
// console.log(temporalTree);
// let newPath = { FCT-1: { Apo-3: { Gwagwalada-4: {} } } }
// console.log(newPath)

// let paths = [
//     [10],
//     [10, 4],
//     [10, 5],
//     [10, 13],
//     [10, 5, 2],
//     [10, 5, 7],
//     [10, 13, 11],
//     [10, 13, 16],
//     [10, 13, 16, 18],
//   ]
let paths = [
    {
        "id": 1,
        "name": "FCT",
        "path": "FCT-1"
    },
    {
        "id": 2,
        "name": "Lifecamp",
        "path": "FCT-1.Lifecamp-2"
    },
    {
        "id": 3,
        "name": "Apo",
        "path": "FCT-1.Apo-3"
    },
    {
        "id": 4,
        "name": "Gwagwalada",
        "path": "FCT-1.Apo-3.Gwagwalada-4"
    },
    {
        "id": 5,
        "name": "Lugbe",
        "path": "FCT-1.Apo-3.Lugbe-5"
    },
    {
        "id": 6,
        "name": "New Karu",
        "path": "FCT-1.Lifecamp-2.New_Karu-6"
    },
    {
        "id": 7,
        "name": "Old_Karu",
        "path": "FCT-1.Lifecamp-2.Old_Karu-7"
    },
    {
        "id": 8,
        "name": "Jabi",
        "path": "FCT-1.Lifecamp-2.New_Karu-6.Jabi-8"
    },
    {
        "id": 9,
        "name": "Jahi",
        "path": "FCT-1.Lifecamp-2.New_Karu-6.Jahi-9"
    },
    {
        "id": 10,
        "name": "Gwarimpa",
        "path": "FCT-1.Lifecamp-2.Old_Karu-7.Gwarimpa-10"
    },
    {
        "id": 11,
        "name": "Wuse",
        "path": "FCT-1.Lifecamp-2.Old_Karu-7.Wuse-11"
    },
]

/*
                                                                FCT
                                        Lifecamp                                   Apo
                        Old Karu                 New Karu           Gwagwalada          Lugbe
                Gwarimpa            Wuse    Jahi            Wuye
*/

paths = paths.map(path => {
    return {
        id: path.id,
        name: path.name,
        paths: path.path.split('.'),
    }
})
let folders = paths;
let structure = {
    id: 1,
    folder: 'folder1',
    children: []
}

let getFolderIndex = (parentFolderId, tree) => {
    let index = null, count = 0;
    tree.forEach(parentFolder => {
        if(parentFolder.id == parentFolderId){
            index = count
            return;
        };
        count++
    })
    return index;
}


count = paths.length - 1;
let tree = [], rest = [], restCount = 0;
while(count > 0) {
    let {id, name, paths: folderPaths} = paths[count];
    let pathLength = folderPaths.length;
    // Get Parent folders
    let parentFolder = folderPaths[pathLength - 2];
    let [parentFolderName, parentFolderId] = parentFolder.split('-');

    // Get Child folder
    let childFolder = folderPaths[pathLength - 1];
    let [childFolderName, childFolderId] = childFolder.split('-');

    // Get Parent folder index
    let parentFolderIndex = getFolderIndex(parentFolderId, tree);

    // If currently fetching resetting the head of a tree
    if(restCount < rest.length) {
        let treeHead = rest.find((folder) => {
            return folder.id == childFolderId
        })
        tree[parentFolderIndex].sub_folders.push(treeHead);
        restCount++;
        if(restCount == rest.length){ 
            rest = []
            restCount = 0;
        }
    } 
    // If parent folder is not found in the current tree
    else if(parentFolderIndex == null) {
        if(tree.length) {
            let childFolderIndex = getFolderIndex(childFolderId, tree);
            // Set all child folders into the parent folder
            if(childFolderIndex != null) {
                rest = tree;
                let treeHead = rest.find((folder) => {
                    return folder.id == childFolderId
                })
                restCount++;
                tree = [];
                tree = [
                    {
                        id: parentFolderId,
                        folder: parentFolderName,
                        sub_folders: [
                            treeHead,
                        ]
                    }
                ]
            } 
            // push child node into the sub folders of parent node
            else {
                tree.push(
                        {
                            id: parentFolderId,
                            folder: parentFolderName,
                            sub_folders: [
                                {
                                    id: childFolderId,
                                    folder: childFolderName,
                                    sub_folders: []
                                }
                            ]
                        }
                )
            }
        } else {
            // Set a new tree
            tree = [
                    {
                        id: parentFolderId,
                        folder: parentFolderName,
                        sub_folders: [
                            {
                                id: childFolderId,
                                folder: childFolderName,
                                sub_folders: []
                            }
                        ]
                    }
                ]
        }
    } else {
        // Append to the subfolder
        tree[parentFolderIndex].sub_folders.push(
            {
                id: childFolderId,
                folder: childFolderName,
                sub_folders: []
            }
        )
    }
    count--;
}
console.log(JSON.stringify(tree))


// }
// while(count > 9) {
//     let path = paths[count];
//     let {id, name, paths} = path;
//     let pathLength = paths.length;
    
//     if(!tree[path[pathLength - 2]]) {
//         if(tree[path[pathLength - 1]]) {
//             rest = tree;
//             restCount++;
//             tree = {}
//             tree[path[pathLength - 2]] = {[path[pathLength - 1]]: rest[path[pathLength - 1]]}
//         } else {
//             tree[path[pathLength - 2]] = {[path[pathLength - 1]]: {}}
//         }
//     } else if(Object.keys(rest).length) {
//         tree[path[pathLength - 2]] = {...tree[path[pathLength - 2]], [path[pathLength - 1]]: rest[path[pathLength - 1]]}
//         restCount++
//         if(restCount == Object.keys(rest).length) rest = {};
//     } else {
//         tree[path[pathLength - 2]] = {...tree[path[pathLength - 2]], ...{[path[pathLength - 1]]: {}}}
//     }
//     count--;
// }