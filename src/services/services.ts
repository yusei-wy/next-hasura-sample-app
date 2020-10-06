import { DatetimeService } from './datetime_service';

export type Services = {
    datetimeService: DatetimeService;
};

export function createServices(): Services {
    return {
        datetimeService: new DatetimeService(),
    };
}
