abstract class Path {
    abstract path(): String
    url(base?: string): String {
        return (base ? base : CENSortplanPaths.baseUrl) + this.path();
    }
}

class OutletGroupLabels {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "outlet-group-labels"; }
    srcSystem(srcSystem?: string){ return new OutletGroupLabelsSrcSystem(this, srcSystem); }
}

class OutletGroupLabelsSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new OutletGroupLabelsSrcSystemSrcInstance(this, srcInstance); }
}

class OutletGroupLabelsSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class OutletTable {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "outlet-table"; }
    srcSystem(srcSystem?: string){ return new OutletTableSrcSystem(this, srcSystem); }
}

class OutletTableSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new OutletTableSrcSystemSrcInstance(this, srcInstance); }
}

class OutletTableSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

class SpecialSortTable {
    constructor(private parent){}
    private path() { return this.parent.path() + "/" + "special-sort-table"; }
    srcSystem(srcSystem?: string){ return new SpecialSortTableSrcSystem(this, srcSystem); }
}

class SpecialSortTableSrcSystem {
    constructor(private parent, private value?: string){}
    private path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcSystem}"); }
    srcInstance(srcInstance?: string){ return new SpecialSortTableSrcSystemSrcInstance(this, srcInstance); }
}

class SpecialSortTableSrcSystemSrcInstance extends Path {
    constructor(private parent, private value?: string){super();}
    path() { return this.parent.path() + "/" + (this.value ? this.value : "{srcInstance}"); }
}

export default class CENSortplanPaths {
    private constructor(){}
    static readonly baseUrl = "server:8080mqtt";
    static readonly basePath = "/cen-sortplan/v1/control";
    private path() { return CENSortplanPaths.basePath; }
    static readonly outletGroupLabels = new OutletGroupLabels(new CENSortplanPaths());
    static readonly outletTable = new OutletTable(new CENSortplanPaths());
    static readonly specialSortTable = new SpecialSortTable(new CENSortplanPaths());
}

