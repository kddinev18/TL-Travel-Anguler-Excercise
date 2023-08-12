export class ServerResponse<T>{
    public records!: T[];
    public totalRecordsCount!: number;
}