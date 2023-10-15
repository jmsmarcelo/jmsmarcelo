function setPage(e) {
    objs['body'] = d.body;
    for(let k in e) {
        let nK = k.split('_');
        objs[nK[2]] = d.createElement(nK[1]);
        if(e[k].length > 0) {
            for(let v of e[k]) {
                let nV = v.split('__');
                objs[nK[2]][nV[0]] = nV[1];
            }
        }
        objs[nK[0]].appendChild(objs[nK[2]]);
    }
}