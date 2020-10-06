export class DatetimeService {
    public getNow(): Date {
        return new Date();
    }

    public getNowByString(datetime: string): Date {
        return new Date(datetime);
    }
}
