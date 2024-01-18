let paths = [
    {
        "name": "FCT",
        "path": "FCT"
    },
    {
        "name": "Lifecamp",
        "path": "FCT.Lifecamp"
    },
    {
        "name": "Apo",
        "path": "FCT.Apo"
    },
    {
        "name": "Gwagwalada",
        "path": "FCT.Apo.Gwagwalada"
    },
    {
        "name": "Lugbe",
        "path": "FCT.Apo.Lugbe"
    },
    {
        "name": "New Karu",
        "path": "FCT.Lifecamp.New_Karu"
    },
    {
        "name": "Old_Karu",
        "path": "FCT.Lifecamp.Old_Karu"
    },
    {
        "name": "Jabi",
        "path": "FCT.Lifecamp.New_Karu.Jabi"
    },
    {
        "name": "Jahi",
        "path": "FCT.Lifecamp.New_Karu.Jahi"
    },
    {
        "name": "Gwarimpa",
        "path": "FCT.Lifecamp.Old_Karu.Gwarimpa"
    },
    {
        "name": "Wuse",
        "path": "FCT.Lifecamp.Old_Karu.Wuse"
    },
]

paths = paths.map(path => {
    return {
        name: path.name,
        path: path.path.split('.'),
    }
})
console.log(paths);