export class Pagination
{
    public pageNumber: number;
    public pageSize: number;
    public sortColumns: SortColumn[];

    constructor(pageNumber: number, pageSzie: number, sortColumns: SortColumn[])
    {
        this.pageNumber = pageNumber;
        this.pageSize = pageSzie;
        this.sortColumns = sortColumns;
    }
}

export class SortColumn
{
    public propertyName: string;
    public sortOrder: string;

    constructor(propertyName: string, sortOrder: string)
    {
        this.propertyName = propertyName;
        this.sortOrder = sortOrder;
    }
}